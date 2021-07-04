<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;
class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        $blogImage = ['blog-1.jpg','blog-2.jpg','blog-3.jpg'];
        
        for ($i=1; $i <10 ; $i++) { 
            $imageKey = array_rand($blogImage);
             Blog::create([
                 'heading'=>"Blog-$i",
                 'image' => $blogImage[$imageKey],
                 'content'=> "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                 'auther' => "John Doe"
             ]);
        }
    }
}
