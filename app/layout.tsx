import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import 'flag-icon-css/css/flag-icons.min.css';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Social Tag India - One Stop Solution for Influencer Marketing",
  description: "We help brands with Strategy Led Influencer Marketing Campaigns",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

