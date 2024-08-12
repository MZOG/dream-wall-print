import type {Metadata} from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster"

import dynamic from "next/dynamic";
import CookieBanner from "@/components/cookie-banner";

import ogImage from "../../public/open-graph.jpg"
import React from "react";

const DynamicHeader = dynamic(() => import("@/components/common/header"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import("@/components/common/footer"), {
  loading: () => <p>Loading...</p>,
})

const inter = Inter({subsets: ["latin"]});

const evermore = localFont({
  src: '../../public/fonts/evermore.otf',
  display: 'swap',
  variable: '--font-evermore',
})

export const metadata: Metadata = {
  title: {
    template: "%s - DREAM Wall Print",
    default: "DREAM Wall Print",
  },
  description: "Dream Wall Print is ready to transform your walls into works of art. Let us create unforgettable interiors for you!",
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      }
    ]
  }
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${evermore.variable}`}>
    <DynamicHeader/>
    <main>{children}</main>
    <DynamicFooter/>
    <CookieBanner/>
    <Toaster/>
    </body>
    </html>
  );
}
