<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\State;
use App\Models\City;

class PropertyController extends Controller
{
    public function submitProperty(Request $request)
    {
        print_r($request->input());
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
        return City::select('id', 'name')->where("state_id", '=', $state->id)->orWhere("name", "like", "{$request->city}%")->get();
    }
}
