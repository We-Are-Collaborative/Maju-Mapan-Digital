<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $settings = [
            // Site Settings
            ['key' => 'site_name', 'value' => '5758 Creative Lab'],

            // Contact Settings
            ['key' => 'contact_address', 'value' => '18 Parc Place SCBD, Jl. Jend. Sudirman kav 52-53 Tower C Lantai 3, Senayan, Kebayoran Baru, Jakarta 12190'],
            ['key' => 'contact_phone', 'value' => '+62878-8080-8980'],
            ['key' => 'contact_marketing_objectives', 'value' => 'E-Commerce, Communication, Conversion Rate, SEO/SEM, Performance Marketing'],

            // Social Media & Contact Links
            ['key' => 'instagram_text', 'value' => '@5758creativelab'],
            ['key' => 'instagram_link', 'value' => 'https://www.instagram.com/5758creativelab/'],
            ['key' => 'tiktok_text', 'value' => '@warga5758'],
            ['key' => 'tiktok_link', 'value' => 'https://www.tiktok.com/@warga5758'],
            ['key' => 'linkedin_text', 'value' => '5758 Creative Lab'],
            ['key' => 'linkedin_link', 'value' => 'https://www.linkedin.com/company/5758-creative-lab/'],
            ['key' => 'twitter_text', 'value' => '@5758creativelab'],
            ['key' => 'twitter_link', 'value' => 'https://x.com/5758creativelab'],
            ['key' => 'facebook_text', 'value' => '5758 Creative Lab'],
            ['key' => 'facebook_link', 'value' => 'https://www.facebook.com/5758creativelab'],
            ['key' => 'whatsapp_text', 'value' => '+62878-8080-8980'],
            ['key' => 'whatsapp_link', 'value' => 'https://tr.ee/WALetsDiscuss5758'],
            ['key' => 'email_text', 'value' => 'hello@5758creativelab.com'],
            ['key' => 'email_link', 'value' => 'mailto:hello@5758creativelab.com'],

            // LLM.txt Content
            ['key' => 'llm_txt', 'value' => "# 5758 Creative Lab\n\n## About Us\n5758 Creative Lab is a digital creative agency specializing in integrated marketing solutions.\n\n## Services\n- Digital Marketing Strategy\n- Creative Content Production\n- Performance Marketing\n- SEO/SEM\n- E-Commerce Solutions\n\n## Contact\nEmail: hello@5758creativelab.com\nPhone: +62878-8080-8980\nAddress: 18 Parc Place SCBD, Jakarta 12190"],

            // Robots.txt Content
            ['key' => 'robots_txt', 'value' => "User-agent: *\nAllow: /\n\n# Disallow admin and private areas\nDisallow: /admin/\nDisallow: /backoffice/\nDisallow: /login\nDisallow: /register\nDisallow: /password/\nDisallow: /api/\n\n# Allow important assets\nAllow: /assets/\nAllow: /css/\nAllow: /js/\nAllow: /images/\nAllow: /favicon.ico\nAllow: /logo.svg\nAllow: /apple-touch-icon.png\n\n# Crawl delay\nCrawl-delay: 1\n\n# Sitemap location\nSitemap: " . url('/sitemap.xml')],
        ];

        Setting::insert($settings);
    }
}
