<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StakeHolderRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'nullable|string',
            'email' => 'nullable|email|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'linkedin_text' => 'nullable|string|max:255',
        ];

        if ($this->isMethod('POST')) {
            $rules['thumbnail'] = 'required|image|mimes:jpeg,png,gif,webp|max:2048';
        } else {
            $rules['thumbnail'] = 'nullable|image|mimes:jpeg,png,gif,webp|max:2048';
        }

        return $rules;
    }
}
