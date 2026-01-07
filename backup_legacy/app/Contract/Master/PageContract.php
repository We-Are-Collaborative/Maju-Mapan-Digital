<?php

namespace App\Contract\Master;

use App\Contract\BaseContract;

interface PageContract extends BaseContract
{
    public function findBySlug(string $slug, array $relation = []);
    public function updateById(int $id, array $payload);
}
