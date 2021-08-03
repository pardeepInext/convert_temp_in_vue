<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;
use App\Http\Resources\Propery as ResoucePropery;
use App\Models\NewsLetter;

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
}
