<?php

namespace App\Http\Controllers\Master;

use Inertia\Inertia;
use App\Utils\WebResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use Spatie\QueryBuilder\AllowedFilter;
use App\Contract\Master\ArticleContract;
use Illuminate\Support\Facades\Response;

class ArticleController extends Controller
{
    protected ArticleContract $service;

    public function __construct(ArticleContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/article/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['title', AllowedFilter::exact('category_id'), AllowedFilter::exact('status')],
            sorts: ['title', 'created_at'],
            relation: ['category'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function create()
    {
        return Inertia::render('master/article/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id, relation: ['category']);
        return Inertia::render('master/article/form', [
            'article' => $data,
        ]);
    }

    public function store(ArticleRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.article.index');
    }

    public function update($id, ArticleRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $article = $this->service->updateById($id, $payload);

        if ($request->hasFile('thumbnail')) {
            $article->addMultipleMediaFromRequest(['thumbnail'])
                ->each->toMediaCollection('thumbnail');
        }
        return WebResponse::response($article, 'master.article.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.article.index');
    }
}
