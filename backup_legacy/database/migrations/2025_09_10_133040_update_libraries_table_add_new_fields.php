<?php

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
        Schema::table('libraries', function (Blueprint $table) {
            // Rename existing column
            $table->renameColumn('file_name', 'original_name');

            // Add new columns
            $table->string('name')->after('id');
            $table->string('path')->after('original_name');
            $table->bigInteger('size')->after('mime_type');
            $table->string('public_url')->after('size');
            $table->text('description')->nullable()->after('public_url');
            $table->string('status')->default('active')->after('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('libraries', function (Blueprint $table) {
            // Remove added columns
            $table->dropColumn(['name', 'path', 'size', 'public_url', 'description', 'status']);

            // Rename back
            $table->renameColumn('original_name', 'file_name');
        });
    }
};
