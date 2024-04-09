"use client";
import { Calendar } from "../ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { formatDate } from "date-fns";
import React, { useRef, useState } from "react";
import { UploadButton } from "@/app/utils/uploadthing";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import { CalendarCheck } from "lucide-react";
import { addAssignment } from "@/app/action";

// export type assignment = {

// }

export default function AddAssignments(props: { courseId: string }) {
  // const [title,setTitle] = useState("");
  // const [desc,setDesc] = useState("");
  // const [due, setdue] = useState("")
  // const [marks, setmarks] = useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const combinedValue = time
    ? `${time}, ${formatDate(date as Date, "PP")}`
    : formatDate(date as Date, "PP");
  // const datetimeObject = new Date(combinedValue);
  // const isoDatetime = datetimeObject.toISOString();
  // console.log(isoDatetime);
  // const handleSubmit = async (formData : FormData) => {
  //   setTitle("");
  //   setDesc("");
  //   setmarks("");
  //   const data: assignment = (await addAssignment(formData)) as assignment;
  //   if(data) {
  //     toast.success("Class added successfully");
  //   }
  // }
  async function handleSubmit(formData: FormData) {
    try {
      await addAssignment(formData);
      toast.success("Assignment added successfully");
      formRef.current?.reset();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <form method="post" action={handleSubmit} ref={formRef}>
        <div className="p-5">
          <div className="p-3">
            <p> Enter Title : </p>
            <input
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              // onChange={(e) => setTitle(e.target.value)}
              name="topic"
            ></input>
            <p> Enter description : </p>
            <input
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              //onChange={(e) => setDesc(e.target.value)}
              name="description"
            ></input>
            <p> Enter marks: </p>
            <input
              className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
              type="text"
              //onChange={(e) => setmarks(e.target.value)}
              name="marks"
            ></input>
          </div>

          <input
            name="imageurl"
            className="hidden"
            value={imageUrl}
            type="text"
          ></input>
          <input
            className="hidden"
            name="courseId"
            type="text"
            value={props.courseId}
          ></input>
          <p>Choose File : </p>
          <div className="flex justify-start ">
            <UploadButton
              className="ut-button:bg-neutral-800 justify-start"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageUrl(res[0].url);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                //   alert(`ERROR! ${error.message}`);
              }}
            />
          </div>

          {imageUrl.length ? (
            <div>
              <iframe src={imageUrl} height={100} width={200}></iframe>{" "}
            </div>
          ) : null}

          <div>
            <p> Enter Date :</p>
            <div className="flex">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-neutral-800 hover:bg-black"
                  >
                    <CalendarCheck color="white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Select Due</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center items-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border shadow"
                    />
                  </div>
                  <Input
                    className="border-1 border-black"
                    name="time"
                    value={time}
                    placeholder="Enter Time (eg: 12:00 PM)"
                    onChange={(e) => setTime(e.target.value)}
                  ></Input>
                  <p className="justify-between">
                    You set the due as :{time} {formatDate(date as Date, "PP")}
                  </p>
                  <DialogFooter>
                    <Button>Set Due</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <input
                className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
                type="text"
                name="duedate"
                value={combinedValue}
                // value={formatDate(date as Date, "PP")}
              ></input>
            </div>
          </div>

          <button
            type="submit"
            className="rounded-full py-2 px-3 bg-neutral-800 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  console.log(date);
}
