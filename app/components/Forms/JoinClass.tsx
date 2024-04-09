"use client";
import { joinClass } from "@/app/action";
import { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function JoinClass() {
  const [clas_code, setClassCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setClassCode("");
    const data = await joinClass(formData);
    if (data) {
      toast.success("Class added successfully");
      router.replace(`/dash/class/${data.id}`);
    }
  };

  return (
    <div>
      <form method="post" action={handleSubmit}>
        <div className="p-5">
          <div className="p-3">
            <p> Enter Class Code : </p>
            <input
              value={clas_code}
              onChange={(e) => setClassCode(e.target.value)}
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              name="class_code"
            ></input>
          </div>

          <Button
            type="submit"
            className="rounded-full py-2 px-3 bg-neutral-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default JoinClass;
