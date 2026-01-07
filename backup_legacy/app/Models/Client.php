<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Client extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\ClientFactory> */
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = ['logo'];

    protected $casts = [
        'seo_config' => 'array',
    ];

    public function showcases()
    {
        return $this->hasMany(Showcase::class);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('logo')
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/gif', 'image/webp'])
            ->singleFile();
    }

    public function getLogoAttribute()
    {
        return $this->getMedia('logo')->first();
    }
}
