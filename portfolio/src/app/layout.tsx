import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { defaultMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import WebVitalsReporter from "@/components/web-vitals-reporter";
import { PRECONNECT_DOMAINS } from "@/lib/performance";
import ServiceWorkerRegistration from "@/components/service-worker-registration";

// Optimize font loading with display swap
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
      <head>
        {/* Add preconnect for external domains */}
        {PRECONNECT_DOMAINS.map(domain => (
          <link key={domain} rel="preconnect" href={`https://${domain}`} crossOrigin="anonymous" />
        ))}
        
        {/* Disable non-critical CSS during initial load */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}} />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/images/profile.webp" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
        <WebVitalsReporter />
        <ServiceWorkerRegistration />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}