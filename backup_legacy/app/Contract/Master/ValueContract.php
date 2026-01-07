<?php

namespace App\Contract\Master;

use App\Contract\BaseContract;

interface ValueContract extends BaseContract
{
    public function findBySlug(string $slug, array $relation = []);
}
