import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idhant Ranjan",
  description: "Personal site of Idhant Ranjan",
  icons: { icon: "data:," },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
