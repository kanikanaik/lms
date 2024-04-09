import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src={"/chat.svg"}
        alt="chat"
        height={500}
        width={500}
        className="ml-[300px]"
      />
    </div>
  );
}

export default Page;
