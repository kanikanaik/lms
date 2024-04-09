import Chat from "@/app/components/Forms/Chat";
import { db } from "@/app/lib/db";
import React from "react";

type course = {
  id: string;
  title: string;
  description: string | null;
  section: string | null;
  class_code: string | null;
  creatorId: string;
} | null;

async function Page({ params }: { params: { courseId: string } }) {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });
  return (
    <div className="flex items-center flex-col min-h-screen pt-[3.2rem]">
      <Chat course={course} courseId={course?.id as string} />
    </div>
  );
}

export default Page;
