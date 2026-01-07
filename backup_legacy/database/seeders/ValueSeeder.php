<?php

namespace Database\Seeders;

use App\Models\Value;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ValueSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title' => 'Impact over Vanity',
                'subtitle' => 'Hasil yang terasa, bukan sekadar angka cantik',
                'body_title' => 'Mengutamakan Dampak Bisnis yang Nyata',
                'body_subtitle' => 'Setiap strategi dirancang untuk memberikan hasil yang dapat diukur dan berkelanjutan',
                'icon_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center',
                'description' => "Kami mengutamakan dampak bisnis nyata—lebih dari sekadar impressions atau likes. Setiap campaign dirancang agar berkontribusi pada objektif yang jelas: awareness yang berkualitas, leads yang valid, hingga penjualan yang terukur.",
                'why_choose' => [
                    ['title' => 'Aligned to KPI', 'description' => 'Semua inisiatif nyambung ke tujuan bisnis.'],
                    ['title' => 'Focused Testing', 'description' => 'Eksperimen terarah, bukan coba-coba.'],
                    ['title' => 'Honest Reporting', 'description' => 'Laporan jujur & actionable.'],
                ],
                'process' => [
                    ['title' => 'Align', 'description' => 'Definisikan KPI & prioritas.'],
                    ['title' => 'Design', 'description' => 'Rancang funnel & hipotesis.'],
                    ['title' => 'Execute', 'description' => 'Aktifkan channel & creative relevan.'],
                    ['title' => 'Learn', 'description' => 'Ukur uplift & scale pemenang.'],
                ],
            ],
            [
                'title' => 'Data-informed Creativity',
                'subtitle' => 'Kreatif yang dipandu data, bukan dibatasi',
                'body_title' => 'Menggabungkan Kreativitas dengan Wawasan Data',
                'body_subtitle' => 'Setiap ide kreatif didukung oleh riset mendalam dan eksperimen yang terstruktur',
                'icon_url' => 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center',
                'description' => "Ide kuat harus bertemu insight yang tajam. Kami menggabungkan riset audiens, social listening, dan eksperimen A/B untuk mengarahkan kreativitas sehingga tepat sasaran dan meminimalkan bias.",
                'why_choose' => [
                    ['title' => 'Audience Insight', 'description' => 'Keputusan berbasis data, bukan asumsi.'],
                    ['title' => 'Creative Testing', 'description' => 'A/B test sistematis di konsep & audiens.'],
                    ['title' => 'Feedback Loop', 'description' => 'Iterasi berkelanjutan dari hasil.'],
                ],
                'process' => [
                    ['title' => 'Discover', 'description' => 'Persona, pain-points, triggers.'],
                    ['title' => 'Hypothesize', 'description' => 'Rumusan ide & angle.'],
                    ['title' => 'Test', 'description' => 'Eksperimen terstruktur.'],
                    ['title' => 'Double Down', 'description' => 'Scale yang berhasil.'],
                ],
            ],
            [
                'title' => 'Clarity & Speed',
                'subtitle' => 'Gerak cepat, tetap jelas arahnya',
                'body_title' => 'Efisiensi Tanpa Mengorbankan Kualitas',
                'body_subtitle' => 'Komunikasi yang jelas memungkinkan eksekusi yang cepat dan tepat sasaran',
                'icon_url' => 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop&crop=center',
                'description' => "Kecepatan tanpa kejelasan adalah risiko. Kami menjaga komunikasi, brief, dan prioritas tetap jernih sehingga tim bisa bergerak cepat dengan kontrol kualitas yang konsisten.",
                'why_choose' => [
                    ['title' => 'Clear Brief', 'description' => 'Instruksi singkat, padat, jelas.'],
                    ['title' => 'Transparent SLA', 'description' => 'Ekspektasi respons & eskalasi jelas.'],
                    ['title' => 'Weekly Rhythm', 'description' => 'Ritme eksekusi yang stabil.'],
                ],
                'process' => [
                    ['title' => 'Plan', 'description' => 'Sprint plan & prioritas.'],
                    ['title' => 'Ship', 'description' => 'Eksekusi konten/ads.'],
                    ['title' => 'Review', 'description' => 'QA & peer feedback.'],
                    ['title' => 'Retro', 'description' => 'Perbaikan proses.'],
                ],
            ],
            [
                'title' => 'Partnership Mindset',
                'subtitle' => 'Bekerja bersama, bukan sekadar vendor',
                'body_title' => 'Kolaborasi yang Saling Menguntungkan',
                'body_subtitle' => 'Kami menjadi bagian dari tim Anda dengan transparansi dan komitmen bersama',
                'icon_url' => 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop&crop=center',
                'description' => "Kami jadi perpanjangan tim Anda: berbagi konteks, menyamakan tujuan, dan memberi masukan strategis. Sukses Anda adalah sukses kami.",
                'why_choose' => [
                    ['title' => 'Transparency', 'description' => 'Anggaran & prioritas terbuka.'],
                    ['title' => 'Co-creation', 'description' => 'Strategi & creative bareng.'],
                    ['title' => 'Enablement', 'description' => 'Transfer knowledge ke tim.'],
                ],
                'process' => [
                    ['title' => 'Kickoff', 'description' => 'Align ekspektasi & KPI.'],
                    ['title' => 'Co-create', 'description' => 'Workshop & sprint bersama.'],
                    ['title' => 'Operate', 'description' => 'Eksekusi & sync rutin.'],
                    ['title' => 'Enable', 'description' => 'Dokumentasi & pelatihan.'],
                ],
            ],
            [
                'title' => 'Ethics & Brand Safety',
                'subtitle' => 'Tumbuh berkelanjutan, aman untuk brand',
                'body_title' => 'Integritas dalam Setiap Langkah',
                'body_subtitle' => 'Membangun pertumbuhan yang berkelanjutan dengan menjaga reputasi dan kepercayaan brand',
                'icon_url' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=100&h=100&fit=crop&crop=center',
                'description' => "Kami menjaga integritas: no black-hat, no clickbait murahan, dan brand safety sebagai standar. Pertumbuhan yang kita bangun harus tahan lama dan dapat dipercaya.",
                'why_choose' => [
                    ['title' => 'Compliance', 'description' => 'Patuh platform & regulasi.'],
                    ['title' => 'Brand Safety', 'description' => 'Konten aman & sesuai nilai.'],
                    ['title' => 'Privacy & Data', 'description' => 'Transparansi atribusi & data.'],
                ],
                'process' => [
                    ['title' => 'Assess', 'description' => 'Audit risiko & policy.'],
                    ['title' => 'Guard', 'description' => 'Moderasi & allow/deny list.'],
                    ['title' => 'Monitor', 'description' => 'Pantau mention & isu.'],
                    ['title' => 'Report', 'description' => 'Recap insiden & tindakan.'],
                ],
            ],
        ];

        $now = Carbon::now();
        $rows = [];

        foreach ($items as $idx => $item) {
            $excerpt = Str::limit(Str::of($item['description'])->squish(), 200);

            $payload = [
                'title' => $item['title'],
                'subtitle' => $item['subtitle'],
                'body_title' => $item['body_title'],
                'body_subtitle' => $item['body_subtitle'],
                'slug' => Str::slug($item['title']),
                'icon_url' => $item['icon_url'],
                'description' => $item['description'],
                'excerpt' => $excerpt,
                'why_choose' => $item['why_choose'] ?? [],
                'process' => $item['process'] ?? [],
                'created_at' => $now->copy()->subDays(count($items) - $idx),
                'updated_at' => $now->copy()->subDays(count($items) - $idx),
            ];

            $value = Value::query()->create($payload);
            $value->addMediaFromUrl('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center')->toMediaCollection('thumbnail');
            $value->addMediaFromUrl('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center')->toMediaCollection('background');
        }
    }
}
