"use client";
import React, { useState } from "react";
import ShowAssignments from "./TSListAssignments";
import AddAssignments from "./TAddAssignments";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getCourseCreator } from "@/app/utils/action";
import ListAssignments from "./TSListAssignments";

function SwitchAssignment(props: { courseId: string }) {
  const [isForm, setisForm] = useState("showassignment");
  const session = useSession();
  const userId = session.data?.user.id;
  const { data: CourseCreators, isLoading } = useQuery({
    queryKey: ["CourseCreator"],
    queryFn: async () => {
      return await getCourseCreator(props.courseId);
    },
  });

  const creatorId = CourseCreators?.creatorId;
  return (
    <div>
      <main className="flex flex-col px-24 py-10">
        <div className="px-2">
          <button className=""></button>
          <hr></hr>
        </div>
        <div className="bg-white rounded-md p-5">
          {userId === creatorId ? (
            <div>
              <div className="space-x-5">
                <button
                  className={` ${
                    isForm === "showassignment" ? "border-b-4 border-black" : ""
                  }`}
                  onClick={() => {
                    setisForm("showassignment");
                  }}
                >
                  Grade Assignment
                </button>
                <button
                  className={` ${
                    isForm === "joinclass" ? "border-b-4 border-black" : ""
                  }`}
                  onClick={() => {
                    setisForm("joinclass");
                  }}
                >
                  Add Assignment{" "}
                </button>
              </div>
              <hr></hr>
              <div>
                <div>
                  {isForm === "showassignment" && (
                    <ListAssignments courseId={props.courseId} />
                  )}
                  {isForm === "joinclass" && (
                    <AddAssignments courseId={props.courseId} />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="space-x-5">
                <button
                  className={` ${
                    isForm === "showassignment" ? "border-b-4 border-black" : ""
                  }`}
                  onClick={() => {
                    setisForm("showassignment");
                  }}
                >
                  Upload Assignment
                </button>
                <button
                  className={` ${
                    isForm === "joinclass" ? "border-b-4 border-black" : ""
                  }`}
                  onClick={() => {
                    setisForm("joinclass");
                  }}
                ></button>
              </div>
              <hr></hr>
              <div>
                <div>
                  {isForm === "showassignment" && (
                    <ListAssignments courseId={props.courseId} />
                  )}
                  {isForm === "joinclass" && (
                    <AddAssignments courseId={props.courseId} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default SwitchAssignment;
