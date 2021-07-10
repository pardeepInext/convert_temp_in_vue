<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
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
            'heading' => $this->heading,
            'content' => $this->content,
            'image' => $this->image,
            'blog_date' => $this->blog_date,
            'auther' => $this->auther,
            'comments' => $this->comments
        ];
    }
}
