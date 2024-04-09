"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getTeaching } from "@/app/utils/action";
import { useSession } from "next-auth/react";

export default function TeachingClass() {
  const session = useSession();
  const { data: courses, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      return await getTeaching();
    },
  });

  return (
    <div className="grid grid-cols-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        courses?.map((course) => (
          <div key={course.id} className="p-5">
            <div className="">
              <div className="bg-violet-300 p-5 w-64 rounded-xl">
                <Link href={`/dash/class/${course.id}`}>
                  <h2 className="text-lg">{course.title}</h2>
                  <p className="font-bold"> {course.class_code}</p>
                  <p className="text-sm">
                    {course.description || "No description available"}
                  </p>
                  <div className="flex gap-3">
                    <Image
                      width={30}
                      height={30}
                      src={session.data?.user.image as string}
                      alt="profile picture"
                      className="w-8 h-8 rounded-full"
                    />
                    <p> {session.data?.user.name}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
