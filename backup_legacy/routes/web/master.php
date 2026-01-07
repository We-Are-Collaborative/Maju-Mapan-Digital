<?php

use App\Http\Controllers\Master\ArticleController;
use App\Http\Controllers\Master\CategoryController;
use App\Http\Controllers\Master\ClientController;
use App\Http\Controllers\Master\LibraryController;
use App\Http\Controllers\Master\PageController;
use App\Http\Controllers\Master\ShowcaseController;
use App\Http\Controllers\Master\SpecialityController;
use App\Http\Controllers\Master\StakeholderController;
use App\Http\Controllers\Master\ValueController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard/master', 'as' => 'master.', 'middleware' => ['auth']], function () {

    Route::group(['prefix' => 'article', 'as' => 'article.'], function () {
        Route::get('', [ArticleController::class, 'index'])->name('index');
        Route::get('fetch', [ArticleController::class, 'fetch'])->name('fetch');
        Route::get('create', [ArticleController::class, 'create'])->name('create');
        Route::get('{id}', [ArticleController::class, 'show'])->name('show');
        Route::post('', [ArticleController::class, 'store'])->name('store');
        Route::put('{id}', [ArticleController::class, 'update'])->name('update');
        Route::delete('{id}', [ArticleController::class, 'destroy'])->name('destroy');
    });

    Route::group(['prefix' => 'speciality', 'as' => 'speciality.'], function () {
        Route::get('', [SpecialityController::class, 'index'])->name('index');
        Route::get('fetch', [SpecialityController::class, 'fetch'])->name('fetch');
        Route::get('create', [SpecialityController::class, 'create'])->name('create');
        Route::get('{id}', [SpecialityController::class, 'show'])->name('show');
        Route::post('', [SpecialityController::class, 'store'])->name('store');
        Route::put('{id}', [SpecialityController::class, 'update'])->name('update');
        Route::delete('{id}', [SpecialityController::class, 'destroy'])->name('destroy');
    });

    Route::group(['prefix' => 'value', 'as' => 'value.'], function () {
        Route::get('', [ValueController::class, 'index'])->name('index');
        Route::get('fetch', [ValueController::class, 'fetch'])->name('fetch');
        Route::get('create', [ValueController::class, 'create'])->name('create');
        Route::get('{id}', [ValueController::class, 'show'])->name('show');
        Route::post('', [ValueController::class, 'store'])->name('store');
        Route::put('{id}', [ValueController::class, 'update'])->name('update');
        Route::delete('{id}', [ValueController::class, 'destroy'])->name('destroy');
    });

    Route::group(['prefix' => 'category', 'as' => 'category.'], function () {
        Route::get('', [CategoryController::class, 'index'])->name('index');
        Route::get('fetch', [CategoryController::class, 'fetch'])->name('fetch');
        Route::get('create', [CategoryController::class, 'create'])->name('create');
        Route::get('{id}', [CategoryController::class, 'show'])->name('show');
        Route::post('', [CategoryController::class, 'store'])->name('store');
        Route::put('{id}', [CategoryController::class, 'update'])->name('update');
        Route::delete('{id}', [CategoryController::class, 'destroy'])->name('destroy');
    });

    Route::group(['prefix' => 'client', 'as' => 'client.'], function () {
        Route::get('', [ClientController::class, 'index'])->name('index');
        Route::get('fetch', [ClientController::class, 'fetch'])->name('fetch');
        Route::get('create', [ClientController::class, 'create'])->name('create');
        Route::get('{id}', [ClientController::class, 'show'])->name('show');
        Route::post('', [ClientController::class, 'store'])->name('store');
        Route::put('{id}', [ClientController::class, 'update'])->name('update');
        Route::delete('{id}', [ClientController::class, 'destroy'])->name('destroy');
    });

    Route::group(['prefix' => 'showcase', 'as' => 'showcase.'], function () {
        Route::get('', [ShowcaseController::class, 'index'])->name('index');
        Route::get('fetch', [ShowcaseController::class, 'fetch'])->name('fetch');
        Route::get('create', [ShowcaseController::class, 'create'])->name('create');
        Route::get('{id}', [ShowcaseController::class, 'show'])->name('show');
        Route::post('', [ShowcaseController::class, 'store'])->name('store');
        Route::put('{id}', [ShowcaseController::class, 'update'])->name('update');
        Route::delete('{id}', [ShowcaseController::class, 'destroy'])->name('destroy');
    });

    Route::group(['prefix' => 'library', 'as' => 'library.'], function () {
        Route::get('', [LibraryController::class, 'index'])->name('index');
        Route::get('fetch', [LibraryController::class, 'fetch'])->name('fetch');
        Route::get('create', [LibraryController::class, 'create'])->name('create');
        Route::get('{id}', [LibraryController::class, 'show'])->name('show');
        Route::post('', [LibraryController::class, 'store'])->name('store');
        Route::put('{id}', [LibraryController::class, 'update'])->name('update');
        Route::delete('{id}', [LibraryController::class, 'destroy'])->name('destroy');
        Route::get('{id}/download', [LibraryController::class, 'download'])->name('download');
    });

    Route::group(['prefix' => 'page', 'as' => 'page.'], function () {
        Route::get('', [PageController::class, 'index'])->name('index');
        Route::get('fetch', [PageController::class, 'fetch'])->name('fetch');
        Route::get('{id}', [PageController::class, 'show'])->name('show');
        Route::put('{id}', [PageController::class, 'update'])->name('update');
    });

    Route::group(['prefix' => 'stakeholder', 'as' => 'stakeholder.'], function () {
        Route::get('', [StakeholderController::class, 'index'])->name('index');
        Route::get('fetch', [StakeholderController::class, 'fetch'])->name('fetch');
        Route::get('create', [StakeholderController::class, 'create'])->name('create');
        Route::get('{id}', [StakeholderController::class, 'show'])->name('show');
        Route::post('', [StakeholderController::class, 'store'])->name('store');
        Route::put('{id}', [StakeholderController::class, 'update'])->name('update');
        Route::delete('{id}', [StakeholderController::class, 'destroy'])->name('destroy');
    });
});
