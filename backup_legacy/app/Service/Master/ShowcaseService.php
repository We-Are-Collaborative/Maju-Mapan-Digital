<?php

namespace App\Service\Master;

use App\Contract\Master\ShowcaseContract;
use App\Models\Showcase;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class ShowcaseService extends BaseService implements ShowcaseContract
{
    protected Model $model;
    protected array $fileKeys = ['thumbnail'];
    protected array $relation = ['client', 'media'];

    public function __construct(Showcase $model)
    {
        $this->model = $model;
    }
}
