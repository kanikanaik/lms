"use client";
import { getAssignmentInfo, getCourseCreator } from "@/app/utils/action";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { UploadButton } from "@/app/utils/uploadthing";
import { useSession } from "next-auth/react";
import GradeAssignment from "./GradeAssignment";
import SUploadAssignment from "./SUploadAssignment";
import { IM_Fell_Great_Primer_SC } from "next/font/google";
import Grades from "./Grades";

export default function ShowAssignment(props: {
  assignmentId: string;
  courseId: string;
}) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const { data: assignmentInfos, isLoading } = useQuery({
    queryKey: ["assignmentInfo"],
    queryFn: async () => {
      return getAssignmentInfo(props.assignmentId);
    },
  });
  const session = useSession();
  const userId = session.data?.user.id;
  const { data: CourseCreators } = useQuery({
    queryKey: ["CourseCreator"],
    queryFn: async () => {
      return await getCourseCreator(props.courseId);
    },
  });

  const creatorId = CourseCreators?.creatorId;
  return (
    <div className="p-5 w-[1000px]">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        assignmentInfos?.map((assignmentInfo) => (
          <div
            className="flex flex-row justify-between items-center w-full"
            key={assignmentInfo.id}
          >
            <div className="flex flex-col gap-2">
              <p className="text-xl">{assignmentInfo.title}</p>
              <p>{assignmentInfo.description}</p>
              <iframe
                src={assignmentInfo.reference as string}
                height={100}
                width={200}
              ></iframe>
              <p>{assignmentInfo?.dueDate}</p>
              <p>
                Grades:
                <Grades assignmentId={props.assignmentId} />
              </p>
            </div>
            <div className="">
              {userId === creatorId ? (
                <div>
                  <GradeAssignment assignmentId={props.assignmentId} />
                </div>
              ) : (
                <div>
                  <SUploadAssignment assignmentId={props.assignmentId} />
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
