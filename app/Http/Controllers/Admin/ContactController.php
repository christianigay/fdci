<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\InsertContactRequest;
use App\Src\Interactors\ContactInteractor;

class ContactController extends Controller
{
    protected $contactInteractor;
    
    public function __construct(ContactInteractor $contactInteractor){
        $this->contactInteractor = $contactInteractor;
    }

    public function insert(InsertContactRequest $request)
    {
        $request->validated();
        $result =  $this->contactInteractor->create($request->all());
        return response()->json(['created' => $result], 201);
    }

}
