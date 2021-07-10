<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Property;
use App\Models\PropertyFeature;
use App\Models\PropertyImage;
use App\Models\Location;

class PropertySeed extends Seeder
{
    public function run()
    {
        $location = [
            "address" => "3 Middle Winchendon Rd",
            "country" => "India",
            "state" => "Rajasthan",
            "city" => "Jaipur"
        ];
        $type = ['apartment', 'house', 'office', 'villa', 'store', 'resturent'];
        $status = ['rent', 'sale'];
        $i = 1;
        $properperties = [
            [
                "title" => "Home in Merrick Way",
                "price" => "400000",
                "property_id" => '45617',
                'size' => '2283',
                'bedrooms' => '5',
                'bathrooms' => '2',
                'garages' => '1',
                'year_built' => '1991',
                'feature' => [
                    "air conditioning",
                    "barbeque",
                    "dryer",
                    "gym"
                ]

            ],
            [
                "title" => "Unimont Aurum",
                "price" => "45678",
                "property_id" => '3645',
                'size' => '4789',
                'bedrooms' => '10',
                'bathrooms' => '6',
                'garages' => '2',
                'year_built' => '1978',
                'feature' => [
                    'refrigerator',
                    'sauna',
                    'swimming pool',
                    'tv cable'
                ]

            ],
            [
                "title" => "Vrindavan Flora",
                "price" => "400000",
                "property_id" => '7894',
                'size' => '6894',
                'bedrooms' => '15',
                'bathrooms' => '7',
                'garages' => '3',
                'year_built' => '2003',
                'feature' => [
                    'washer',
                    'Wifi',
                    'window coverings',
                    'villa'
                ]

            ],
            [
                "title" => "Shramik Vaibhav",
                "price" => "6512345",
                "property_id" => '78945',
                'size' => '12345',
                'bedrooms' => '10',
                'bathrooms' => '4',
                'garages' => '6',
                'year_built' => '1203',
                'feature' => [
                    'refrigerator',
                    'sauna',
                    'swimming pool',
                    'tv cable'
                ]

            ],
            [
                "title" => "Poddar Wondercity",
                "price" => "1245646",
                "property_id" => '65423',
                'size' => '45614',
                'bedrooms' => '3',
                'bathrooms' => '2',
                'garages' => '1',
                'year_built' => '1990',
                'feature' => [
                    'washer',
                    'Wifi',
                    'window coverings',
                    'villa'
                ]

            ],
            [
                "title" => "GoldCrest Residency",
                "price" => "9874546",
                "property_id" => '14561',
                'size' => '78945',
                'bedrooms' => '12',
                'bathrooms' => '11',
                'garages' => '5',
                'year_built' => '2000',
                'feature' => [
                    "air conditioning",
                    "barbeque",
                    "dryer",
                    "gym"
                ]

            ],

        ];
        
        foreach ($properperties as $property) {
            $images = [];
            unset($images);
            $images[] = "property-$i.jpg";
            $images[] = "ps-" . rand(1, 2) . ".jpg";
            $images[] = "ps-" . rand(3, 5) . ".jpg";

            $propertyInsert = Property::create([
                'title' => $property['title'],
                'price' => $property['price'],
                'size' => $property['size'],
                'type' => $type[array_rand($type)],
                'status' => $status[array_rand($status)],
                'bedrooms' => $property['bedrooms'],
                'bathrooms' => $property['bathrooms'],
                'garages' => $property['garages'],
                'year_built' => $property['year_built'],
                'prefix' => 'sq feet',
            ]);

            Location::create([
                'address' => $location['address'],
                'country' => $location['country'],
                'state' => $location['state'],
                'city' => $location['city'],
                'property_id' => $propertyInsert->id
            ]);

            foreach ($images as $image) {
                PropertyImage::create(['property_id' => $propertyInsert->id, 'image' => $image]);
            }

            foreach ($property['feature'] as $feature) {
                PropertyFeature::create(['property_id' => $propertyInsert->id, 'feature' => $feature]);
            }

            $i++;
        }
    }
}
