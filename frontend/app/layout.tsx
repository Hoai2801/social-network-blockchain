import { ThemeProvider } from "@/components/theme/theme-context";
import AppWalletProvider from "@/components/ui/app-wallet-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import { Toaster } from "sonner";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome CSS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SecMarket-ing",
  description:
    "We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-100 antialiased`}
      >
        <ThemeProvider>
          <AppWalletProvider>
            <div className="relative">
              {/* sticky not working */}
              <Navbar />
              <Toaster richColors closeButton position="top-right" />
              <div className={`py-[66px]`}>
                <TooltipProvider>{children}</TooltipProvider>
              </div>
              <Footer />
            </div>
          </AppWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
