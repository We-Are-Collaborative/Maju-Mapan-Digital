<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articlesByCategory = [
            'technology' => [
                'Laravel 11: What’s New and Why It Matters',
                'Mastering Eloquent: Tips for Complex Queries',
                'API Versioning Strategy for Production',
            ],
            'business' => [
                'Choosing the Right Pricing Model for SaaS',
                'How to Measure Product-Market Fit',
                'Unit Economics: CAC, LTV, dan Payback Period',
            ],
            'health' => [
                'Sleep Hygiene for Busy Developers',
                'Ergonomics 101: Duduk yang Benar di Depan Laptop',
            ],
            'sports' => [
                'Base Training vs Interval: Kapan Dipakai',
                'Cycling Nutrition: Carbs, Electrolytes, Hydration',
            ],
            'education' => [
                'Spaced Repetition untuk Belajar Cepat',
                'Catatan Efektif: Cornell vs Zettelkasten',
            ],
            'travel' => [
                'Remote Work: Checklist Sebelum Workation',
            ],
            'food' => [
                'Meal Prep Hemat untuk Anak Kos',
            ],
            'lifestyle' => [
                'Digital Minimalism untuk Developer',
            ],
            'finance' => [
                'Emergency Fund: Berapa dan Di Mana Menyimpannya',
            ],
            'entertainment' => [
                'Why Long-form Content is Back',
            ],
        ];

        $categoryLookup = Category::query()
            ->get()
            ->mapWithKeys(fn($c) => [Str::slug($c->name) => ['id' => $c->id, 'name' => $c->name]])
            ->all();

        if (empty($categoryLookup)) {
            $this->command?->warn('No categories found. Seed categories first.');
            return;
        }

        $now = Carbon::now();
        $rows = [];

        foreach ($articlesByCategory as $catSlug => $titles) {
            if (!isset($categoryLookup[$catSlug])) {
                $this->command?->warn("Category with slug '{$catSlug}' not found. Skipped its articles.");
                continue;
            }

            $catId = $categoryLookup[$catSlug]['id'];
            $catName = $categoryLookup[$catSlug]['name'];

            foreach ($titles as $title) {
                $created = $now->copy()->subDays(count($rows) + 1);

                // HTML content (tetap HTML)
                $content = '<h2>' . e($title) . "</h2>\n"
                    . '<p>Category: <strong>' . e($catName) . "</strong>.</p>\n"
                    . "<p>Deterministic seeded article. Safe to re-run across environments.</p>";

                // Excerpt (teks polos)
                $excerpt = Str::limit(
                    Str::of(html_entity_decode(strip_tags($content)))->squish(),
                    150
                );

                $rows[] = [
                    'category_id' => $catId,
                    'title' => $title,
                    'slug' => Str::slug($title),
                    'excerpt' => $excerpt,       // <-- plain text
                    'content' => $content,       // <-- HTML
                    'status' => 'published',
                    'created_at' => $created,
                    'updated_at' => $created,
                ];
            }
        }

        if (empty($rows)) {
            $this->command?->warn('No articles to insert (no matching categories).');
            return;
        }

        DB::table('articles')->insert($rows);
        $this->command?->info('Article seeding completed: ' . count($rows) . ' rows.');
    }
}
