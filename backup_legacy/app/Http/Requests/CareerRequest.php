<?php

namespace App\Http\Requests;

use App\Utils\SeoValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class CareerRequest extends FormRequest
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
        return array_merge([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'type' => 'required|string|in:full-time,part-time,internship,freelance,contract',
            'location' => 'required|string|in:on-site,remote,hybrid',
            'content' => 'required|string',
            'apply_url' => 'required|string|max:255',
            'max_salary' => 'required|numeric',
            'min_salary' => 'required|numeric',
            'thumbnail' => 'required|file|mimes:png,jpg,jpeg,gif',
        ], SeoValidationRules::getSeoRules());
    }
}
