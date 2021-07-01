<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\BlogSeeder;
use Database\Seeders\StatesTableSeeder;
use Database\Seeders\CountriesTableSeeder;
use Database\Seeders\CitiesTableChunkOneSeeder;
use Database\Seeders\CitiesTableChunkTwoSeeder;
use Database\Seeders\CitiesTableChunkThreeSeeder;
use Database\Seeders\CitiesTableChunkFourSeeder;
use Database\Seeders\CitiesTableChunkFiveSeeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->run([
            BlogSeeder::class,
            StatesTableSeeder::class,
            CountriesTableSeeder::class,
            CitiesTableChunkOneSeeder::class,
            CitiesTableChunkTwoSeeder::class,
            CitiesTableChunkThreeSeeder::class,
            CitiesTableChunkFourSeeder::class,
            CitiesTableChunkFiveSeeder::class,
        ]);
    }
}
