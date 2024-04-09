"use client";

import { signIn } from "next-auth/react";
import * as React from "react";
import { GraduationCap, Chrome } from "lucide-react";
import Image from "next/image";

const UserAuthForm = () => {
  const loginWithGoogle = async () => {
    try {
      await signIn("google", { callbackUrl: "/dash" });
    } catch (error) {
      console.log(error);
    }
  };
  // const loginWithGitHub = async () => {
  //   try {
  //     await signIn("github", { callbackUrl: "/dashboard" });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <button
        type="button"
        className="bg-blue-600 text-white py-2 flex rounded-lg hover:bg-blue-500 px-3"
        onClick={loginWithGoogle}
      >
        {/* <Image
          className=""
          alt="Chrome Icon"
          src="/chrome.jpg"
          width={20}
          height={20}
        /> */}
        <div className="px-2">
          <Chrome />
        </div>
        <p className="font-semibold">Sign in with Google</p>
      </button>
      {/* <button
        type="button"
        className="bg-gray-800 text-white py-2 flex rounded-lg hover:bg-gray-900"
        onClick={loginWithGitHub}
      >
        <Github />
        Sign in with GitHub
      </button> */}
    </div>
  );
};

export default UserAuthForm;
