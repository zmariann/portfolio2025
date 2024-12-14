import type { Metadata } from "next";
import { neueRegrade, regonia } from "./_components/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariann Zászlós Portfolio 2025",
  description: "Photography and video projects created by Mariann Zászlós",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${neueRegrade.variable} ${regonia.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
