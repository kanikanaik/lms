"use client";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { sendMessage, sendPrivateMessage } from "../utils/action";

function PrivateChatInput({
  courseId,
  senderId,
  receiverId,
}: {
  senderId: string;
  receiverId: string;
  courseId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData: FormData) => {
        sendPrivateMessage(formData);
        formRef.current?.reset();
      }}
      method="post"
      ref={formRef}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <input type="hidden" name="courseId" id="courseId" value={courseId} />
        <input type="hidden" name="senderId" id="senderId" value={senderId} />
        <input
          type="hidden"
          name="receiverId"
          id="receiverId"
          value={receiverId}
        />
        <Input
          type="text"
          placeholder="Type a message"
          className="w-full h-12 border-2 border-gray-600 rounded-lg"
          id="message"
          name="message"
        />
        <Button className="rounded-full" type="submit">
          Send
        </Button>
      </div>
    </form>
  );
}

export default PrivateChatInput;
