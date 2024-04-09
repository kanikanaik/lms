import React from "react";
import { db } from "../lib/db";
import clsx from "clsx";

async function AllPrivateChat({
  courseId,
  senderId,
  receiverId,
}: {
  courseId: string;
  senderId: string;
  receiverId: string;
}) {
  const privateMessages = await db.privateMessage.findMany({
    where: {
      courseId: courseId,
      OR: [
        { AND: [{ userId: senderId }, { receiverId: receiverId }] },
        { AND: [{ userId: receiverId }, { receiverId: senderId }] },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      course: true,
    },
  });
  return (
    <div className="chat-hidden-scrollbar h-full flex m-2 flex-col-reverse gap-2 overflow-y-auto chat-hidden-scrollbar">
      {privateMessages?.map((message) => (
        <div
          className={clsx("flex gap-2", {
            "justify-end items-center flex-row gap-2":
              message.userId === senderId,
            "justify-end items-center flex-row-reverse gap-2":
              message.userId === receiverId,
          })}
          key={message.id}
        >
          <div
            className={clsx("flex flex-row gap-2", {
              "justify-end items-center bg-violet-400 p-2 rounded-lg":
                message.userId === senderId,
              "justify-start items-center bg-purple-600 p-2 rounded-lg":
                message.userId === receiverId,
            })}
          >
            {message.message}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPrivateChat;
