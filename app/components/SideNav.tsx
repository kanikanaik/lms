"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignOut from "../components/Sign-Out";
import { Andika } from "next/font/google";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "../utils/links";

const andika = Andika({ weight: ["400"], style: "normal", subsets: ["latin"] });

export default function SideNav() {
  const session = useSession();
  const user = session.data?.user.name;
  const imgUrl = session.data?.user.image as string;
  const pathname = usePathname();
  return (
    <div className={andika.className}>
      <aside className="fixed min-h-screen bg-neutral-950 text-white w-44 flex">
        <div className="flex flex-col justify-between items-center">
          <div className="flex gap-2 px-3 py-5">
            <Image
              className="top-4"
              src="/gradcap.png"
              alt="graduation cap icon"
              height={35}
              width={35}
            />
            <p className="font-bold text-base text-white">L E A R N L Y</p>
          </div>
          <div className="text-xs font-semibold text-white w-full flex flex-col justify-between items-center mb-6">
            <ul className="flex flex-col justify-between items-center gap-[1.75rem]">
              {links.map((link, index) => (
                <li key={index} className="rounded-md flex w-full">
                  <Link
                    className={clsx(
                      "flex gap-2 w-full rounded-xl p-2 hover:bg-gray-50 hover:text-neutral-900 transition-all duration-300 ease-in-out",
                      {
                        "bg-gray-50 text-neutral-900": pathname === link.href,
                      },
                    )}
                    href={link.href}
                  >
                    <link.icon size={19} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-neutral-800 rounded-md justify-center items-center p-4 gap-2">
            <div className="flex gap-2 flex-col">
              <div className="flex flex-row gap-2">
                <Image
                  width={30}
                  height={30}
                  src={imgUrl}
                  alt="profile picture"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm">{user}</p>
              </div>
            </div>
            <SignOut />
          </div>
        </div>
      </aside>
    </div>
  );
}
