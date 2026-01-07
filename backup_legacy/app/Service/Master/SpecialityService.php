<?php

namespace App\Service\Master;

use App\Contract\Master\SpecialityContract;
use App\Models\Speciality;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;

class SpecialityService extends BaseService implements SpecialityContract
{
    protected Model $model;
    protected array $fileKeys = ['thumbnail'];

    public function __construct(Speciality $model)
    {
        $this->model = $model;
    }

    public function findBySlug(string $slug, array $relation = [])
    {
        return $this->model->where('slug', $slug)->with($relation)->first();
    }
    public function updateById(int $id, array $payload): Speciality
    {
        // Extract file data before update
        $fileData = [];
        foreach ($this->fileKeys as $fileKey) {
            if (isset($payload[$fileKey])) {
                $fileData[$fileKey] = $payload[$fileKey];
                unset($payload[$fileKey]);
            }
        }

        $speciality = Speciality::findOrFail($id);
        $speciality->update($payload);

        // Handle file uploads
        $this->handleFileUploads($speciality, $fileData);

        return $speciality->fresh();
    }
}
