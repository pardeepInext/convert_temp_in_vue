<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;
    protected $fillable = ['user_1', 'user_2'];
    
    
    function user1Info()
    {
        return $this->hasOne(User::class,'id','user_1');
    }
    function User2Info(){
        return $this->hasOne(User::class,'id','user_2');
    }
    
    public function latestMessage(){
        return $this->hasOne(Message::class,'conversation_id',$this->id)->latest();
    }

    
}
