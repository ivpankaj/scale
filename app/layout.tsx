import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import 'flag-icon-css/css/flag-icons.min.css';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Job Search Plan by Mployee.me",
  description: "Elevate your job search with our expert guidance. We provide customized job recommendations that match your resume, helping you secure your dream position.",
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

