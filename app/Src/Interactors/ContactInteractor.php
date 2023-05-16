<?php
namespace App\Src\Interactors;

use App\Src\Repositories\RepositoryInterface;
use Illuminate\Support\Facades\Auth;

class ContactInteractor {

    protected $repository;

    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function create(array $data)
    {
        $data['user_id'] = Auth::user()->id;
        return $this->repository->create($data);
    }

}