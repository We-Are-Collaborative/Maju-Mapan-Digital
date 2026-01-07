<?php

namespace App\Http\Controllers;

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Article;
use App\Models\Career;
use App\Models\Category;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = Sitemap::create();

        $sitemap->add(Url::create('/')->setPriority(1.0)->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY));
        $sitemap->add(Url::create('/about')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY));
        $sitemap->add(Url::create('/contact')->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY));

        return $sitemap;
    }

    public function articles()
    {
        $sitemap = Sitemap::create();

        Article::all()->each(fn (Article $article) => $sitemap->add(
            Url::create("/articles/{$article->slug}")
                ->setLastModificationDate($article->updated_at)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.9)
        ));

        return $sitemap;
    }

    public function careers()
    {
        $sitemap = Sitemap::create();

        Career::all()->each(fn (Career $career) => $sitemap->add(
            Url::create("/careers/{$career->slug}")
                ->setLastModificationDate($career->updated_at)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.9)
        ));

        return $sitemap;
    }

    public function categories()
    {
        $sitemap = Sitemap::create();

        Category::all()->each(fn (Category $category) => $sitemap->add(
            Url::create("/categories/{$category->slug}")
                ->setLastModificationDate($category->updated_at)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.8)
        ));

        return $sitemap;
    }
}
