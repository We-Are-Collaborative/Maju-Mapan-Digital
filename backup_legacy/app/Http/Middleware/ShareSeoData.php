<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Service\SeoService;

class ShareSeoData
{
    protected $seoService;

    public function __construct(SeoService $seoService)
    {
        $this->seoService = $seoService;
    }

    public function handle(Request $request, Closure $next)
    {
        Inertia::share('seo', $this->seoService->generate());

        return $next($request);
    }
}