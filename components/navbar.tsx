"use client";

import Link from "next/link";
import mployee from "../public/image.webp";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={mployee} alt="" width={200} height={100} />
        </Link>
      </div>
    </nav>
  );
}
