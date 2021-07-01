<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Resources\BlogResource;

class BlogController extends Controller
{
    function index()
    {
        return BlogResource::collection(Blog::paginate(3));
    }

    function show($id)
    {
        return new BlogResource(Blog::find($id));
    }
}
