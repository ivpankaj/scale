"use client"

import { Menu } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-social-pink text-2xl font-bold">
          social tag
        </Link>
        <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}

