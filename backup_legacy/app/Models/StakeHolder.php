<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class StakeHolder extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\StakeHolderFactory> */
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = ['thumbnail'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('thumbnail')
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/gif', 'image/webp'])
            ->singleFile();
    }

    public function getThumbnailAttribute()
    {
        return $this->getMedia('thumbnail')->first();
    }
}
