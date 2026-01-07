<?php

namespace App\Service\Operational;

use App\Contract\Operational\CareerContract;
use App\Models\Career;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class CareerService extends BaseService implements CareerContract
{
    protected Model $model;

    public function __construct(Career $model)
    {
        $this->model = $model;
    }

    public function findBySlug(string $slug, array $relation = [])
    {
        return $this->model->where('slug', $slug)->with($relation)->first();
    }
}
