<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;
use App\Http\Resources\Propery as ResoucePropery;
use App\Models\NewsLetter;
use App\Models\ContactUs;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    function propertyList(Request $request)
    {
        $property = Property::query();

        if ($request->type) {
            $property->where('type', $request->type);
        }

        if ($request->search) {
            $property->where('title', 'LIKE', "%$request->search%")
                ->orWhere('type', 'LIKE', "%$request->search%")
                ->orWhere('status', 'LIKE', "%$request->search%")
                ->orWhere('price', 'LIKE', "%$request->search%")
                ->orWhere('size', 'LIKE', "%$request->search%")
                ->orWhere('year_built', 'LIKE', "%$request->search%");
        }
        return $property->paginate(3);
    }

    function propertyDetails($id)
    {
        return new ResoucePropery(Property::findOrFail($id));
    }

    function newsLatter(Request $request)
    {
        $newslatter = NewsLetter::query();
        if ($request->search) {
            $newslatter->where('email', 'LIKE', "%$request->search%");
        }
        return $newslatter->paginate(10);
    }

    function contactUs(Request $request)
    {
        $contactUs = ContactUs::query();
        if ($request->search) {
            $contactUs->where('name', 'LIKE', "%$request->search%")
                ->orWhere('comment', 'LIKE', "%$request->search%")
                ->orWhere('email', 'LIKE', "%$request->search%")
                ->orWhere('website', 'LIKE', "%$request->search%");
        }
        return $contactUs->paginate(10);
    }

    function users(Request $request)
    {
        $users = User::query();
        $users->where('role_id', '<>', '3');

        if ($request->type) {
            $users->where('type', $request->type);
        }

        if ($request->search) {
            $users->where('name', 'LIKE', "%$request->search%")
                ->orWhere('email', 'LIKE', "%$request->search%");
        }
        return $users->paginate(10);
    }

    function userDetails($id)
    {
        $user = User::find($id);
        $html = view("SSRView.userdetails", compact('user'))->render();
        return trim($html);
    }
    function addUser(Request $request)
    {
        $validator = Validator::make($request->input(), [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'name' => 'required'
        ]);

        if ($validator->fails()) return response()->json(['success' => false, 'errors' => $validator->errors()]);
        $user = User::create(['name' => $request->name, 'password' => Hash::make($request->password), 'email' => $request->email]);
        return response()->json(['success'=>true]);

    }
}
