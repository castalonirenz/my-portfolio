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
  title: "Renz Castaloni Portfolio | Product Designer and Frontend Developer",
  description: "Multi-page portfolio with case studies, testimonials, about, and contact experience.",
  keywords: ["portfolio", "product designer", "frontend developer", "next.js", "tailwind"],
  author: "Renz Castaloni",
  openGraph: {
    title: "Renz Castaloni Portfolio",
    description: "Portfolio website with dashboard, case studies, testimonials, and contact page.",
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
