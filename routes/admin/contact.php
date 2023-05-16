<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['web']], function() {
    Route::post('contact/add', 'ContactController@insert');
    Route::post('contact/edit', 'ContactController@edit');
    Route::get('contact/list', 'ContactController@list');
    Route::get('contact/get/{id}', 'ContactController@getList');
});