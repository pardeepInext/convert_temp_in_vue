<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\MessageAttachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Conversation;
use App\Http\Resources\ConversationResource;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Message $message)
    {
        $validator = Validator::make($request->all(), [
            'user_1' => "required",
            'user_2' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        }

        $ids = [$request->sender_id, $request->reciver_id];
        $conversation = Conversation::where([['user_1', $request->user_1], ['user_2', $request->user_2]])->first();
        $messages = $conversation ? $message->withTrashed()->where('conversation_id', '=', $conversation->id)->with('attachment', 'senderinfo')
            ->orderBy('created_at', 'DESC')->paginate(10) : [];
        return response()->json([
            'success' => true,
            'messages' => $messages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_1' => "required",
            'user_2' => 'required',
        ]);
        $ids = [$request->user_1, $request->user_2];
        $fetchConversation = Conversation::whereIn('user_1', $ids)->whereIn('user_2', $ids)->first();
        $conversation = $fetchConversation ? $fetchConversation : Conversation::create($request->only('user_1', 'user_2'));

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        }

        $messageCreated = $request->except('attachment', 'user_1', 'user_2');
        $messageCreated['conversation_id'] = $conversation->id;
        $messageCreated['sender_id'] = $request->user_1;
        $message = Message::create($messageCreated);

        if ($request->attachment) {
            foreach ($request->attachment as $attachment) {
                $newFile = $request->user_1 . "." . time() . "." . $attachment->getClientOriginalExtension();
                $attachment->move(public_path("assets/message_attachment"), $newFile);
                MessageAttachment::create(['message_id' => $message->id, 'attachment' => $newFile, 'attachement_type' => $attachment->getClientMimeType()]);
            }
        }

        return response()->json(['success' => true, 'message' => 'Message is send']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function destroy(Request $request, Message $message)
    {

        $validator = Validator::make($request->all(), ['id' => "required"]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        }

        $delete = $message::find($request->id)->delete();
        $response = $delete ? ['success' => true, 'message' => 'message is delated'] : ['success' => true, 'message' => 'message is delated'];
        return  response()->json($response);
    }

    public function conversation(Request $request)
    {
        return  Conversation::where('user_1', $request->current_user)->orWhere('user_2', $request->current_user)
            ->with(['User2Info', 'user1Info', 'latestMessage'])
            ->paginate(10);
    }
}
