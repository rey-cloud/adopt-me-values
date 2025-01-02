<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePetsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Update this if you have authorization logic
    }

    public function rules(): array
    {
        return [
            'pet_name' => 'required|string|max:255',
            'pet_image' => 'required|string|max:255',
        ];
    }
}
