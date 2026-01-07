<?php

namespace App\Contract;

use Illuminate\Database\Eloquent\Model;

interface BaseContract
{
    public function build(): Model;
    public function all(
        $filters,
        $sorts,
        bool|null $paginate = null,
        array $relation = [],
        int $perPage  = 10,
        string $orderColumn  = 'id',
        string $orderPosition = 'asc',
        array $conditions = [],
    );
    public function find($id, array $relation = []);
    public function findBySlug(string $slug, array $relation = []);
    public function create($payloads);
    public function insert($payloads);
    public function update(array $conditions = [], $payloads);
    public function destroy($id);
    public function bulkDelete(array $ids);
}
