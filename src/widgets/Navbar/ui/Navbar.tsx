"use client"

import Link from "next/link"

import { QuickAddMenu } from "@/feature"
import { LINKS } from "@/shared/constants/links"

export const Navbar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 justify-center w-full rounded-t-2xl bg-zinc-900">
      {LINKS.slice(0, 2).map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="flex justify-center text-white align-middle h-12 p-2"
        >
          {link.icon}
        </Link>
      ))}

      <div className="flex justify-center -translate-y-2">
        <QuickAddMenu />
      </div>

      {LINKS.slice(2).map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="flex justify-center text-white align-middle h-12 p-2"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
