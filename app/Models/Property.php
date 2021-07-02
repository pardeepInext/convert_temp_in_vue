<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'image',
    ];
}
