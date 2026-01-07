<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\CategoryContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class CategoryController extends Controller
{

    protected CategoryContract $service;

    public function __construct(CategoryContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/category/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['name'],
            sorts: ['name'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function create()
    {
        return Inertia::render('master/category/form');
    }

    public function store(CategoryRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.category.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/category/form', [
            'category' => $data,
        ]);
    }

    public function update($id, CategoryRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->update(
            [
                ["id", "=", $id]
            ],
            $payload
        );
        return WebResponse::response($result, 'master.category.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.category.index');
    }
}
