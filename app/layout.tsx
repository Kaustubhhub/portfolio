import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Yesteryear } from '@next/font/google';
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Kaustubh -Full-stack developer",
  description: "Kaustubh -Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics/>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>

    </html>
  );
}
