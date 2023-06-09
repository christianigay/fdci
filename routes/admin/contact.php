<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['web']], function() {
    Route::post('contact/add', 'ContactController@insert');
    Route::post('contact/{id}/edit', 'ContactController@edit');
    Route::post('contact/{id}/delete', 'ContactController@delete');
    Route::get('contact/list', 'ContactController@list');
    Route::get('contact/get/{id}', 'ContactController@getContact');
});