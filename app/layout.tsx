import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextLayout, NextProvider } from "./provider";
import { chdir } from "process";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "honey sleep",
  description: "honey sleep으로 가장 좋은 조건으로 숙소를 예약해보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
