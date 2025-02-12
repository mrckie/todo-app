<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::post('/task', [TaskController::class, 'store']);
Route::get('/', [TaskController::class, 'index']);
Route::put('/task/{task}', [TaskController::class, 'update']);
Route::put('/task/{task}/completion-status', [TaskController::class, 'completionStatus']);
Route::delete('/task/{task}', [TaskController::class, 'destroy']);
