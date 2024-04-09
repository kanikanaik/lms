import UserAuthForm from "@/app/components/UserAuthForm";
import Image from "next/image";
import { GraduationCap, Github, Chrome, User } from "lucide-react";
export default function signIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <title>Login Page</title>
      <div className="max-w-md px-10 py-8 bg-black text-white shadow-lg rounded-lg">
        <h1 className="flex gap-2 font-bold text-lg">
          <p className="mb-2">
            <Image
              className=""
              alt="Icon"
              src="/gradcap.png"
              width={55}
              height={55}
            />
          </p>
          <p>L E A R N L Y</p>
        </h1>
        <div className="justify-between">
          <p className="font-semibold text-base pt-5 justify-self-center px-10">
            Let's get Started !
          </p>
          <p className="text-xs font-medium pb-5">
            Sign Up and get started with learnly
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
