<?php

namespace App\Service;

use App\Models\Article;
use App\Models\Career;
use App\Models\Category;
use App\Models\Speciality;
use App\Models\Value;
use Illuminate\Support\Facades\Cache;

class SeoService
{
    protected $defaults = [
        'title' => 'NexTeam - Professional Digital Solutions',
        'description' => 'Leading digital solutions provider specializing in web development, mobile apps, and digital transformation services.',
        'keywords' => 'digital solutions, web development, mobile apps, digital transformation, software development',
        'author' => 'NexTeam',
        'image' => 'logo.svg',
        'url' => null,
        'type' => 'website',
        'site_name' => 'NexTeam',
        'locale' => 'id_ID',
    ];

    public function generate(array $data = [])
    {
        $data = array_merge($this->defaults, $data);

        return [
            'title' => $this->formatTitle($data['title']),
            'description' => $this->formatDescription($data['description']),
            'keywords' => $data['keywords'],
            'author' => $data['author'],
            'image' => $this->getImageUrl($data['image']),
            'url' => $data['url'] ?? request()->url(),
            'type' => $data['type'],
            'site_name' => $data['site_name'],
            'locale' => $data['locale'],
            'canonical' => $data['url'] ?? request()->url(),
            'robots' => $data['robots'] ?? 'index, follow',
            'structured_data' => $this->generateStructuredData($data),
        ];
    }

    public function generateForArticle(Article $article)
    {
        $data = [
            'title' => $article->title,
            'description' => $article->excerpt ?? substr(strip_tags($article->content), 0, 160),
            'keywords' => $article->tags ?? '',
            'author' => $article->author ?? 'NexTeam',
            'image' => $article->featured_image ?? 'logo.svg',
            'url' => route('article-detail', $article->slug),
            'type' => 'article',
            'published_time' => $article->created_at->toISOString(),
            'modified_time' => $article->updated_at->toISOString(),
            'section' => $article->category?->name ?? 'Articles',
        ];

        return $this->generate($data);
    }

    public function generateForCareer(Career $career)
    {
        $data = [
            'title' => $career->title . ' - Career Opportunities at NexTeam',
            'description' => $career->excerpt ?? substr(strip_tags($career->description), 0, 160),
            'keywords' => $career->requirements ?? '',
            'author' => 'NexTeam',
            'image' => $career->featured_image ?? 'logo.svg',
            'url' => route('career-detail', $career->slug),
            'type' => 'job_posting',
            'employment_type' => $career->employment_type ?? 'FULL_TIME',
            'location' => $career->location ?? 'Remote',
        ];

        return $this->generate($data);
    }

    public function generateForCategory(Category $category)
    {
        $data = [
            'title' => $category->name . ' - Articles & Resources',
            'description' => $category->description ?? "Explore articles and resources in {$category->name}",
            'keywords' => $category->name . ', articles, resources, blog',
            'author' => 'NexTeam',
            'image' => 'logo.svg',
            'url' => route('category', $category->slug),
            'type' => 'collection',
        ];

        return $this->generate($data);
    }

    protected function formatTitle(string $title): string
    {
        $siteName = config('app.name', 'NexTeam');
        return $title === $siteName ? $title : "{$title} | {$siteName}";
    }

    protected function formatDescription(string $description): string
    {
        $description = strip_tags($description);
        return strlen($description) > 160 ? substr($description, 0, 157) . '...' : $description;
    }

    protected function getImageUrl(string $image): string
    {
        if (filter_var($image, FILTER_VALIDATE_URL)) {
            return $image;
        }
        return asset($image);
    }

    protected function generateStructuredData(array $data): array
    {
        $structuredData = [
            '@context' => 'https://schema.org',
            '@type' => $this->getSchemaType($data['type']),
            'name' => $data['title'],
            'description' => $data['description'],
            'url' => $data['url'],
            'image' => $data['image'],
        ];

        if ($data['type'] === 'article') {
            $structuredData['author'] = [
                '@type' => 'Person',
                'name' => $data['author'],
            ];
            $structuredData['publisher'] = [
                '@type' => 'Organization',
                'name' => $data['site_name'],
                'logo' => asset('logo.svg'),
            ];
            if (isset($data['published_time'])) {
                $structuredData['datePublished'] = $data['published_time'];
            }
            if (isset($data['modified_time'])) {
                $structuredData['dateModified'] = $data['modified_time'];
            }
        }

        if ($data['type'] === 'job_posting') {
            $structuredData['hiringOrganization'] = [
                '@type' => 'Organization',
                'name' => $data['site_name'],
            ];
            $structuredData['employmentType'] = $data['employment_type'] ?? 'FULL_TIME';
            $structuredData['jobLocation'] = [
                '@type' => 'Place',
                'address' => $data['location'] ?? 'Remote',
            ];
        }

        return $structuredData;
    }

    protected function getSchemaType(string $type): string
    {
        return match ($type) {
            'article' => 'Article',
            'job_posting' => 'JobPosting',
            'collection' => 'CollectionPage',
            default => 'WebPage',
        };
    }

    public function getBreadcrumbs(array $items): array
    {
        $breadcrumbs = [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => [],
        ];

        foreach ($items as $index => $item) {
            $breadcrumbs['itemListElement'][] = [
                '@type' => 'ListItem',
                'position' => $index + 1,
                'name' => $item['name'],
                'item' => $item['url'] ?? null,
            ];
        }

        return $breadcrumbs;
    }
}
