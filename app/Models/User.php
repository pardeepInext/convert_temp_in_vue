<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class User extends Authenticatable
{
    use HasApiTokens,HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $appends = ['proifie_image','image'];
    protected $fillable = [
        'name',
        'email',
        'password',
        'provider', 
        'provider_id',
        'img'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    function getProifieImageAttribute(){
         return $this->img != Null ? asset("assets/img/user/$this->img") : asset("assets/img/user/defaultuser.png"); 
    }

    function getImageAttribute(){
        return $this->role_id != NULL ? $this->img : ($this->img != Null ? asset("assets/img/user/$this->img") : asset("assets/img/user/defaultuser.png"));
    }

    function role(){
        return $this->hasOne(Role::class,'id','role_id');
    }
}
