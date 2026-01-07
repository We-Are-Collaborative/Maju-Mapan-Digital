<?php

use App\Http\Controllers\Operational\CareerController;
use App\Http\Controllers\Operational\InquiryController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard/operational', 'as' => 'operational.', 'middleware' => ['auth']], function () {

    Route::group(['prefix' => 'inquiry', 'as' => 'inquiry.'], function () {
        Route::get('', [InquiryController::class, 'index'])->name('index');
        Route::get('fetch', [InquiryController::class, 'fetch'])->name('fetch');
        Route::get('{id}', [InquiryController::class, 'show'])->name('show');
    });

    Route::group(['prefix' => 'career', 'as' => 'career.'], function () {
        Route::get('', [CareerController::class, 'index'])->name('index');
        Route::get('fetch', [CareerController::class, 'fetch'])->name('fetch');
        Route::get('create', [CareerController::class, 'create'])->name('create');
        Route::get('{id}', [CareerController::class, 'show'])->name('show');
        Route::post('', [CareerController::class, 'store'])->name('store');
        Route::put('{id}', [CareerController::class, 'update'])->name('update');
        Route::delete('{id}', [CareerController::class, 'destroy'])->name('destroy');
    });
});
