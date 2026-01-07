<?php

use App\Models\Category;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->enum('type', ['full-time', 'part-time', 'internship', 'freelance', 'contract']);
            $table->enum('location', ['on-site', 'remote', 'hybrid']);
            $table->text('content');
            $table->text('apply_url');
            $table->integer('min_salary');
            $table->integer('max_salary');
            $table->json('seo_config')->nullable();
            $table->string('status')->default('published');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
