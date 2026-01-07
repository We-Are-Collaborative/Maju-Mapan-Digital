<?php

namespace App\Service\Master;

use App\Contract\Master\PageContract;
use App\Models\Page;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class PageService extends BaseService implements PageContract
{
    protected Model $model;

    public function __construct(Page $model)
    {
        $this->model = $model;
    }

    public function findBySlug(string $slug, array $relation = [])
    {
        return $this->model
            ->where('slug', $slug)
            ->with($relation)
            ->firstOrFail();
    }

    public function updateById(int $id, array $payload): Page
    {
        $page = Page::findOrFail($id);
        $page->update($payload);
        return $page;
    }
}
