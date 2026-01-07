<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Speciality>
 */
class SpecialityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->sentence();
        $keyComponent = collect(range(1, 3))->map(function () {
            return [
                'icon_url' => 'ArrowUp',
                'title' => $this->faker->sentence(),
                'description' => $this->faker->paragraph(),
            ];
        })->toArray();
        $strategyWork = collect(range(1, 3))->map(function () {
            return [
                'title' => $this->faker->sentence(),
                'description' => $this->faker->paragraph(),
            ];
        })->toArray();

        return [
            'title' => $title,
            'subtitle' => $this->faker->sentence(),
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraphs(3, true),
            'key_component' => $keyComponent,
            'strategy_work' => $strategyWork,
        ];
    }
}
