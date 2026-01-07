<?php 

namespace App\Service\Operational;

use App\Contract\Operational\InquiryContract;
use App\Models\Inquiry;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class InquiryService extends BaseService implements InquiryContract
{
    protected Model $model;

    public function __construct(Inquiry $model)
    {
        $this->model = $model;
    }
}