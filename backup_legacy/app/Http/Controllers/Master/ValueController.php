<?php

namespace App\Http\Controllers\Master;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Contract\Master\ValueContract;
use App\Http\Requests\ValueRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Response;

class ValueController extends Controller
{
    protected ValueContract $service;

    public function __construct(ValueContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/value/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['title'],
            sorts: ['created_at'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function create()
    {
        return Inertia::render('master/value/form');
    }

    public function store(ValueRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail'], $payload['background']);
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.value.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/value/form', [
            'value' => $data,
        ]);
    }

    public function update($id, ValueRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail'], $payload['background']);
        $value = $this->service->update(
            [
                ["id", "=", $id]
            ],
            $payload
        );
        return WebResponse::response($value, 'master.value.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.value.index');
    }
}
