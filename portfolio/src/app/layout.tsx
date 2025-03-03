import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { defaultMetadata } from "@/lib/metadata";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}