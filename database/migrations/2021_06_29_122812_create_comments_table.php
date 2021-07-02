<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('blog_id');
            $table->string('comment');
            $table->string('name');
            $table->string('email');
            $table->string('property_id');
            $table->string('property_size');
            $table->string('property_prefix');
            $table->string('bedrooms');
            $table->string('bathrooms');
            $table->string('garages');
            $table->string('year_built');
            $table->string('tour_url');
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
        Schema::dropIfExists('comments');
    }
}
