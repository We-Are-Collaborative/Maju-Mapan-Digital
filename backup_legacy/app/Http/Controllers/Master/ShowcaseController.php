<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\ShowcaseContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\ShowcaseRequest;
use App\Utils\WebResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;

class ShowcaseController extends Controller
{

    protected ShowcaseContract $service;

    public function __construct(ShowcaseContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/showcase/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['name'],
            sorts: ['name', 'created_at'],
            relation: ['client'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/showcase/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id, relation: ['category']);
        return Inertia::render('master/showcase/form', [
            'client' => $data,
        ]);
    }

    public function store(ShowcaseRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.showcase.index');
    }

    public function update($id, ShowcaseRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->update(
            [
                ["id", "=", $id]
            ],
            $payload
        );
        return WebResponse::response($result, 'master.showcase.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.showcase.index');
    }
}
