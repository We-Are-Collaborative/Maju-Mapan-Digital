<?php

namespace Database\Seeders;

use App\Models\Library;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LibrarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample library files
        Library::factory()->count(10)->create();

        // Create some image files
        Library::factory()->image()->count(5)->create();

        // Create some PDF files
        Library::factory()->pdf()->count(5)->create();
    }
}
