<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'slug' => 'required|string|max:255',
            'content' => 'required|string',
            'custom_css' => 'nullable|string',
            'excerpt' => 'nullable|string',
            'status' => 'nullable|in:published,draft',
            'seo_config' => 'nullable|array',
            'seo_config.title' => 'required|string',
            'seo_config.description' => 'required|string',
            'seo_config.keywords' => 'required|string',
            'seo_config.author' => 'required|string',
            'seo_config.canonical' => 'nullable|url',
            'seo_config.locale' => 'required|string',
            'seo_config.language' => 'required|string',
            'seo_config.type' => 'required|string|in:article,website,blog',
            'seo_config.url' => 'nullable|url',
            'seo_config.image' => 'nullable|string',
            'seo_config.image_width' => 'nullable|integer|min:1|max:4096',
            'seo_config.image_height' => 'nullable|integer|min:1|max:4096',
            'seo_config.image_alt' => 'nullable|string',
            'seo_config.site_name' => 'required|string',
            'seo_config.twitter_card' => 'required|string|in:summary,summary_large_image,app,player',
            'seo_config.twitter_image' => 'nullable|string',
            'seo_config.twitter_site' => 'nullable|string',
            'seo_config.twitter_creator' => 'nullable|string',
            'seo_config.structured_data' => 'nullable|array',
            'seo_config.breadcrumbs' => 'nullable|array',
        ];

        $rules['thumbnail'] = 'nullable|file|mimes:png,jpg,jpeg,gif';

        return $rules;
    }
}
