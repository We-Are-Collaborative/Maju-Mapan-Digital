<?php

namespace Database\Seeders;

use App\Models\StakeHolder;
use Illuminate\Database\Seeder;

class StakeHolderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        StakeHolder::factory()->count(4)->create();
    }
}
