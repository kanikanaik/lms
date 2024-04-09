"use client";
import React, { useState } from "react";
import { UploadButton, UploadDropzone } from "@/app/utils/uploadthing";
import Image from "next/image";
import { Button } from "../ui/button";
import { addSubmission } from "@/app/action";
export default function SUploadAssignment(props: { assignmentId: string }) {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div>
      <form
        method="post"
        action={addSubmission}
        className="flex justify-center items-center flex-col"
      >
        <UploadDropzone
          className="ut-button:bg-neutral-800 justify-items-end"
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
        {imageUrl.length ? (
          <div>
            <iframe src={imageUrl} height={100} width={200}></iframe>{" "}
          </div>
        ) : null}
        <input
          className="hidden"
          name="uploaded_assign"
          value={imageUrl}
        ></input>
        <input
          className="hidden"
          name="assignmentId"
          value={props.assignmentId}
        ></input>
        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
