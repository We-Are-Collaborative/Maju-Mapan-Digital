<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Value>
 */
class ValueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->sentence();
        $whyChoose = collect(range(1, 3))->map(function () {
            return [
                'title' => $this->faker->sentence(),
                'description' => $this->faker->sentence(),
            ];
        })->toArray();
        $process = collect(range(1, 3))->map(function () {
            return [
                'title' => $this->faker->sentence(),
                'description' => $this->faker->sentence(),
            ];
        })->toArray();

        return [
            'title' => $title,
            'subtitle' => $this->faker->sentence(),
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraphs(3, true),
            'why_choose' => $whyChoose,
            'process' => $process,
        ];
    }
}
