"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPublicMsg } from "../utils/action";

function AllChat({ courseId }: { courseId: string }) {
  const data = useQuery({
    queryKey: ["messages", courseId],
    queryFn: async () => {
      const messages = await getPublicMsg(courseId);
      return messages;
    },
  });
  const messages = data.data;
  return (
    <div className="h-full flex m-2 flex-col-reverse gap-2 overflow-y-auto chat-hidden-scrollbar">
      {data.isLoading && <p>Loading...</p>}
      {messages?.map((message) => (
        <div key={message.id}>
          <p className="text-xs text-black">{message.user.name}</p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AllChat;
