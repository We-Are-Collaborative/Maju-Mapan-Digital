<?php

namespace App\Contract\Master;

use App\Contract\BaseContract;

interface LibraryContract extends BaseContract
{
    public function findBySlug(string $slug, array $relation = []);
}
