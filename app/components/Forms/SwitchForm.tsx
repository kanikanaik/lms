"use client";
import React, { useState } from "react";
import CreateClass from "./CreateClass";
import JoinClass from "./JoinClass";

function SwitchForm() {
  const [isForm, setisForm] = useState("createclass");
  return (
    <div>
      <main className="flex flex-col px-24 py-10">
        <div className="px-2">
          <p className="font-bold  text-lg"> Class</p>
          <button className=""></button>
          <hr></hr>
        </div>
        <div className="bg-white rounded-md p-5">
          <div className="space-x-5">
            <button
              className={` ${
                isForm === "createclass" ? "border-b-4 border-black" : ""
              }`}
              onClick={() => {
                setisForm("createclass");
              }}
            >
              Create Class
            </button>
            <button
              className={` ${
                isForm === "joinclass" ? "border-b-4 border-black" : ""
              }`}
              onClick={() => {
                setisForm("joinclass");
              }}
            >
              Join Class
            </button>
          </div>
          <hr></hr>
          <div>
            <div>
              {isForm === "createclass" && <CreateClass />}
              {isForm === "joinclass" && <JoinClass />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SwitchForm;
