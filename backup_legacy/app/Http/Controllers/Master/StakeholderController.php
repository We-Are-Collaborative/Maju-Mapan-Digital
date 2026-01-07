<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\StakeHolderContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\StakeHolderRequest;
use App\Utils\WebResponse;
use Inertia\Inertia;

class StakeholderController extends Controller
{
    protected StakeHolderContract $service;

    public function __construct(StakeHolderContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/stakeholder/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['name', 'position'],
            sorts: ['name', 'created_at'],
            relation: [],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return response()->json($data);
    }

    public function create()
    {
        return Inertia::render('master/stakeholder/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/stakeholder/form', [
            'stakeholder' => $data,
        ]);
    }

    public function store(StakeHolderRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.stakeholder.index');
    }

    public function update($id, StakeHolderRequest $request)
    {
        $payload = $request->validated();
        unset($payload['thumbnail']);
        $result = $this->service->update(
            [
                ["id", "=", $id]
            ],
            $payload
        );
        return WebResponse::response($result, 'master.stakeholder.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.stakeholder.index');
    }
}
