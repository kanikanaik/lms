"use client";
import React, { useState } from "react";
import TeachingClass from "./TeachingClass";
import EnrolledClass from "./EnrolledClass";

function ClassesJoined() {
  const [isForm, setisForm] = useState("enrolled");
  return (
    <div>
      <main className="flex flex-col px-24 py-10">
        <div className="px-2">
          <p className="font-bold  text-lg"> Classes</p>
          <button className=""></button>
          <hr></hr>
        </div>
        <div className="bg-white rounded-md p-5">
          <div className="space-x-5">
            <button
              className={` ${
                isForm === "enrolled" ? "border-b-4 border-black" : ""
              }`}
              onClick={() => {
                setisForm("enrolled");
              }}
            >
              Enrolled Classes
            </button>
            <button
              className={` ${
                isForm === "teaching" ? "border-b-4 border-black" : ""
              }`}
              onClick={() => {
                setisForm("teaching");
              }}
            >
              Teaching Classes
            </button>
          </div>
          <hr></hr>
          <div>
            <div>
              {isForm === "enrolled" && <EnrolledClass />}
              {isForm === "teaching" && <TeachingClass />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClassesJoined;
