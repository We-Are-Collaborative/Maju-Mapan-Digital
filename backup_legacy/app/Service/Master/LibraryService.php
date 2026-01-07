<?php

namespace App\Service\Master;

use App\Contract\Master\LibraryContract;
use App\Models\Library;
use App\Service\BaseService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class LibraryService extends BaseService implements LibraryContract
{
    protected Model $model;

    public function __construct(Library $model)
    {
        $this->model = $model;
    }

    /**
     * Create a new library file with upload handling
     */
    public function create($payloads)
    {
        try {
            if (isset($payloads['file']) && $payloads['file'] instanceof UploadedFile) {
                $file = $payloads['file'];

                // Generate unique filename
                $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('library', $filename, 'public');

                // Create library record
                $libraryData = [
                    'name' => $payloads['name'] ?? $file->getClientOriginalName(),
                    'original_name' => $file->getClientOriginalName(),
                    'path' => $path,
                    'mime_type' => $file->getMimeType(),
                    'size' => $file->getSize(),
                    'public_url' => Storage::url($path),
                    'description' => $payloads['description'] ?? null,
                    'status' => $payloads['status'] ?? 'active',
                ];

                unset($payloads['file']);
                $payloads = array_merge($payloads, $libraryData);
            }

            return parent::create($payloads);
        } catch (\Exception $e) {
            return $e;
        }
    }

    /**
     * Update library file with optional new file upload
     */
    public function update(array $conditions = [], $payloads)
    {
        try {
            if (isset($payloads['file']) && $payloads['file'] instanceof UploadedFile) {
                $file = $payloads['file'];

                // Get existing library record
                $library = $this->model->where($conditions)->first();
                if ($library) {
                    // Delete old file
                    Storage::disk('public')->delete($library->path);

                    // Generate unique filename
                    $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
                    $path = $file->storeAs('library', $filename, 'public');

                    // Update library data
                    $libraryData = [
                        'name' => $payloads['name'] ?? $file->getClientOriginalName(),
                        'original_name' => $file->getClientOriginalName(),
                        'path' => $path,
                        'mime_type' => $file->getMimeType(),
                        'size' => $file->getSize(),
                        'public_url' => Storage::url($path),
                    ];

                    unset($payloads['file']);
                    $payloads = array_merge($payloads, $libraryData);
                }
            }

            return parent::update($conditions, $payloads);
        } catch (\Exception $e) {
            return $e;
        }
    }

    /**
     * Delete library file and remove from storage
     */
    public function destroy($id)
    {
        try {
            $library = $this->model->findOrFail($id);

            // Delete file from storage
            Storage::disk('public')->delete($library->path);

            // Delete database record
            return $library->delete();
        } catch (\Exception $e) {
            return $e;
        }
    }

    /**
     * Find library by slug
     */
    public function findBySlug(string $slug, array $relation = [])
    {
        try {
            return $this->model->where('name', $slug)->with($relation)->firstOrFail();
        } catch (\Exception $e) {
            return $e;
        }
    }
}
