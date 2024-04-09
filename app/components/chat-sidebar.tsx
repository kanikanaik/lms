import React from "react";
import { User } from "lucide-react";
import ListCourses from "@/app/components/Forms/ListCourses";
import PreviousChat from "./PreviousChat";
const ChatSidebar = () => {
  return (
    <section className="fixed flex flex-col px-24 py-6 w-fit">
      <div className="px-1">
        <p className="font-bold text-lg">Messages</p>
        <hr></hr>
      </div>
      <div className="">
        <div className="">
          <ListCourses />
        </div>
        <div className="">
          <div className="bg-white text-black w-64 justify-center items-center rounded-md  p-4">
            <p className="bg-neutral-950 text-white p-2 rounded-md">
              Direct Message
            </p>
            <p className="flex gap-3 p-1">
              {/* <User /> Prathamesh Kulkarni */}
              <PreviousChat />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSidebar;
