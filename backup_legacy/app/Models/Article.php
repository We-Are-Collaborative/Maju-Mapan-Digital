<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Article extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $attributes = [
        'status' => 'published',
    ];

    protected $casts = [
        'status' => 'string',
        'seo_config' => 'array',
    ];

    protected $appends = ['thumbnail'];

    public const STATUS_PUBLISHED = 'published';
    public const STATUS_DRAFT = 'draft';

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('thumbnail')->singleFile();
    }

    public function getThumbnailAttribute()
    {
        return $this->getMedia('thumbnail')->first();
    }
}
