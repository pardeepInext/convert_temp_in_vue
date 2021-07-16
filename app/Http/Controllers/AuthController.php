<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource;
class AuthController extends Controller
{

     function socialCallback(Request $request)
     {
     }

     function socialLogin(Request $request)
     {
          $user = Socialite::driver($request->provider)->userFromToken($request->token);
          $storeUser = User::where('provider_id', $user->id)->first();
          if ($storeUser) {
               return response()->json(['success' => true, 'token' => $storeUser->createToken($user->name)->plainTextToken, 'user' => $storeUser]);
          } else {
               $loginUser = User::create(['provider_id' => $user->id, 'img' => $user->avatar, 'name' => $user->name]);
               return response()->json(['success' => false, 'token' => $loginUser->createToken($loginUser->name)->plainTextToken, 'user' => $loginUser]);
          }
     }

     function login(Request $request)
     {
          $validator = Validator::make($request->input(), [
               'email' => 'required|email',
               'password' => 'required|min:8'
          ]);

          if ($validator->fails()) {
               return response()->json(['success' => false, 'errors' => $validator->errors()]);
          }

          $user = User::where('email', $request->email)->first();

          if (!$user) {
               return response()->json(['success' => false, 'errors' => ['email' => ['This email is not match with our records']]]);
          }

          if (!Hash::check($request->password, $user->password)) {
               return response()->json(['success' => false, 'errors' => ['password' => ['Password is incorrect']]]);
          }

          return response()->json(['success' => true, 'token' => $user->createToken($user->name)->plainTextToken, 'user' => $user]);
     }

     function register(Request $request)
     {
          $validator = Validator::make($request->input(), [
               'email' => 'required|email|unique:users,email',
               'password' => 'required|min:8',
               'name' => 'required'
          ]);

          if ($validator->fails()) {
               return response()->json(['success' => false, 'errors' => $validator->errors()]);
          }

          $user = User::create(['name' => $request->name, 'password' => Hash::make($request->password), 'email' => $request->email]);
          return response()->json(['success' => false, 'token' => $user->createToken($user->name)->plainTextToken]);
     }

     public function logout($id)
     {
          $user = User::find($id);
          $response = ($user->tokens()->delete()) ? ["success" => true] : ["success" => false];
          return response()->json($response);
     }

     public function forgotPassword(Request $request)
     {
          $validator = Validator::make(
               $request->input(),
               ['userInput' => 'required|email'],
               ['userInput.required' => 'Not able to search with blank input', 'userInput.email' => 'Please provide valid email address']
          );
          if ($validator->fails()) {
               return response()->json(['success' => false, 'errors' => $validator->errors()]);
          }
          $user = User::select('id')->where('email', $request->userInput)->first();
          $response = !$user ? ['success' => false, 'errors' => ['userInput' => ['Not find any account with this information']]] : ['success' => true, 'user' => $user->id];
          return response()->json($response);
     }
     public function confirmUser($id)
     {    
          return new UserResource(User::with('role')->find($id));
     }
}
