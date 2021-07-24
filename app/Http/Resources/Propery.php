<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;

class Propery extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'type' => $this->type,
            'status' => $this->status,
            'price' => $this->price,
            'property_id' => $this->property_id,
            'size' => $this->size,
            'bedrooms' => $this->bedrooms,
            'bathrooms' => $this->bathrooms,
            'garages' => $this->garages,
            'year_built' => $this->year_built,
            'address' => $this->address,
            'features' => $this->features,
            'images' => $this->images,
            'location' => $this->address,
            'postedBy' => $this->postedBy,

        ];
    }
}
