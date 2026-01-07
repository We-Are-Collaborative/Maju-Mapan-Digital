<?php

namespace App\Http\Controllers;

use App\Contract\Master\ArticleContract;
use App\Contract\Master\CategoryContract;
use App\Contract\Master\ClientContract;
use App\Contract\Master\PageContract;
use App\Contract\Master\ShowcaseContract;
use App\Contract\Master\SpecialityContract;
use App\Contract\Master\StakeHolderContract;
use App\Contract\Master\ValueContract;
use App\Contract\Operational\CareerContract;
use App\Contract\Operational\InquiryContract;
use App\Contract\Setting\SettingContract;
use App\Http\Requests\InquiryRequest;
use App\Models\Article;
use App\Utils\WebResponse;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;

class HomeController extends Controller
{
    protected ArticleContract $article;
    protected CategoryContract $category;
    protected ClientContract $client;
    protected PageContract $page;
    protected ShowcaseContract $showcase;
    protected ValueContract $value;
    protected SpecialityContract $speciality;
    protected CareerContract $career;
    protected InquiryContract $inquiry;
    protected StakeHolderContract $stakeHolder;
    protected SettingContract $setting;

    public function __construct(
        ArticleContract $article,
        CategoryContract $category,
        ClientContract $client,
        PageContract $page,
        ShowcaseContract $showcase,
        ValueContract $value,
        SpecialityContract $speciality,
        CareerContract $career,
        InquiryContract $inquiry,
        StakeHolderContract $stakeHolder,
        SettingContract $setting
    ) {
        $this->article = $article;
        $this->category = $category;
        $this->client = $client;
        $this->page = $page;
        $this->showcase = $showcase;
        $this->value = $value;
        $this->speciality = $speciality;
        $this->career = $career;
        $this->inquiry = $inquiry;
        $this->stakeHolder = $stakeHolder;
        $this->setting = $setting;
    }

    public function index()
    {
        $values = $this->value->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
        );

        $specialities = $this->speciality->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
        );

        $clients = $this->client->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
            orderPosition: 'desc'
        );

        $pageSeo = $this->page->findBySlug('home');

        return Inertia::render('home', [
            'values' => $values,
            'specialities' => $specialities,
            'clients' => $clients,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function about_us()
    {
        $values = $this->value->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
        );

        $team = $this->stakeHolder->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
        );

        $clients = $this->client->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
            orderPosition: 'desc'
        );

        $pageSeo = $this->page->findBySlug('about-us');

        return Inertia::render('about-us', [
            'values' => $values,
            'team' => $team,
            'clients' => $clients,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function value($slug)
    {
        $value = $this->value->findBySlug($slug);
        return Inertia::render('value', [
            'value' => $value,
        ]);
    }

    public function solution_list()
    {
        $specialities = $this->speciality->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: false,
        );

        $pageSeo = $this->page->findBySlug('solution-list');

        return Inertia::render('solution', [
            'specialities' => $specialities,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function speciality($slug)
    {
        $speciality = $this->speciality->findBySlug($slug);

        return Inertia::render('speciality', [
            'speciality' => $speciality,
        ]);
    }

    public function article_list()
    {
        $filters = ['title', AllowedFilter::exact('category_id')];
        $conditions = [['status', '=', 'published']];

        $articles = $this->article->all(
            filters: $filters,
            sorts: ['created_at'],
            relation: ['category', 'media'],
            paginate: true,
            perPage: request('perPage', 10),
            orderPosition: 'desc',
            conditions: $conditions
        );

        $categories = $this->category->build()->get();
        $pageSeo = $this->page->findBySlug('article-list');

        return Inertia::render('article/index', [
            'articles' => $articles,
            'categories' => $categories,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function article_single($slug)
    {
        $article = $this->article->findBySlug($slug);
        $recommendations = Article::query()->inRandomOrder()->limit(4)->get();

        return Inertia::render('article/detail', [
            'article' => $article,
            'recommendations' => $recommendations,
        ]);
    }

    public function career_list()
    {
        $careers = $this->career->all(
            filters: [],
            sorts: ['created_at'],
            relation: [],
            paginate: false,
            orderPosition: 'desc'
        );

        $categories = $this->category->build()->get();
        $pageSeo = $this->page->findBySlug('career-list');

        return Inertia::render('career/index', [
            'careers' => $careers,
            'categories' => $categories,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function career_single($slug)
    {
        $career = $this->career->findBySlug($slug);

        return Inertia::render('career/detail', [
            'career' => $career,
        ]);
    }

    public function client_list()
    {
        $clients = $this->client->all(
            filters: [],
            sorts: ['created_at'],
            relation: ['media'],
            paginate: true,
            perPage: request('perPage', 12),
            orderPosition: 'desc'
        );

        $pageSeo = $this->page->findBySlug('client-list');

        return Inertia::render('client', [
            'clients' => $clients,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function client_single($slug)
    {
        $client = $this->client->findBySlug($slug);

        $showcases = $this->showcase->all(
            filters: [],
            sorts: ['start_date'],
            relation: ['media'],
            paginate: false,
            orderPosition: 'desc',
            conditions: [['client_id', '=', $client->id], ['status', '=', 'published']]
        );

        $pageSeo = $this->page->findBySlug('client-detail');

        return Inertia::render('client/detail', [
            'client' => $client,
            'showcases' => $showcases,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function showcase_single($slug)
    {
        $showcase = $this->showcase->findBySlug($slug);

        $recommendations = $this->showcase->all(
            filters: [],
            sorts: ['start_date'],
            relation: ['client', 'media'],
            paginate: false,
            perPage: 4,
            orderPosition: 'desc',
            conditions: [['status', '=', 'published'], ['id', '!=', $showcase->id]]
        );

        $pageSeo = $this->page->findBySlug('showcase-detail');

        return Inertia::render('client/showcase', [
            'showcase' => $showcase,
            'recommendations' => $recommendations,
            'pageSeo' => $pageSeo,
        ]);
    }

    public function contact()
    {
        $pageSeo = $this->page->findBySlug('contact');

        return Inertia::render('contact', [
            'pageSeo' => $pageSeo,
        ]);
    }

    public function thank_you()
    {
        $pageSeo = $this->page->findBySlug('thank-you');
        $leadName = session('lead_name', null);

        return Inertia::render('thank-you', [
            'pageSeo' => $pageSeo,
            'leadName' => $leadName,
        ]);
    }

    public function inquiry(InquiryRequest $request)
    {
        $payload = $request->validated();
        $result = $this->inquiry->create($payload);

        // Store the lead's name in session for the thank you page
        session(['lead_name' => $payload['name']]);

        return WebResponse::response($result, 'thank-you');
    }

    public function privacy_policy()
    {
        $pageSeo = $this->page->findBySlug('privacy-policy');

        return Inertia::render('privacy-policy', [
            'pageSeo' => $pageSeo,
        ]);
    }

    public function faq()
    {
        $pageSeo = $this->page->findBySlug('faq');

        return Inertia::render('faq', [
            'pageSeo' => $pageSeo,
        ]);
    }

    public function error404()
    {
        $pageSeo = $this->page->findBySlug('404');

        return Inertia::render('error-404', [
            'pageSeo' => $pageSeo,
        ]);
    }

    public function llm_txt()
    {
        $content = $this->setting->findByKey('llm_txt');

        return response($content, 200)
            ->header('Content-Type', 'text/plain');
    }

    public function robots_txt()
    {
        $content = $this->setting->findByKey('robots_txt');

        return response($content, 200)
            ->header('Content-Type', 'text/plain');
    }
}
