<?php

namespace App\Http\Controllers\Master;

use Inertia\Inertia;
use App\Utils\WebResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\PageRequest;
use Spatie\QueryBuilder\AllowedFilter;
use App\Contract\Master\PageContract;
use Illuminate\Support\Facades\Response;

class PageController extends Controller
{
    protected PageContract $service;

    public function __construct(PageContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/page/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['name', AllowedFilter::exact('is_active')],
            sorts: ['name', 'created_at'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/page/form', [
            'page' => $data,
        ]);
    }

    public function update($id, PageRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->updateById($id, $payload);
        return WebResponse::response($result, 'master.page.index');
    }
}