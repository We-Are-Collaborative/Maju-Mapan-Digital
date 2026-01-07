<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names = [
            'Technology',
            'Business',
            'Health',
            'Sports',
            'Education',
            'Travel',
            'Food',
            'Lifestyle',
            'Finance',
            'Entertainment',
        ];

        $rows = collect($names)->map(fn($name) => [
            'name' => $name,
            'slug' => Str::slug($name),
            'created_at' => now(),
            'updated_at' => now(),
        ])->toArray();

        Category::query()->insert($rows);
    }
}
