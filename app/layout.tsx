import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erik Anderson",
  description: "Erik Anderson's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceCodePro.className}>{children}</body>
    </html>
  );
}
