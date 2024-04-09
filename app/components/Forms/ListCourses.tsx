import { db } from "@/app/lib/db";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function ListCourses() {
  const session = await getServerSession(authOptions);
  let user = session?.user.id;
  const courseid = await db.user.findUnique({
    where: {
      id: user as string,
    },
    include: {
      enrolledCourses: true,
      createdCourses: true,
    },
  });
  const enrolledCourse = courseid?.enrolledCourses;
  const createdCourse = courseid?.createdCourses;

  //  const meow = enrolledCoursecreatedCourse;

  return (
    <div className="bg-white text-black w-64 justify-center items-center rounded-md  p-4">
      <p className="bg-neutral-950 text-white p-2 rounded-md">Courses</p>
      <div className="items-center p-2 flex flex-col gap-2">Enrolled</div>
      {enrolledCourse?.map((courses) => (
        <Link key={courses.id} href={`/dash/message/${courses.id}`}>
          <div className="flex gap-3">
            <div>
              <button className="hover:bg-slate-600 rounded-md p-1">
                {courses.title}
              </button>
            </div>
          </div>
        </Link>
      ))}
      <hr></hr>
      <div className="items-center p-2 flex flex-col gap-2">Taught</div>
      {createdCourse?.map((courses) => (
        <Link key={courses.id} href={`/dash/message/${courses.id}`}>
          <div className="flex gap-3">
            <div>
              <button className="hover:bg-slate-600 rounded-md p-1">
                {courses.title}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
