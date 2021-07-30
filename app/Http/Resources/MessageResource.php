<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\MessageAttachmentResource;
use App\Http\Resources\UserResource;
class MessageResource extends JsonResource
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
            'message' => $this->message,
            'attachment' => MessageAttachmentResource::collection($this->attachment),
            'time' => $this->time,
            'is_read' => $this->is_read,
            'sender_id' => $this->sender_id,
            'conversation_id' => $this->conversation_id,
            'sender_info' => new UserResource($this->senderinfo)
        ];
    }
}
