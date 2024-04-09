"use client";
import { addClass } from "@/app/action";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export type course = {
  id: string;
  title: string;
  description: string | null;
  section: string | null;
  class_code: string | null;
  creatorId: string;
};

function CreateClass() {
  const [class_name, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [descript, setDescript] = useState("");
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setClassName("");
    setSection("");
    setDescript("");
    const data: course = (await addClass(formData)) as course;
    if (data) {
      toast.success("Class added successfully");
      router.replace(`/dash/class/${data.id}`);
    }
  };

  return (
    <div>
      <form action={handleSubmit} method="post">
        <div className="p-5">
          <div className="p-3">
            <p> Class Name : </p>
            <input
              value={class_name}
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              name="class_name"
              onChange={(e) => setClassName(e.target.value)}
            ></input>
          </div>
          <div className="p-3">
            <p> Section Name : </p>
            <input
              value={section}
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              name="section"
              onChange={(e) => setSection(e.target.value)}
            ></input>
          </div>
          <div className="p-3">
            <p>Description: </p>
            <input
              value={descript}
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              name="descript"
              onChange={(e) => setDescript(e.target.value)}
            ></input>
          </div>
          <Button type="submit" className="rounded-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateClass;
