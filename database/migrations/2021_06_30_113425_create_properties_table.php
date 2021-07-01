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
            $table->string('title');
            $table->integer('location_id');
            $table->enum('type',['rent','sale']);
            $table->enum('status',['appartment','house','office','villa','store','resturent']);
            $table->integer('price');
            $table->integer('feature_id');
            $table->json('interested');
            $table->integer('owner');
            $table->string('image');
            $table->boolean('is_open');
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
