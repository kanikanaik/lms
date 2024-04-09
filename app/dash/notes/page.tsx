import { FolderArchive, FolderPlus, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-24 py-6">
      <div className="">
        <p className="font-bold text-lg p-3">Notes</p>
        <hr></hr>
        <div className="bg-white rounded-md p-3 px-5">
          <p className="font-bold p-3"> Recent Folder </p>
          <div className="flex gap-3">
            <div className="bg-neutral-950 text-white p-3 w-52 rounded-md flex flex-col justify-between items-center">
              <div className="flex flex-row justify-end items-center w-full">
                <MoreHorizontal />
              </div>
              <div className="flex flex-row gap-3">
                <FolderArchive />
                <p className="font-semibold">DS Notes</p>
              </div>
            </div>
            <div className="bg-neutral-950 text-white p-3 w-52 rounded-md flex flex-col justify-between items-center">
              <Link href={"notes/new"}>
                <div className="flex flex-row justify-end items-center w-full">
                  <MoreHorizontal />
                </div>
                <div className="flex flex-row gap-3">
                  <FolderArchive />
                  <p className="font-semibold">Add Notes</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
