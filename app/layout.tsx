import type { Metadata } from "next";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
} from '@clerk/nextjs'
// import { auth } from "@clerk/nextjs/server";

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: "Imagify",
  description: "Generated and edit images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // auth().protect()
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn('font-IBMPlex antialised', IBMPlex.variable)}
        >
          {children}
        </body>
      </html>
    </ ClerkProvider>
  );
}
