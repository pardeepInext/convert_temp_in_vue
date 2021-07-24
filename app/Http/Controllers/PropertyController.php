<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\Location;
use App\Models\Property;
use App\Models\PropertyFeature;
use App\Models\PropertyImage;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\Propery as ResoucePropery;

use function PHPUnit\Framework\isEmpty;

class PropertyController extends Controller
{

    function index(Request $request)
    {

        $status = $request->status ? $request->status : "rent";
        $property = Property::where('status', $status);

        if (!is_null($request->bedroom)) $property->where('bedrooms', $request->bedroom);

        if (!is_null($request->bathroom)) $property->where('bathrooms', $request->bathrooms);
        
        if (!is_null($request->garage)) $property->where('garages', $request->garage);
        
        if (!is_null($request->price)) $property->whereBetween('price', $request->price);
        
        if(!is_null($request->size)) $property->whereBetween('size', $request->size);

        if(!is_null($request->type)) $property->where('type', $request->type);
        return ResoucePropery::collection($property->paginate(3));
    }

    public function create(Request $request)
    {


        $validator = Validator::make($request->input(), [
            'title' => 'required',
            'type' => 'required',
            'status' => 'required',
            'price' => 'required',
            'property_id' => 'required|numeric',
            'size' => 'required|numeric',
            'prefix' => 'required',
            'bedrooms' => 'required|numeric',
            'bathrooms' => 'required|numeric',
            'garages' => 'required|numeric',
            'year_built' => "required|integer|min:1900|max:{data('Y')}"
        ], [
            'year_built.min' => 'Year should not be less than 1900',
            'year_built.max' => 'Year shoud not be more '
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 203);
        }

        //inserting property
        $proprtyInput = $request->except('feature', 'image', 'location');
        $property = Property::create($proprtyInput);

        //inserting & storing images 
        foreach ($request->file('image') as $images) {
            $newFile = time() . "." . $images->getClientOriginalExtension();
            $images->move(public_path('assets\img\property'), $newFile);
            PropertyImage::create(['property_id' => $property->id, 'image' => $newFile]);
        }

        //inseting location
        $location = json_decode($request->location);
        $location = Location::create([
            'address' => $location->address,
            'country' => $location->country,
            'state' => $location->state,
            'city' => $location->city,
            'property_id' => $property->id
        ]);

        // inserting features
        foreach ($request->feature as $propertyFeature) {
            PropertyFeature::create(['property_id' => $property->id, 'feature' => $propertyFeature]);
        }

        return response(['success' => true], 200);
    }

    public function getCountry(Request $request)
    {
        return Country::select('id', 'name')->where('name', 'like', "%{$request->name}%")->get();
    }
    public function getStates(Request $request)
    {
        $country = Country::select('id')->where('name', $request->country)->firstOrFail();
        return State::select('id', 'name')->where('country_id', '=', $country->id)->orWhere("name", "like", "{$request->state}%")->get();
    }

    public function getCity(Request $request)
    {
        $state = State::select('id')->where('name', $request->state)->firstOrFail();
        return City::select('id', 'name')->where("state_id", '=', $state->id)->Where("name", "like", "{$request->city}%")->get();
    }


    function show($id)
    {
        return new ResoucePropery(Property::findOrFail($id));
    }

    function homePageSearch(Request $request)
    {
        $search = [];
        $countries = Country::select('name')->where('name', 'like', "$request->search%")->limit(5)->get();
        if ($countries->count() > 0) {
            foreach ($countries as $country) {
                $search[$country->name] = "$country->name in <b>(country)</b>";
            }
        }

        $states =  State::select('name')->where('name', 'like', "$request->search%")->limit(5)->get();
        if ($states->count() > 0) {
            foreach ($states as $state) {
                $search[$state->name] = "$state->name in <b>(State)</b>";
            }
        }

        $cities =  City::select('name')->where('name', 'like', "$request->search%")->limit(5)->get();
        if ($cities->count() > 0) {
            foreach ($cities as $city) {
                $search[$city->name] = "$city->name in <b>(city)</b>";
            }
        }

        return $search;
    }

    function search(Request $request)
    {
        if ($request->column && $request->value) {
            return Location::where($request->column, '=', $request->value)->with('property')->paginate(10);
        }
    }

    function getMaxSliderValue()
    {
        $price = Property::max('price');
        $size = Property::max('size');
        return compact('price', 'size');
    }
}
