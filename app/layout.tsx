import type { Metadata } from "next";
import { neueRegrade, regonia } from "./_components/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  creator: "Mariann Zászlós",
  title: {
    template: "Mariann Zászlós Portfolio 2025 | %s",
    default: "Mariann Zászlós Portfolio 2025",
  },
  description: "Photography and video projects created by Mariann Zászlós",
  keywords: ["Content Creator", "Social Media", "Video", "Photo", "Audiovisual", "Photographer", "Videographer"],
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
