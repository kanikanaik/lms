import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import UserAuthForm from "./components/UserAuthForm";
export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <div className="flex bg-blue-500 text-xs font-bold underline text-white justify-center h-7 p-1">
        Discover Learnly, A classroom Management which anhaces your learning.{" "}
      </div>
      <div className="px-28 py-5 bg-zinc-950 text-white flex flex-row justify-between">
        <h1 className="flex gap-2 font-bold text-lg flex-row">
          <Image
            className=""
            alt="Icon"
            src="/gradcap.png"
            width={55}
            height={55}
          />
          <p className="mt-2">L E A R N L Y</p>
        </h1>
        <div className="flex flex-row justify-center items-center gap-6 py-3">
          <p>Contact Us</p>
          {/* <Dialog> */}
          {/*   <DialogTrigger asChild> */}
          {/*     <Button className="bg-blue-500 py-1 px-5 rounded-full"> */}
          {/*       Get Started */}
          {/*     </Button> */}
          {/*   </DialogTrigger> */}
          {/*   <DialogContent className="sm:max-w-[425px] bg-black text-white"> */}
          {/*     <DialogHeader> */}
          {/*       <DialogTitle>Sign-in/Login</DialogTitle> */}
          {/*       <DialogDescription> */}
          {/*         <div className="flex items-center justify-center"> */}
          {/*           <title>Login Page</title> */}
          {/*           <div className="max-w-md px-10 py-8 bg-black text-white shadow-lg rounded-lg"> */}
          {/*             <h1 className="flex gap-2 font-bold text-lg"> */}
          {/*               <p className="mb-2"> */}
          {/*                 <Image */}
          {/*                   className="" */}
          {/*                   alt="Icon" */}
          {/*                   src="/gradcap.png" */}
          {/*                   width={55} */}
          {/*                   height={55} */}
          {/*                 /> */}
          {/*               </p> */}
          {/*               <p>L E A R N L Y</p> */}
          {/*             </h1> */}
          {/*             <div className="justify-between"> */}
          {/*               <p className="font-semibold text-base pt-5 justify-self-center px-10"> */}
          {/*                 {" "} */}
          {/*                 Let's get Started ! */}
          {/*               </p> */}
          {/*               <p className="text-xs font-medium pb-5"> */}
          {/*                 Sign Up and get started with learnly */}
          {/*               </p> */}
          {/*             </div> */}
          {/*             <div className="flex flex-col space-y-4"> */}
          {/*               <UserAuthForm /> */}
          {/*             </div> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </DialogDescription> */}
          {/*     </DialogHeader> */}
          {/*     <div className="grid gap-4 py-4"></div> */}
          {/*   </DialogContent> */}
          {/* </Dialog> */}
          <Link href="/sign-in">
            <button className="bg-blue-500 py-2 px-5 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="p-28 text-white">
          <p className="text-4xl  font-semibold">
            Welcome to Learnly! <br></br>an elearning platform for all students
            & teachers
          </p>
          <p className="p-3">
            Empower your learning journey with Learnly your one-stop destination
            for interactive and engaging education.
          </p>
          <div className="flex flex-row gap-4 py-3">
            <Link href="/sign-in">
              <button className="bg-blue-500 py-2 px-5 rounded-full">
                Get Started
              </button>
            </Link>
            <button className="bg-blue-500 py-2 px-5 rounded-full">
              Join Now
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/class.png"
            height={600}
            width={600}
            alt="Classroom Image"
          />
        </div>
      </div>
      <div className="text-white text-sm justify-center item-center flex px-64">
        <p> LEARN MORE</p>
        <ChevronDown />
      </div>
      <div className="grid grid-cols-2 py-14">
        <div className="p-28 ">
          <p className="text-lg font-bold">
            Join, Create, Collaborate and Text
          </p>
          <p>
            Empower your learning journey with Learnly your one-stop destination
            for interactive and engaging education.Learnly provides a seamless
            platform for collaboration, exploration, and growth.
          </p>
        </div>
        <div>
          <Image src="/class2.png" height={500} width={600} alt="asffs" />
        </div>
      </div>
    </main>
  );
}
