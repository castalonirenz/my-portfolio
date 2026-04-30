import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Dashboard | Full Stack Developer",
  description: "Showcase of my projects and skills. Built with Next.js, React, and Tailwind CSS.",
  keywords: ["portfolio", "developer", "full stack", "next.js", "react"],
  author: "Your Name",
  openGraph: {
    title: "Portfolio Dashboard",
    description: "Full Stack Developer Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
