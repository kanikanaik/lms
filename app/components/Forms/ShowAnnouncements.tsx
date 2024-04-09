import { db } from "@/app/lib/db";
import Image from "next/image";
export async function ShowAnnouncements(props: { courseId: string }) {
  const announcement = await db.announcement.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      courseId: props.courseId as string,
    },
    select: {
      createdAt: true,
      announce: true,
      author: true,
    },
  });

  return (
    <div className="mt-4 flex flex-col gap-4">
      {announcement.map((stu) => (
        <div className="flex flex-col gap-4" key={stu.author.id}>
          <div className="bg-slate-200  text-neutral-700 rounded-md p-3 flex flex-col gap-3">
            <div className="text-lg flex flex-row gap-2">
              <Image
                width={30}
                height={30}
                src={stu.author?.image as string}
                alt="profile picture"
                className="w-8 h-8 rounded-full"
              />
              {stu.author?.name}
            </div>
            <div className="text-md">{stu.announce}</div>
            <div className="text-sm text-neutral-500">
              {new Date(stu.createdAt as Date).toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
