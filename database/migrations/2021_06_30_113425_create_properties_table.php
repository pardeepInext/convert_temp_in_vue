<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('type')->nullable();
            $table->string('status')->nullable();
            $table->integer('price')->nullable();
            $table->json('interested')->nullable();
            $table->string('property_id')->nullable();
            $table->string('size')->nullable();
            $table->string('prefix')->nullable();
            $table->string('bedrooms')->nullable();
            $table->string('bathrooms')->nullable();
            $table->string('garages')->nullable();
            $table->string('year_built')->nullable();
            $table->string('tour_url')->nullable();
            $table->integer('owner')->nullable();
            $table->boolean('is_open')->nullable();
            $table->timestamps();
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
