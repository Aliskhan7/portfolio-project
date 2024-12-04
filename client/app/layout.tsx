import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });
import { Notifications } from "@mantine/notifications";

export const metadata: Metadata = {
  title: "Aliskhan's portfolio",
  description: "AG",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Notifications className=" absolute bottom-10 right-3 bg-amber-50" />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
