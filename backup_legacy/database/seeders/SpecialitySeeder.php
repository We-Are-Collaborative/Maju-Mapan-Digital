<?php

namespace Database\Seeders;

use App\Models\Speciality;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Carbon\Carbon;

class SpecialitySeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title' => 'Brand Strategy & Positioning',
                'subtitle' => 'Define your north star',
                'icon_url' => 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=100&h=100&fit=crop&crop=center',
                'description' => "Kami membantu memetakan posisi merek—mulai dari brand audit, audience insight, hingga messaging framework. Hasilnya: diferensiasi jelas dan arah kreatif yang konsisten di semua kanal.",
                'key_component' => [
                    ['title' => 'Brand Audit', 'description' => 'Analisis ekosistem brand & kompetitor.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Audience Insight', 'description' => 'Persona, motivasi, & trigger keputusan.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Positioning', 'description' => 'Value proposition & diferensiasi jelas.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Messaging', 'description' => 'Tone of voice & messaging framework.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Discover', 'description' => 'Riset pasar, wawancara, & social listening.'],
                    ['title' => 'Define', 'description' => 'Rumuskan positioning & arsitektur brand.'],
                    ['title' => 'Design', 'description' => 'Guardrails visual & messaging playbook.'],
                    ['title' => 'Deploy', 'description' => 'Implementasi konsisten lintas kanal.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'Creative & Content Production',
                'subtitle' => 'Stories that move people',
                'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center',
                'description' => "Produksi konten end-to-end—video, foto, desain, copy—berbasis insight dan pilar konten. Optimized untuk setiap platform agar kampanye terasa relevan dan engaging.",
                'key_component' => [
                    ['title' => 'Video & Photo', 'description' => 'Produksi aset visual end-to-end.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Design System', 'description' => 'Template & konsistensi visual.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Copywriting', 'description' => 'Narasi & CTA yang tajam.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'UGC/Creators', 'description' => 'Kolaborasi kreator yang relevan.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Concept', 'description' => 'Ide besar, moodboard, narrative arc.'],
                    ['title' => 'Pre-Prod', 'description' => 'Script, shot list, talent & lokasi.'],
                    ['title' => 'Produce', 'description' => 'Shooting, desain, dan editing.'],
                    ['title' => 'Publish', 'description' => 'Versioning per kanal & QC.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'Social Media & Community',
                'subtitle' => 'From followers to fans',
                'icon_url' => 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=center',
                'description' => "Strategi kanal (IG, TikTok, X, LinkedIn), kalender konten, dan community management. Kami bangun percakapan bermakna yang mendorong loyalitas dan advocacy.",
                'key_component' => [
                    ['title' => 'Channel Playbook', 'description' => 'Peran tiap kanal & do/don’t.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Content Calendar', 'description' => 'Ritme terencana & konsisten.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Community Ops', 'description' => 'SOP respons & eskalasi.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Social Listening', 'description' => 'Monitor topik & sentiment.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Audit', 'description' => 'Health check kanal & kompetitor.'],
                    ['title' => 'Plan', 'description' => 'Pilar konten, format, & jadwal.'],
                    ['title' => 'Run', 'description' => 'Publikasi & engagement harian.'],
                    ['title' => 'Improve', 'description' => 'Iterasi via insight & data.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'Performance Marketing (Ads)',
                'subtitle' => 'Results you can measure',
                'icon_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center',
                'description' => "Strategi funnel dan eksekusi iklan di Meta, TikTok, Google. Fokus pada creative testing, optimasi CPA/ROAS, dan atribusi yang jelas.",
                'key_component' => [
                    ['title' => 'Funnel Strategy', 'description' => 'TOFU–MOFU–BOFU terukur.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Paid Channels', 'description' => 'Meta, TikTok, Google Ads.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Creative Testing', 'description' => 'Variasi visual & hooks.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Attribution', 'description' => 'Tracking, UTM, & GA4.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Setup', 'description' => 'Pixel, events, & konversi siap.'],
                    ['title' => 'Launch', 'description' => 'Kampanye per tahap funnel.'],
                    ['title' => 'Optimize', 'description' => 'A/B test, bid, & budget tuning.'],
                    ['title' => 'Scale', 'description' => 'Lookalike & creative refresh.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'SEO & Organic Growth',
                'subtitle' => 'Be found, stay chosen',
                'icon_url' => 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=100&h=100&fit=crop&crop=center',
                'description' => "Pertumbuhan organik melalui technical SEO, on-page, content cluster, dan link building. Dirancang untuk stabil, berkelanjutan, dan anti-volatile.",
                'key_component' => [
                    ['title' => 'Technical SEO', 'description' => 'Kecepatan & struktur IA.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'On-page', 'description' => 'Semantic & internal linking.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Content Cluster', 'description' => 'Topic hubs & authority.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Digital PR', 'description' => 'Eksposur & backlink berkualitas.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Audit', 'description' => 'Tech issues, konten, backlink.'],
                    ['title' => 'Prioritize', 'description' => 'Quick wins & roadmap 90 hari.'],
                    ['title' => 'Produce', 'description' => 'Konten pilar & cluster.'],
                    ['title' => 'Amplify', 'description' => 'Distribusi & PR.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'Web & Conversion (CRO)',
                'subtitle' => 'Turn clicks into customers',
                'icon_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center',
                'description' => "Landing page dan website berorientasi konversi: UX jelas, copy tajam, tracking rapi. Tujuannya: CTR naik, CPA turun.",
                'key_component' => [
                    ['title' => 'UX & Copy', 'description' => 'Alur jelas & pesan kuat.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Landing Pages', 'description' => 'Micro-sites berfokus konversi.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Form/Checkout', 'description' => 'Friction rendah, trust tinggi.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'A/B Testing', 'description' => 'Eksperimen & heatmap review.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Map', 'description' => 'Jobs-to-be-done & user flows.'],
                    ['title' => 'Design', 'description' => 'Wireframe, UI, & messaging.'],
                    ['title' => 'Build', 'description' => 'Implementasi & QA.'],
                    ['title' => 'Experiment', 'description' => 'A/B test & iterasi.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'Influencer & KOL Marketing',
                'subtitle' => 'Creators who convert',
                'icon_url' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop&crop=center',
                'description' => "Aktivasi KOL end-to-end: mapping, outreach, brief kreatif, contract & tracking performa. Fokus ke relevansi dan dampak bisnis.",
                'key_component' => [
                    ['title' => 'Discovery', 'description' => 'Shortlist & brand safety.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Briefing', 'description' => 'Creative direction & CTA.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Execution', 'description' => 'Konten live & amplifikasi.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Measurement', 'description' => 'Attribution & UTM.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Scout', 'description' => 'Audience fit & risiko terjaga.'],
                    ['title' => 'Brief', 'description' => 'Pesan, CTA, & deliverables jelas.'],
                    ['title' => 'Launch', 'description' => 'Konten tayang & amplifikasi.'],
                    ['title' => 'Measure', 'description' => 'Pelajaran & scale strategi.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop&crop=center',
            ],
            [
                'title' => 'CRM & Lifecycle Marketing',
                'subtitle' => 'Retention beats acquisition',
                'icon_url' => 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop&crop=center',
                'description' => "Email, WhatsApp, dan automation untuk meningkatkan repeat rate & CLV. Segmentasi, personalisasi, dan journey yang relevan.",
                'key_component' => [
                    ['title' => 'Segmentation', 'description' => 'RFM & perilaku.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Automation', 'description' => 'Flow trigger & rules.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Loyalty & Offer', 'description' => 'Program & promo terukur.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                    ['title' => 'Churn Control', 'description' => 'Win-back & prevention.', 'icon_url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'],
                ],
                'strategy_work' => [
                    ['title' => 'Model', 'description' => 'Segmentasi & event design.'],
                    ['title' => 'Design', 'description' => 'Journey & konten tiap tahap.'],
                    ['title' => 'Automate', 'description' => 'Implementasi flow & QA.'],
                    ['title' => 'Optimize', 'description' => 'Cohort & uplift analysis.'],
                ],
                'background_url' => 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&crop=center',
            ],
        ];

        $now = Carbon::now();
        $rows = [];

        foreach ($items as $idx => $item) {
            $excerpt = Str::limit(Str::of($item['description'])->squish(), 200);

            $payload = [
                'title' => $item['title'],
                'subtitle' => $item['subtitle'],
                'slug' => Str::slug($item['title']),
                'icon_url' => $item['icon_url'],
                'description' => $item['description'],
                'excerpt' => $excerpt,
                'key_component' => $item['key_component'] ?? [],
                'strategy_work' => $item['strategy_work'] ?? [],
                'created_at' => $now->copy()->subDays(count($items) - $idx),
                'updated_at' => $now->copy()->subDays(count($items) - $idx),
            ];

            $speciality = Speciality::query()->create($payload);
            $speciality->addMediaFromUrl('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center')->toMediaCollection('thumbnail');
        }


        // Note: Background media files can be added later through admin interface or separate command
        // Background URLs: Each item contains background_url for reference
    }
}
