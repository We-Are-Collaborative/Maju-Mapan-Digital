<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\SpecialityContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\SpecialityRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class SpecialityController extends Controller
{
    protected SpecialityContract $service;

    public function __construct(SpecialityContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/speciality/index');
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
        return Inertia::render('master/speciality/form');
    }

    public function store(SpecialityRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.speciality.index');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/speciality/form', [
            'speciality' => $data,
        ]);
    }

    public function update($id, SpecialityRequest $request)
    {
        $payload = $request->validated();
        $speciality = $this->service->updateById($id, $payload);
        return WebResponse::response($speciality, 'master.speciality.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.speciality.index');
    }
}
