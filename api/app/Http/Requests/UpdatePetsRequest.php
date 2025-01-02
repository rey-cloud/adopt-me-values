<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePetsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Update this if you have authorization logic
    }

    public function rules(): array
    {
        return [
            'pet_name' => 'sometimes|string|max:255',
            'pet_image' => 'sometimes|string|max:255',
        ];
    }
}
