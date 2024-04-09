import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main className="flex flex-col px-24 py-10 ">
      <div className="px-2">
        <p className="font-bold  text-lg">Dashboard</p>
        <button className=""></button>
      </div>
      <hr></hr>
      <div className="grid place-items-center py-44">
        <p className="text-4xl font-medium">Get Started with Learnly</p>

        <p className="text-sm justify-items-center">
          Start with creating or joining a classroom to start with your learning
          jounrey.
        </p>
        <div className="justify-between p-5 space-x-7">
          <Link href="/dash/joincreate">
            <button className="border-neutral-900 border-2 rounded-full px-3 py-2 text-neutral-900">
              Join Class
            </button>
          </Link>
          <Link href="/dash/joincreate">
            <button className="bg-neutral-900 border-2 rounded-full px-3 py-2 text-white">
              Create Class
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
