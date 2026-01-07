<?php

namespace Database\Factories;

use App\Models\Library;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Library>
 */
class LibraryFactory extends Factory
{
    protected $model = Library::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fileName = $this->faker->word() . '.pdf';
        $path = 'library/' . $fileName;

        return [
            'name' => $this->faker->words(3, true),
            'original_name' => $fileName,
            'path' => $path,
            'mime_type' => 'application/pdf',
            'size' => $this->faker->numberBetween(1000, 10000000), // 1KB to 10MB
            'public_url' => Storage::url($path),
            'description' => $this->faker->sentence(),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }

    /**
     * Create a library with an image file
     */
    public function image(): static
    {
        return $this->state(function (array $attributes) {
            $fileName = $this->faker->word() . '.jpg';
            $path = 'library/' . $fileName;

            return [
                'original_name' => $fileName,
                'path' => $path,
                'mime_type' => 'image/jpeg',
                'public_url' => Storage::url($path),
            ];
        });
    }

    /**
     * Create a library with a PDF file
     */
    public function pdf(): static
    {
        return $this->state(function (array $attributes) {
            $fileName = $this->faker->word() . '.pdf';
            $path = 'library/' . $fileName;

            return [
                'original_name' => $fileName,
                'path' => $path,
                'mime_type' => 'application/pdf',
                'public_url' => Storage::url($path),
            ];
        });
    }
}
