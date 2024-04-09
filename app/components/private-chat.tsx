import { db } from "@/app/lib/db";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import ChatInput from "./chat-input";
import PrivateChatInput from "./private-chat-input";
import AllPrivateChat from "./all-private-chats";

export default async function PrivateChat({
  courseId,
  senderId,
  receiverId,
}: {
  courseId: string;
  senderId: string;
  receiverId: string;
}) {
  const reciver = await db.user.findUnique({
    where: {
      id: receiverId,
    },
  });
  return (
    <div className="flex flex-col justify-between bg-white w-[40vw] ml-48 h-[80vh] rounded-lg">
      <div className="p-2 flex flex-row justify-start items-center gap-2 border-b-2 border-gray-600">
        <ChatBubbleIcon />
        <p>{reciver?.name}</p>
      </div>
      <AllPrivateChat
        courseId={courseId}
        senderId={senderId}
        receiverId={receiverId}
      />
      <div>
        <PrivateChatInput
          senderId={senderId}
          receiverId={receiverId}
          courseId={courseId}
        />
      </div>
    </div>
  );
}
