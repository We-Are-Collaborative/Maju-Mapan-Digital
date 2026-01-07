<?php

namespace App\Utils;

class SeoValidationRules
{
    /**
     * Get standard SEO configuration validation rules
     *
     * @return array
     */
    public static function getSeoRules(): array
    {
        return [
            'seo_config' => 'nullable|array',
            'seo_config.title' => 'nullable|string',
            'seo_config.description' => 'nullable|string',
            'seo_config.keywords' => 'nullable|string',
            'seo_config.author' => 'nullable|string',
            'seo_config.canonical' => 'nullable|url',
            'seo_config.locale' => 'nullable|string',
            'seo_config.language' => 'nullable|string',
            'seo_config.type' => 'nullable|string',
            'seo_config.url' => 'nullable|url',
            'seo_config.image' => 'nullable|string',
            'seo_config.image_width' => 'nullable|integer|min:1|max:4096',
            'seo_config.image_height' => 'nullable|integer|min:1|max:4096',
            'seo_config.image_alt' => 'nullable|string',
            'seo_config.site_name' => 'nullable|string',
            'seo_config.twitter_card' => 'nullable|string',
            'seo_config.twitter_image' => 'nullable|string',
            'seo_config.twitter_site' => 'nullable|string',
            'seo_config.twitter_creator' => 'nullable|string',
            'seo_config.robots' => 'nullable|string',
            'seo_config.structured_data' => 'nullable|array',
            'seo_config.breadcrumbs' => 'nullable|array',
        ];
    }
}
