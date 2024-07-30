import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/components/common/header"), {
  loading: () => <p>Loading...</p>,
});

import CookieBanner from "@/components/cookie-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - DREAM Wall Print",
    default: "DREAM Wall Print",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicHeader />
        <main>{children}</main>
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
