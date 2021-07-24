<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageAttachment extends Model
{
    use HasFactory;
    protected $fillable = ['message_id','attachment','attachement_type'];
    protected $appends = ['attachment_path'];

    function getAttachmentPathAttribute()
    {
        return $this->attachment ? asset("assets/message_attachment/$this->attachment") : ""; 
    }

}
