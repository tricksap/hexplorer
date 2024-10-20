import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HexPlorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="backgroundImage">{children}</body>
    </html>
  );
}
