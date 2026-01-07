<?php

namespace App\Http\Controllers\Setting;

use App\Contract\Setting\SettingContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\SettingRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class SettingController extends Controller
{

    protected SettingContract $service;

    public function __construct(SettingContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('setting/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['key'],
            sorts: ['key'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function create()
    {
        return Inertia::render('setting/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('setting/form', [
            'setting' => $data,
        ]);
    }

    public function store(SettingRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'setting.index');
    }

    public function update($id, SettingRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->update(
            [
                ["id", "=", $id]
            ],
            $payload
        );
        return WebResponse::response($result, 'setting.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'setting.index');
    }
}
