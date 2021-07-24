<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\MessageResource;

class ConversationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user1_info' => new UserResource($this->user1Info),
            'user2_info' => new UserResource($this->user1Info),
            'message' => new MessageResource($this->latestMessage)
        ];
    }
}
