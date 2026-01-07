<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\ClientContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\ClientRequest;
use App\Utils\WebResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;

class ClientController extends Controller
{
    protected ClientContract $service;

    public function __construct(ClientContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/client/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['name'],
            sorts: ['name', 'created_at'],
            relation: [],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/client/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id, relation: ['showcases']);
        return Inertia::render('master/client/form', [
            'client' => $data,
        ]);
    }

    public function store(ClientRequest $request)
    {
        $payload = $request->validated();
        unset($payload['logo']);
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.client.index');
    }

    public function update($id, ClientRequest $request)
    {
        $payload = $request->validated();
        unset($payload['logo']);
        $result = $this->service->update(
            [
                ["id", "=", $id]
            ],
            $payload
        );
        return WebResponse::response($result, 'master.client.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.client.index');
    }
}
