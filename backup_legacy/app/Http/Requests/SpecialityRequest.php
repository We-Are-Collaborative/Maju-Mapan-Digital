<?php

namespace App\Http\Requests;

use App\Utils\SeoValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class SpecialityRequest extends FormRequest
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
            'slug' => 'required|string|max:255',
            'subtitle' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'description' => 'required|string',
            'icon_url' => 'required|string',
            'key_component' => 'required|array',
            'strategy_work' => 'required|array',
            'key_component.*.title' => 'required|string|max:255',
            'key_component.*.description' => 'required|string',
            'key_component.*.icon_url' => 'required|string',
            'strategy_work.*.title' => 'required|string|max:255',
            'strategy_work.*.description' => 'required|string',
        ];

        $rules['thumbnail'] = 'nullable|file|mimes:png,jpg,jpeg,gif';
        

        return array_merge($rules, SeoValidationRules::getSeoRules());
    }
}
