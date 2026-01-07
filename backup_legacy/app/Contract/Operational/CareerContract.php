<?php

namespace App\Contract\Operational;

use App\Contract\BaseContract;

interface CareerContract extends BaseContract
{
    public function findBySlug(string $slug, array $relation = []);
}
