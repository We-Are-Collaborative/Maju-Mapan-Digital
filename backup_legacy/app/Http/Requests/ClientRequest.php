<?php

namespace App\Http\Requests;

use App\Utils\SeoValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
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
            'name' => 'required|string',
            'slug' => 'required|string',
            'excerpt' => 'required|string',
            'description' => 'required|string',
            'is_featured' => 'required|boolean',
            'status' => 'required|string|in:published,draft',
        ];

        // Logo validation - always optional, handled by frontend
        if ($this->isMethod('POST')) {
            $rules['logo'] = 'required|image|mimes:jpeg,png,gif,webp|max:2048';
        } else {
            $rules['logo'] = 'nullable|image|mimes:jpeg,png,gif,webp|max:2048';
        }

        return array_merge($rules, SeoValidationRules::getSeoRules());
    }
}
