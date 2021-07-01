<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use App\Models\Comment;
class Blog extends Model
{
    use HasFactory;
    protected $fillable = ['heading', 'content', 'image', 'auther'];
    protected $appends = ['blog_date'];

    public function getImageAttribute($value)
    {
        return asset("assets/img/blog/{$value}");
    }

    public function getBlogDateAttribute()
    {
        return Carbon::parse($this->created_at)->format('F d,Y');
    }

  
    /**
     * Get all of the comments for the Comment */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    
}
