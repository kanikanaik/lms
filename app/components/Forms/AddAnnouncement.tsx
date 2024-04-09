"use client";
import { addAnnounce } from "@/app/action";
import Image from "next/image";
import { Input } from "../ui/input";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
export default function AddAnnouncement(props: { courseId: string }) {
  const session = useSession();
  const imgUrl = session.data?.user.image as string;
  const [announce, setAnnounce] = useState("");

  const handleAddabounce = async (formData: FormData) => {
    setAnnounce("");
    const data = await addAnnounce(formData);
    if (data) toast.success("Announcement added");
  };
  return (
    <div className="bg-zinc-950 gap-3 text-white p-4 mt-6 rounded-md">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <Image
            width={30}
            height={30}
            src={imgUrl}
            alt="profile picture"
            className="w-8 h-8 rounded-md"
          />
          <p className="text-base"></p>
        </div>
        <form className="flex" method="post" action={handleAddabounce}>
          <Input
            placeholder="Add an announcement"
            id="anno"
            name="anno"
            value={announce}
            onChange={(e) => setAnnounce(e.target.value)}
            className="w-96"
          />
          <input
            type="text"
            name="courseId"
            id="courseId"
            className="hidden"
            value={props.courseId}
          />

          <button className="mx-5 p-2 rounded-md bg-blue-500" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
