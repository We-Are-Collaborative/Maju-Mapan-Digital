<?php

namespace App\Http\Requests;

use App\Utils\SeoValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class ValueRequest extends FormRequest
{
    /**.
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
            'slug' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'body_title' => 'required|string|max:255',
            'body_subtitle' => 'required|string|max:255',
            'icon_url' => 'required|string',
            'excerpt' => 'required|string',
            'description' => 'required|string',
            'why_choose' => 'required|array',
            'why_choose.*.title' => 'required|string|max:255',
            'why_choose.*.description' => 'required|string',
            'process' => 'required|array',
            'process.*.title' => 'required|string|max:255',
            'process.*.description' => 'required|string',
        ];

        $rules['thumbnail'] = 'nullable|file|mimes:png,jpg,jpeg,gif';
        $rules['background'] = 'nullable|file|mimes:png,jpg,jpeg,gif';

        return array_merge($rules, SeoValidationRules::getSeoRules());
    }
}
