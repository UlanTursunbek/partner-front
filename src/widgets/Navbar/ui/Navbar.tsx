"use client"

import { Fragment } from "react"
import Link from "next/link"

import { LINKS } from "@/shared/constants/links"

export const Navbar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 justify-center w-full rounded-t-2xl bg-zinc-900 p-5">
      {LINKS.slice(0, 2).map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="flex justify-center text-white align-middle h-9"
        >
          {link.icon}
        </Link>
      ))}

      <div className="bg-yellow-400">23</div>

      {LINKS.slice(2).map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="flex justify-center text-white align-middle h-9"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
