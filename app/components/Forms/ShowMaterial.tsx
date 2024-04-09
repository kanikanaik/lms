"use client";
import { getMaterial } from "@/app/utils/action";
import { useQuery } from "@tanstack/react-query";
import { StickyNoteIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function ShowMaterial(props: { courseId: string }) {
  const { data: materials, isLoading } = useQuery({
    queryKey: ["material"],
    queryFn: async () => {
      return getMaterial(props.courseId);
    },
  });
  return (
    <div className="flex flex-col gap-3 mt-3">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        materials?.map((material) => (
          <Link href={material.material} key={material.id}>
            <div
              key={material.id}
              className="bg-violet-400 flex p-5  rounded-md justify-between"
            >
              <div className="flex gap-3">
                <StickyNoteIcon />
                {material.title}
              </div>
              <div className="flex gap-3">
                <p>{material.creator.name}</p>
                <Image
                  width={30}
                  height={30}
                  src={material.creator.image as string}
                  alt="profile picture"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
