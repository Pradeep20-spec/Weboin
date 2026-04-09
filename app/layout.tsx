import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weboin Technologies | Creative Digital Agency",
  description:
    "Weboin Technologies delivers UI/UX design, web development, branding, and digital marketing for modern brands.",
  keywords: [
    "design agency",
    "ui ux design",
    "web development",
    "branding",
    "digital marketing",
  ],
  openGraph: {
    title: "Weboin Technologies | Creative Digital Agency",
    description:
      "Explore our services, portfolio, and contact options for your next digital product.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
