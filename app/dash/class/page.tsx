import ClassesJoined from "@/app/components/Forms/ClassesJoined";
import ShowClass from "@/app/components/Forms/TeachingClass";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col px-24 py-10">
      <div className="px-2">
        <ClassesJoined/>
        <p></p> 
      </div>
    </main>
  );
};

export default page;
