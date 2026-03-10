import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Remote Internship Platform`,
  description:
    "SkyTech Digital Labs provides remote internship programs built for practical execution, structured evaluation, and professional skill development.",
  keywords: ["internship", "remote internship", "skill development", "AI internship", "data analytics internship", "SkyTech Digital Labs"],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} | Remote Internship Platform`,
    description: "A structured internship experience focused on practical execution and measurable progress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
