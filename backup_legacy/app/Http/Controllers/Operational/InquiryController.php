<?php

namespace App\Http\Controllers\Operational;

use App\Http\Controllers\Controller;
use App\Contract\Operational\InquiryContract;
use App\Http\Requests\InquiryRequest;
use Inertia\Inertia;
use App\Utils\WebResponse;

class InquiryController extends Controller
{
    protected InquiryContract $service;

    public function __construct(InquiryContract $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('operational/inquiry/index');
    }

    public function fetch()
    {
        $data = $this->service->all(
            filters: ['key'],
            sorts: ['key'],
            paginate: true,
            perPage: request()->get('perPage') ?? 10,
        );

        return response()->json($data);
    }

    public function update($id, InquiryRequest $request)
    {
        $payload = $request->validated();
        $result = $this->service->update($id, $payload);
        return WebResponse::response($result, 'operational.inquiry.index');
    }

    public function destroy($id)
    {
        $result = $this->service->destroy($id);
        return WebResponse::response($result, 'operational.inquiry.index');
    }
}
