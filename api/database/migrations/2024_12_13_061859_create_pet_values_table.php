<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pet_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pet_id')->constrained('pets')->onDelete('cascade'); // Foreign key reference to pets table
            $table->decimal('normal_no_potion', 10, 2);
            $table->decimal('normal_fly', 10, 2);
            $table->decimal('normal_ride', 10, 2);
            $table->decimal('normal_fly_ride', 10, 2);
            $table->decimal('neon_no_potion', 10, 2);
            $table->decimal('neon_fly', 10, 2);
            $table->decimal('neon_ride', 10, 2);
            $table->decimal('neon_fly_ride', 10, 2);
            $table->decimal('mega_no_potion', 10, 2);
            $table->decimal('mega_fly', 10, 2);
            $table->decimal('mega_ride', 10, 2);
            $table->decimal('mega_fly_ride', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pet_values');
    }
};
