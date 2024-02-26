import { Inter } from "next/font/google"

import { Navbar } from "@/widgets"

const inter = Inter({ subsets: ["latin"] })

import type { Metadata } from "next"

import "./globals.css"
export const metadata: Metadata = {
  title: "Partner",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-dvh max-w-md mx-auto bg-gray-500">
          {children}

          <div className="absolute bottom-0 max-w-md w-full">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  )
}
