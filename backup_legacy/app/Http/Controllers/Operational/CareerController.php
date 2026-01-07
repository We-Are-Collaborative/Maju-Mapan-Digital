<?php

namespace App\Http\Controllers\Operational;

use App\Contract\Operational\CareerContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\CareerRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class CareerController extends Controller
{

    protected CareerContract $service;

    public function __construct(CareerContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('operational/career/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['title'],
            sorts: ['created_at'],
            relation: ['category'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function create()
    {
        return Inertia::render('operational/career/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('operational/career/form', [
            'career' => $data,
        ]);
    }

    public function store(CareerRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'operational.career.index');
    }

    public function update($id, CareerRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->update($id, $payload);
        return WebResponse::response($result, 'operational.career.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'operational.career.index');
    }
}
