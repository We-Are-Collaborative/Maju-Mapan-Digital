<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Career>
 */
class CareerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->jobTitle();

        return [
            'category_id' => Category::factory(),
            'title' => $title,
            'slug' => Str::slug($title),
            'type' => $this->faker->randomElement(['full-time', 'part-time', 'internship', 'freelance', 'contract']),
            'location' => $this->faker->randomElement(['on-site', 'remote', 'hybrid']),
            'content' => $this->faker->paragraphs(5, true),
            'apply_url' => $this->faker->url(),
            'min_salary' => $this->faker->numberBetween(3000, 5000),
            'max_salary' => $this->faker->numberBetween(5000, 10000),
        ];
    }
}
