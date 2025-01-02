<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pets extends Model
{
    use HasFactory;

    protected $fillable = [
        'pet_name',
        'pet_image',
    ];

    // Relationship: A pet has many values
    public function values()
    {
        return $this->hasMany(pet_values::class, 'pet_id');
    }
}
