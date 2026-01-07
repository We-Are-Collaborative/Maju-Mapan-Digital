<?php

namespace App\Http\Requests;

use App\Utils\SeoValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class ShowcaseRequest extends FormRequest
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
            'client_id' => 'required|exists:clients,id',
            'name' => 'required|string',
            'slug' => 'required|string',
            'content' => 'required|string',
            'excerpt' => 'required|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'status' => 'required|string|in:published,draft',
        ], SeoValidationRules::getSeoRules());
    }
}
