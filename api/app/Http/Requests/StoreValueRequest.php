<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreValueRequest extends FormRequest
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
        return [
            'normal_no_potion' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'normal_fly' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'normal_ride' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'normal_fly_ride' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'neon_no_potion' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'neon_fly' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'neon_ride' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'neon_fly_ride' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'mega_no_potion' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'mega_fly' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'mega_ride' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'mega_fly_ride' => 'required|regex:/^\d+(\.\d{1,2})?$/',
        ];
    }
}
