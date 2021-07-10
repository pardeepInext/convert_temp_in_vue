<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Property;
class Location extends Model
{
    use HasFactory;
    protected $fillable = ['address','country','city','state','property_id'];
    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
