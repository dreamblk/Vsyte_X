import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VSYTE | Visual Insight in Seconds",
  description:
    "VSYTE creates 3D animation, video production, and web platforms for medical and technical communication."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
