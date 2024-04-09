"use client";
import { useState } from "react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { VideoIcon } from "lucide-react";
import AllChat from "./all-chat";
import ChatInput from "./chat-input";
import { MediaRoom } from "./media-room";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { SocketIndicator } from "./socket-indicator";

type course = {
  id: string;
  title: string;
  description: string | null;
  section: string | null;
  class_code: string | null;
  creatorId: string;
} | null;
{
  /* <div className="flex flex-col justify-between bg-white w-[84vw] ml-48 h-[90vh] rounded-lg z-50"> */
}

function ChatRender({
  course,
  courseId,
}: {
  course: course;
  courseId: string;
}) {
  const [showMedia, setShowMedia] = useState(false);
  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-white rounded-lg z-50 ml-48",
        {
          "w-[84vw] h-[75vh]": showMedia,
          "w-[40vw] h-[80vh]": !showMedia,
        },
      )}
    >
      <div className="p-2 flex flex-row justify-between items-center gap-2 border-b-2 border-gray-600">
        <div className="flex flex-row justify-center items-center gap-2">
          <ChatBubbleIcon />
          <p>{course?.title}</p>
          <SocketIndicator />
        </div>
        <div>
          <button
            onClick={() => setShowMedia(!showMedia)}
            className="flex flex-row justify-center items-center gap-2"
          >
            <VideoIcon />
          </button>
        </div>
      </div>
      {!showMedia && (
        <>
          <AllChat courseId={courseId as string} />
          <div>
            <ChatInput courseId={courseId as string} />
          </div>
        </>
      )}
      {showMedia && (
        <MediaRoom video={true} audio={true} chatId={courseId as string} />
      )}
    </div>
  );
}

export default ChatRender;
