<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
class Message extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['message', 'conversation_id', 'is_read'];
    protected $appends = ['time'];
    function attachment()
    {
        return $this->hasMany(MessageAttachment::class);
    }

    function getTimeAttribute()
    {
        return $this->created_at->diffForHumans();
    }
    
    function senderinfo()
    {
        return $this->hasOne(User::class,'id','sender_id');
    }
}
