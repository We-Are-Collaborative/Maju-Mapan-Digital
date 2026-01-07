<?php

namespace App\Service\Master;

use App\Contract\Master\ClientContract;
use App\Models\Client;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class ClientService extends BaseService implements ClientContract
{
    protected Model $model;
    protected array $fileKeys = ['logo'];
    protected array $relation = ['media'];

    public function __construct(Client $model)
    {
        $this->model = $model;
    }
}
