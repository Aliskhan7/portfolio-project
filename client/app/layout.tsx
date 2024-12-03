import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliskhan's portfolio",
  description: "AG",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider>{children}</MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
