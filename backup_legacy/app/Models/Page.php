<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    /** @use HasFactory<\Database\Factories\PageFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'content',
        'seo_config',
        'is_active',
    ];

    protected $casts = [
        'content' => 'array',
        'seo_config' => 'array',
        'is_active' => 'boolean',
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($page) {
            if (empty($page->slug)) {
                $page->slug = \Illuminate\Support\Str::slug($page->name);
            }
        });
    }
}
