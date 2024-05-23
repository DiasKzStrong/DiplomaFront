import type { Metadata } from "next";
import { PT_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/pages/main/Header";
import ReduxProvider from "@/components/providers/ReduxProvider";

const jmono = PT_Mono({ subsets: ["cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "Spell KZ",
  description: "Spell checker for kazakh language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth">
      <body className={jmono.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
