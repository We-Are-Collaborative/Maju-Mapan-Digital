<?php

namespace App\Http\Controllers\Master;

use App\Contract\Master\LibraryContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\LibraryRequest;
use App\Utils\WebResponse;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class LibraryController extends Controller
{
    protected LibraryContract $service;

    public function __construct(LibraryContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('master/library/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['name', 'mime_type'],
            sorts: ['created_at', 'name'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return Response::json($data);
    }

    public function create()
    {
        return Inertia::render('master/library/form');
    }

    public function show($id)
    {
        $data = $this->service->find($id);
        return Inertia::render('master/library/form', [
            'library' => $data,
        ]);
    }

    public function store(LibraryRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->create($payload);
        return WebResponse::response($result, 'master.library.index');
    }

    public function update($id, LibraryRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->update(['id' => $id], $payload);
        return WebResponse::response($result, 'master.library.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'master.library.index');
    }

    public function download($id)
    {
        $library = $this->service->find($id);

        if ($library instanceof \Exception) {
            return response()->json(['error' => 'File not found'], 404);
        }

        $filePath = storage_path('app/public/' . $library->path);

        if (!file_exists($filePath)) {
            return response()->json(['error' => 'File not found on disk'], 404);
        }

        return response()->download($filePath, $library->original_name);
    }
}
