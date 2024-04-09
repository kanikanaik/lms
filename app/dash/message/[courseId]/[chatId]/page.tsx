import PrivateChat from "@/app/components/private-chat";
import React from "react";

async function Page({
  params,
}: {
  params: { chatId: string; courseId: string };
}) {
  const chatId = params.chatId;
  const senderId = chatId.split("--")[0];
  const receiverId = chatId.split("--")[1];
  const courseId = params.courseId;
  return (
    <div className="flex flex-col justify-center items-center pt-[3.2rem]">
      <PrivateChat
        senderId={senderId}
        receiverId={receiverId}
        courseId={courseId}
      />
    </div>
  );
}

export default Page;
