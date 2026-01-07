<?php 

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\BackofficeController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard', 'as' => 'dashboard.', 'middleware' => ['auth']], function () {
    Route::get('', [BackofficeController::class, 'index'])->name('index');
});
