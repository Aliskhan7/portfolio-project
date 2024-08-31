import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliskhan's portfolio",
  description: "AG",
};

export default function RootLayout({ Component, pageProps }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Component {...pageProps} />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
