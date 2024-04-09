import PeopleClassroom from "@/app/components/Forms/PeopleClassroom";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { courseId: string };
};

function MessageLayout({ children, params }: Props) {
  return (
    <>
      <div className="pt-[3.2rem] absolute top-0 right-6">
        <PeopleClassroom courseId={params.courseId} />
      </div>
      {children}
    </>
  );
}

export default MessageLayout;
