import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Virtual Internship & Skill Development Programs`,
  description:
    "SkyTech Digital Labs offers structured virtual internship programs focused on technology skill development and real project experience.",
  keywords: ["virtual internship", "skill development", "technology internship", "AI internship", "data science internship", "web development internship", "SkyTech Digital Labs"],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} | Virtual Internship & Skill Development Programs`,
    description: "SkyTech Digital Labs offers structured virtual internship programs focused on technology skill development and real project experience.",
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

