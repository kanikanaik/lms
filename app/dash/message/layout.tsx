import ChatSidebar from "@/app/components/chat-sidebar";
import React from "react";

function MessageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <ChatSidebar />
      </div>
      {children}
    </>
  );
}

export default MessageLayout;
