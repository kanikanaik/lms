import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/db";
import { VideoIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
export default async function PeopleClassroom({
  courseId,
}: {
  courseId: string;
}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      enrolledStudents: true,
      creator: true,
    },
  });
  const enrolledStudents = course?.enrolledStudents;
  const teacher = course?.creator;

  return (
    <div className="bg-zinc-950 absolute right-0 w-56 flex flex-col justify-center items-center rounded-md text-white p-4">
      <div>
        <Link href={`/dash/message/${courseId}/${userId}--${teacher?.id}`}>
          <p className="items-center p-2">Teacher</p>
          <div className="flex gap-3">
            <Image
              width={30}
              height={30}
              alt="meow"
              className="w-8 h-8 rounded-full"
              src={teacher?.image as string}
            ></Image>
            <p>{teacher?.name}</p>
          </div>
        </Link>
      </div>
      <div>
        <p className="items-center p-2">Students</p>
        {enrolledStudents?.map((students) => (
          <Link
            href={`/dash/message/${courseId}/${userId}--${students.id}`}
            key={students.id}
          >
            <div className="flex gap-3">
              <Image
                width={30}
                height={30}
                alt="meow"
                className="w-8 h-8 rounded-full"
                src={students.image as string}
              ></Image>
              <p>{students.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
