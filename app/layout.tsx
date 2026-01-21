import React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { LandingHeader } from "@/features/landing-page/components/header";

const fontSans = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The CodeVerse Hub",
  description:
    "A community-driven platform for developers to collaborate, learn, and build appropriate software together.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LandingHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
