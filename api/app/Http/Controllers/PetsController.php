<?php

namespace App\Http\Controllers;

use App\Models\Pets;
use App\Http\Requests\StorePetsRequest;
use App\Http\Requests\StoreValueRequest;
use App\Http\Requests\UpdatePetsRequest;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class PetsController extends Controller
{
    public function index()
    {
        $pets = Pets::with('values')->get(); // Include associated values
        return response()->json($pets);
    }

    public function search($pet_name)
{
    // Search for pets based on partial match using 'like'
    $pets = Pets::with('values')
                ->where('pet_name', 'like', "%{$pet_name}%")
                ->get();

    // Check if any pet is found
    if ($pets->isEmpty()) {
        return response()->json(['message' => 'No pets found'], 404);
    }

    // Return the matched results
    return response()->json($pets);
}


    public function store(StorePetsRequest $petRequest, StoreValueRequest $valueRequest)
    {
        
        // Extract only the file name from the input (remove fakepath)
        $petImage = basename($petRequest->pet_image); // Gets "strawberry_bat_dragon.png"

        // Create the pet
        $pet = Pets::create([
            'pet_name' => $petRequest->pet_name,
            'pet_image' => $petImage, // Save only the filename
        ]);

        // Create the associated pet values and assign the pet_id
        $pet->values()->create([
            'pet_id' => $pet->id,
            'normal_no_potion' => $valueRequest->normal_no_potion,
            'normal_fly' => $valueRequest->normal_fly,
            'normal_ride' => $valueRequest->normal_ride,
            'normal_fly_ride' => $valueRequest->normal_fly_ride,
            'neon_no_potion' => $valueRequest->neon_no_potion,
            'neon_fly' => $valueRequest->neon_fly,
            'neon_ride' => $valueRequest->neon_ride,
            'neon_fly_ride' => $valueRequest->neon_fly_ride,
            'mega_no_potion' => $valueRequest->mega_no_potion,
            'mega_fly' => $valueRequest->mega_fly,
            'mega_ride' => $valueRequest->mega_ride,
            'mega_fly_ride' => $valueRequest->mega_fly_ride,
        ]);

        // Return a success response
        return response()->json(['message' => 'Pet and values stored successfully'], 201);
    }



    public function show($id)
    {
        $pet = Pets::with('values')->findOrFail($id); // Include associated values
        return response()->json($pet);
    }   

    public function update(UpdatePetsRequest $request, $id)
    {
        $pet = Pets::findOrFail($id);
        $pet->update($request->validated());
        return response()->json($pet);
    }

    public function destroy($id)
    {
        $pet = Pets::findOrFail($id);
        $pet->delete();
        return response()->json(['message' => 'Pet deleted successfully']);
    }
}
