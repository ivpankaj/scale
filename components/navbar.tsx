"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 flex justify-center text-center z-50 p-4 w-full shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/">
          <div className="flex justify-center">
            <Image
              src="https://s3.ap-south-1.amazonaws.com/mployee.me/website/Mployee+logo.png"
              alt="Mployee Logo"
              width={200}
              height={100}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
