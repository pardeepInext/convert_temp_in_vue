<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Location;
use App\Models\PropertyImage;
use App\Models\PropertyFeature;
class Property extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'type',
        'status',
        'price',
        'property_id',
        'size',
        'prefix',
        'bedrooms',
        'bathrooms',
        'garages',
        'year_built',
        'tour_url',
    ];

    public function address()
    {
        return $this->hasOne(Location::class);
    }

    function features(){
        return $this->hasMany(PropertyFeature::class);
    }

    function images(){
        return $this->hasMany(PropertyImage::class);
    }

    function postedBy(){
        return $this->hasOne(User::class,'id','user_id');
    }
}
