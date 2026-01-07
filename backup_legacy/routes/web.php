<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::get('', [HomeController::class, 'index'])->name('home');
Route::get('home', fn() => redirect()->route('home'))->name('home-page');
Route::get('about-us', [HomeController::class, 'about_us'])->name('about-us');
Route::get('privacy-policy', [HomeController::class, 'privacy_policy'])->name('privacy-policy');
Route::get('faq', [HomeController::class, 'faq'])->name('faq');
Route::get('thank-you', [HomeController::class, 'thank_you'])->name('thank-you');
Route::get('sitemap.xml', [SitemapController::class, 'index'])->name('sitemap.index');
Route::get('llm.txt', [HomeController::class, 'llm_txt'])->name('llm-txt');
Route::get('robots.txt', [HomeController::class, 'robots_txt'])->name('robots-txt');
Route::get('error-404', [HomeController::class, 'error404'])->name('error-404');

Route::group(['prefix' => 'about-us'], function () {
    Route::get('{slug}', [HomeController::class, 'value'])->name('value');
});

Route::group(['prefix' => 'solutions'], function () {
    Route::get('', [HomeController::class, 'solution_list'])->name('speciality');
    Route::get('{slug}', [HomeController::class, 'speciality'])->name('speciality-detail');
});

Route::group(['prefix' => 'contact-us'], function () {
    Route::get('', [HomeController::class, 'contact'])->name('contact');
    Route::post('', [HomeController::class, 'inquiry'])->name('inquiry');
});

Route::group(['prefix' => 'career'], function () {
    Route::get('', [HomeController::class, 'career_list'])->name('career');
    Route::get('{slug}', [HomeController::class, 'career_single'])->name('career-detail');
});

Route::group(['prefix' => 'client'], function () {
    Route::get('', [HomeController::class, 'client_list'])->name('client');
    Route::get('showcase/{slug}', [HomeController::class, 'showcase_single'])->name('showcase-detail');
    Route::get('{slug}', [HomeController::class, 'client_single'])->name('client-detail');
});

Route::group(['prefix' => 'insights'], function () {
    Route::get('', [HomeController::class, 'article_list'])->name('article');
    Route::get('{slug}', [HomeController::class, 'article_single'])->name('article-detail');
});
