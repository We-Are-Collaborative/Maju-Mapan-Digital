<?php

namespace App\Service\Master;

use App\Contract\Master\StakeHolderContract;
use App\Models\StakeHolder;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class StakeHolderService extends BaseService implements StakeHolderContract
{
    protected Model $model;
    protected array $fileKeys = ['thumbnail'];
    protected array $relation = ['media'];

    public function __construct(StakeHolder $model)
    {
        $this->model = $model;
    }
}
