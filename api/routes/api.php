<?php

use App\Http\Controllers\PetsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/pets', [PetsController::class, 'index']);
Route::post('/pets', [PetsController::class, 'store']);
Route::get('/pets/{id}', [PetsController::class, 'show']);
Route::get('/pets/search/{pet_name}', [PetsController::class, 'search']);