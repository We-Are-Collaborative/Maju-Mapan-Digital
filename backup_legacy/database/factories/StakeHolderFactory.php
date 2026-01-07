<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StakeHolder>
 */
class StakeHolderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'position' => fake()->jobTitle(),
            'excerpt' => fake()->sentence(20),
            'content' => fake()->paragraphs(3, true),
            'email' => fake()->safeEmail(),
            'linkedin_url' => 'https://linkedin.com/in/' . fake()->userName(),
            'linkedin_text' => 'Connect on LinkedIn',
        ];
    }
}
