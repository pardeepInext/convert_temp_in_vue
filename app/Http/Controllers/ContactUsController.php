<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\NewsLetter;
use App\Models\ContactUs;

class ContactUsController extends Controller
{
    function subscribeNewsletter(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            ['email' => 'required|email|unique:news_letters,email'],
            [
                'email.unique' => 'This email is already subcribed',
                'email.required' => 'Please enter an email for subsribe',
            ]
        );

        if ($validator->fails()) return response(['success' => false, 'errors' => $validator->errors()]);

        $newsLatter = NewsLetter::create($request->only('email'));
        return $newsLatter ? response(['success' => true, 'message' => "Email is subcribed"]) :
            response(['success' => true, 'message' => "Something went wrong!"]);
    }

    function contactUs(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'required|email',
                'name' => 'required',
                'comment' => 'required'
            ],
        );

        if ($validator->fails()) return response(['success' => false, 'errors' => $validator->errors()]);

        $contactUs =  ContactUs::create($request->only('email', 'name', 'comment', 'website'));
        return $contactUs ? response(['success' => true, 'message' => "Message is sent we'll contact you"]) :
            response(['success' => false, 'message' => "something went wrong please try again!"]);
    }
}
