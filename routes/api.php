<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ContactUsController;

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
Route::post('login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register']);
Route::delete('/logout/{id}', [AuthController::class, 'logout']);
Route::post('/forgotpassword', [AuthController::class, 'forgotPassword']);
Route::get('confirm/{id}', [AuthController::class, 'confirmUser']);

/*
|-------------------------------------------------
|    sanctum routes
|-------------------------------------------------- 
*/

Route::middleware("auth:sanctum")->group(function () {
    Route::get('message', [MessageController::class, 'index']);
    Route::delete('message', [MessageController::class, 'destroy']);
    Route::get('conversation', [MessageController::class, 'conversation']);
});

Route::post('message', [MessageController::class, 'create']);
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
// home page search 
Route::get('/searchlocation', [PropertyController::class, 'homePageSearch']);


/*
|-------------------------------------------------
|    Property Routes
|-------------------------------------------------- 
*/
Route::prefix('propery')->group(function () {
    Route::post('/', [PropertyController::class, 'create']);
    Route::get('/', [PropertyController::class, 'index']);
    Route::get('/search', [PropertyController::class, 'search']);
    Route::get('/maxvalue', [PropertyController::class, 'getMaxSliderValue']);
    Route::get('/{id}', [PropertyController::class, 'show']);
});

/*
|-------------------------------------------------
|    Contactus and NewsLatter Routes
|-------------------------------------------------- 
*/

Route::prefix('newslatter')->group(function () {
    Route::post('/subscribe', [ContactUsController::class, 'subscribeNewsletter']);
});

Route::prefix('contactus')->group(function () {
    Route::post('/', [ContactUsController::class, 'contactus']);
});
