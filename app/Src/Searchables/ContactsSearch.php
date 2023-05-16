<?php

namespace App\Src\Searchables;

use App\Models\Contact;
use Illuminate\Support\Facades\Auth;

class ContactsSearch
{
    protected $model;
    public function __construct()
    {
        $this->model = Contact::query();
    }


    public function searchContacts()
    {
        $this->model->with('user');
        $this->searchColumns();
        $this->byUser();
        
        if (!isset(Request()->per_page) || Request()->per_page < 1) {
            return $this->model->paginate($this->model->count());
        }
        return $this->model->paginate(Request()->per_page);
    }

    public function byUser()
    {
        $id = Auth::user()->id;
        $this->model->where('user_id', $id);
    }


    private function searchColumns()
    {
        $columns = [
            'user_id', 'name', 'company', 'phone', 'email'
        ];
        if (Request()->keyword && Request()->keyword != "null") {
            $keyword = Request()->keyword;
            foreach ($columns as $column) {
                $this->model->where(function ($query) use ($column, $keyword) {
                    $query->where($column, 'like', "%" . $keyword . "%");
                });
            }
        }
    }

}
