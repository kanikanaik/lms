import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import CopyClip from "../clipcopy";

export default async function Classroom(props: { courseId: string }) {
  const user = await getServerSession(authOptions);
  const courseid = await db.course.findUnique({
    where: {
      id: props.courseId,
    },
    include: {
      enrolledStudents: true,
    },
  });
  const enrolledStudents = courseid?.enrolledStudents;

  return (
    <main>
      <div className="flex w-full font-medium rounded-md text-lg bg-zinc-950 text-white p-4">
        <ChevronRight />
        {courseid?.title}
      </div>
      <div className="bg-[#E8AAF1] mt-6 p-6 text-black rounded-md">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-xl">Name : {courseid?.title}</p>
            <p> Description : {courseid?.description}</p>
            <p> Section : {courseid?.section}</p>
            {/* <CopyToClipboard text={courseid?.class_code}>
              <button>Copy to clipboard</button>
            </CopyToClipboard>{" "} */}
            {/* <p>{courseid?.class_code}</p> */}
            <CopyClip text={courseid?.class_code as string} />
            {/* <div>
              {enrolledStudents?.map((students) => (
                <div>{students.name}</div>
              ))}
            </div> */}
          </div>
          <div>
            <div>
              <Image
                width={450}
                height={150}
                src="/meow2.png"
                alt="profile picture"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
