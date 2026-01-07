<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        User::factory()->create([
            'name' => 'penulis',
            'email' => 'penulis@5758creativelab.com',
            'password' => Hash::make('password'),
        ]);

        $this->call([
            // CategorySeeder::class,
            // ArticleSeeder::class,
            // InquirySeeder::class,
            SettingSeeder::class,
            SpecialitySeeder::class,
            ValueSeeder::class,
            // LibrarySeeder::class,
            PageSeeder::class,
        ]);
    }
}
