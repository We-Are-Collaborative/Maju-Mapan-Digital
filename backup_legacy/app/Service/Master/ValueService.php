<?php

namespace App\Service\Master;

use App\Contract\Master\ValueContract;
use App\Models\Value;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class ValueService extends BaseService implements ValueContract
{
    protected Model $model;
    protected array $fileKeys = ['thumbnail', 'background'];

    public function __construct(Value $model)
    {
        $this->model = $model;
    }

    public function findBySlug(string $slug, array $relation = [])
    {
        return $this->model->where('slug', $slug)->with($relation)->firstOrFail();
    }
}
