"use server";

import * as cheerio from "cheerio";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

export interface AuditIssue {
    type: "SEO" | "GEO" | "TECHNICAL";
    severity: "CRITICAL" | "WARNING" | "INFO";
    message: string;
    scoreImpact: number;
}

export interface AuditResult {
    url: string;
    seo_score: number;
    geo_score: number;
    issues: AuditIssue[];
    recommendations: string[];
    details: {
        title: string;
        description: string;
        h1: string[];
        images_count: number;
        images_missing_alt: number;
        canonical: string | null;
        schema_types: string[];
        og_tags: Record<string, string>;
        geo_data: {
            nap_detected: boolean;
            map_embed: boolean;
            hreflang: boolean;
            coordinates: boolean;
        };
    };
}

export async function runAudit(url: string): Promise<AuditResult> {
    // Validate URL (add protocol if missing)
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    try {
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Antigravity-SEO-Auditor/1.0",
            },
            next: { revalidate: 0 }, // No cache
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch URL: ${res.statusText}`);
        }

        const html = await res.text();
        const $ = cheerio.load(html);

        const issues: AuditIssue[] = [];
        let seoScore = 100;
        let geoScore = 100;

        // --- SEO CHECKS ---

        // 1. Title
        const title = $("title").text().trim();
        if (!title) {
            issues.push({ type: "SEO", severity: "CRITICAL", message: "Missing <title> tag", scoreImpact: 20 });
            seoScore -= 20;
        } else if (title.length < 30 || title.length > 60) {
            issues.push({ type: "SEO", severity: "WARNING", message: `Title length (${title.length}) is not optimal (30-60 chars)`, scoreImpact: 5 });
            seoScore -= 5;
        }

        // 2. Meta Description
        const desc = $('meta[name="description"]').attr("content")?.trim() || "";
        if (!desc) {
            issues.push({ type: "SEO", severity: "CRITICAL", message: "Missing meta description", scoreImpact: 15 });
            seoScore -= 15;
        } else if (desc.length < 120 || desc.length > 160) {
            issues.push({ type: "SEO", severity: "WARNING", message: `Meta description length (${desc.length}) is not optimal (120-160 chars)`, scoreImpact: 5 });
            seoScore -= 5;
        }

        // 3. H1
        const h1s: string[] = [];
        $("h1").each((i, el) => h1s.push($(el).text().trim()));

        if (h1s.length === 0) {
            issues.push({ type: "SEO", severity: "CRITICAL", message: "Missing H1 tag", scoreImpact: 15 });
            seoScore -= 15;
        } else if (h1s.length > 1) {
            issues.push({ type: "SEO", severity: "WARNING", message: "Multiple H1 tags found (should be exactly one)", scoreImpact: 5 });
            seoScore -= 5;
        }

        // 4. Images
        const images = $("img");
        let missingAlt = 0;
        images.each((i, el) => {
            if (!$(el).attr("alt")) missingAlt++;
        });
        if (missingAlt > 0) {
            issues.push({ type: "SEO", severity: "WARNING", message: `${missingAlt} images missing alt text`, scoreImpact: Math.min(10, missingAlt * 2) });
            seoScore -= Math.min(10, missingAlt * 2);
        }

        // 5. Canonical
        const canonical = $('link[rel="canonical"]').attr("href") || null;
        if (!canonical) {
            issues.push({ type: "SEO", severity: "INFO", message: "Missing canonical tag", scoreImpact: 0 }); // Often handled by framework, severity reduced
        }

        // 6. Schema
        const schemaTypes: string[] = [];
        $('script[type="application/ld+json"]').each((i, el) => {
            try {
                const json = JSON.parse($(el).html() || "{}");
                if (json["@type"]) schemaTypes.push(json["@type"]);
                if (json["@graph"]) {
                    json["@graph"].forEach((g: any) => {
                        if (g["@type"]) schemaTypes.push(g["@type"]);
                    })
                }
            } catch (e) { }
        });

        // 7. OG Tags
        const ogTags: Record<string, string> = {};
        $('meta[property^="og:"]').each((i, el) => {
            ogTags[$(el).attr("property") || ""] = $(el).attr("content") || "";
        });
        if (!ogTags["og:title"] || !ogTags["og:image"]) {
            issues.push({ type: "SEO", severity: "WARNING", message: "Incomplete OpenGraph tags", scoreImpact: 5 });
            seoScore -= 5;
        }

        // --- GEO CHECKS ---
        // 1. NAP Detection (Simple Regex)
        // Looking for phone number pattern + typical address keywords
        const bodyText = $("body").text();
        const hasPhone = /(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/.test(bodyText) || /(021|08)\d{8,}/.test(bodyText); // Global + Indo format
        const hasAddress = /Jl\.|Jalan|Street|St\.|Ave|Blvd/.test(bodyText);
        const napDetected = hasPhone && hasAddress;

        if (!napDetected) {
            issues.push({ type: "GEO", severity: "WARNING", message: "Contact details (NAP) not clearly detected on page", scoreImpact: 10 });
            geoScore -= 10;
        }

        // 2. Map Embed
        const mapEmbed = $('iframe[src*="google.com/maps"]').length > 0;
        if (!mapEmbed) {
            issues.push({ type: "GEO", severity: "WARNING", message: "No Google Maps embed found", scoreImpact: 10 });
            geoScore -= 10;
        }

        // 3. Local Schema
        const hasLocalSchema = schemaTypes.some(t => ["LocalBusiness", "Organization", "Place", "Restaurant", "Store"].includes(t));
        if (!hasLocalSchema) {
            issues.push({ type: "GEO", severity: "CRITICAL", message: "Missing LocalBusiness or Organization schema", scoreImpact: 20 });
            geoScore -= 20;
        }

        // 4. Hreflang
        const hasHreflang = $('link[rel="alternate"][hreflang]').length > 0;
        if (!hasHreflang) {
            // Only warn if likely needed? Let's just info for now unless explicit requirements.
            // User requested check for hreflang.
            issues.push({ type: "GEO", severity: "INFO", message: "No hreflang tags found (recommended for multi-region)", scoreImpact: 0 });
        }

        // 5. Coordinates (Meta geo)
        const hasCoords = $('meta[name="geo.position"]').length > 0 || $('meta[name="ICBM"]').length > 0;
        if (!hasCoords) {
            issues.push({ type: "GEO", severity: "INFO", message: "Missing legacy Geo meta tags", scoreImpact: 0 }); // Low impact in modern SEO, but requested
        }

        // --- AI SUGGESTIONS ---
        // Extract main content for context (truncate to ~1000 chars)
        const mainContent = $("main").text().slice(0, 1000).replace(/\s+/g, " ").trim();

        let recommendations: string[] = [];

        try {
            const { object } = await generateObject({
                model: openai("gpt-4o"),
                schema: z.object({
                    recommendations: z.array(z.string()).describe("List of 3-5 specific, actionable SEO/GEO recommendations based on the page analysis.")
                }),
                prompt: `
            Analyze this page content summary and identified issues to provide specific recommendations.
            
            Context:
            Title: ${title}
            Desc: ${desc}
            H1: ${h1s.join(', ')}
            Main Content Snippet: ${mainContent}
            
            Identified Issues:
            ${issues.map(i => `- ${i.message}`).join('\n')}
            
            Focus on:
            1. Suggesting optimized title/desc if missing or weak.
            2. Local SEO improvements (based on absence of schema or map).
            3. Content keyword relevance.
            
            Return strictly 3-5 actionable strings.
            `
            });
            recommendations = object.recommendations;
        } catch (e) {
            console.error("AI Recommendation failed:", e);
            recommendations = ["Could not generate AI recommendations at this time."];
        }

        const result: AuditResult = {
            url,
            seo_score: Math.max(0, seoScore),
            geo_score: Math.max(0, geoScore),
            issues,
            recommendations,
            details: {
                title,
                description: desc,
                h1: h1s,
                images_count: images.length,
                images_missing_alt: missingAlt,
                canonical,
                schema_types: schemaTypes,
                og_tags: ogTags,
                geo_data: {
                    nap_detected: napDetected,
                    map_embed: mapEmbed,
                    hreflang: hasHreflang,
                    coordinates: hasCoords
                }
            },
        };

        // Save to file
        try {
            const dataDir = path.join(process.cwd(), "cms");
            await fs.mkdir(dataDir, { recursive: true });
            const filePath = path.join(dataDir, "seo_audits.json");

            let audits: any[] = [];
            try {
                const fileContent = await fs.readFile(filePath, "utf-8");
                audits = JSON.parse(fileContent);
            } catch (e) {
                // File likely doesn't exist or is invalid
            }

            // Add new audit, keep last 50
            const newAuditEntry = { ...result, timestamp: new Date().toISOString() };
            audits.unshift(newAuditEntry);
            if (audits.length > 50) audits = audits.slice(0, 50);

            await fs.writeFile(filePath, JSON.stringify(audits, null, 2));
        } catch (e) {
            console.warn("Failed to save audit log:", e);
        }

        return result;
    } catch (error: any) {
        throw new Error(error.message || "Audit failed to run");
    }
}
