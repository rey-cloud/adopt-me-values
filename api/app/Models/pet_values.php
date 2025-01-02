<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pet_values extends Model
{
    use HasFactory;

    protected $fillable = [
        'pet_id',
        'normal_no_potion',
        'normal_fly',
        'normal_ride',
        'normal_fly_ride',
        'neon_no_potion',
        'neon_fly',
        'neon_ride',
        'neon_fly_ride',
        'mega_no_potion',
        'mega_fly',
        'mega_ride',
        'mega_fly_ride',
    ];

    // Relationship: A value belongs to one pet
    public function pet()
    {
        return $this->belongsTo(Pets::class, 'pet_id');
    }
}
