"use client";
import AddMaterial from "@/app/components/Forms/AddMaterial";
import ShowMaterial from "@/app/components/Forms/ShowMaterial";
import React, { useState } from "react";
const SwitchMaterial = (props: { courseId: string }) => {
  const [isForm, setisForm] = useState("showmaterial");
  return (
    <div>
      <main className="flex flex-col px-24 py-10">
        <div className="px-2">
          <p className="font-bold  text-lg"> Material</p>

          <hr></hr>
        </div>
        <div className="bg-white rounded-md p-5">
          <div className="space-x-5">
            <button
              className={` ${
                isForm === "addmaterial" ? "border-b-4 border-black" : ""
              }`}
              onClick={() => {
                setisForm("addmaterial");
              }}
            >
              Add Material
            </button>
            <button
              className={` ${
                isForm === "showmaterial" ? "border-b-4 border-black" : ""
              }`}
              onClick={() => {
                setisForm("showmaterial");
              }}
            >
              Show Material
            </button>
          </div>
          <hr></hr>
          <div>
            <div>
              {isForm === "addmaterial" && (
                <AddMaterial courseId={props.courseId} />
              )}
              {isForm === "showmaterial" && (
                <ShowMaterial courseId={props.courseId} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SwitchMaterial;
