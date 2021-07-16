<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|-------------------------------------------------
|    Auth Routes
|-------------------------------------------------- 
*/
Route::post('sociallogin/', [AuthController::class, 'socialLogin']);
Route::get('/{provider}/callback', [AuthController::class, 'socialCallback']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::delete('/logout/{id}', [AuthController::class, 'logout']);
Route::post('/forgotpassword', [AuthController::class, 'forgotPassword']);
Route::get('confirm/{id}',[AuthController::class,'confirmUser']);
/*
|-------------------------------------------------
|    Blogs Routes
|-------------------------------------------------- 
*/
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blog/{id}', [BlogController::class, 'show']);

Route::post('/countries', [PropertyController::class, 'getCountry']);
Route::post('/states', [PropertyController::class, 'getStates']);
Route::post('/city', [PropertyController::class, 'getCity']);


/*
|-------------------------------------------------
|    Property Routes
|-------------------------------------------------- 
*/
Route::prefix('propery')->group(function () {
    Route::post('/', [PropertyController::class, 'create']);
    Route::get('/', [PropertyController::class, 'index']);
    Route::get('/{id}', [PropertyController::class, 'show']);
});
