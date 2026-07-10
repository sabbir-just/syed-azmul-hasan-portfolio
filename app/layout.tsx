import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile, seoKeywords } from "@/lib/data";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syedazmulhasan.dev"),
  title: `${profile.name} | AI/ML Researcher & Data Analyst`,
  description: profile.tagline,
  keywords: seoKeywords,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | AI/ML Researcher & Data Analyst`,
    description: profile.tagline,
    url: "https://syedazmulhasan.dev",
    siteName: profile.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI/ML Researcher & Data Analyst`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    sameAs: [profile.linkedin, profile.github],
    jobTitle: "AI/ML Researcher & Data Analyst",
    description: profile.tagline,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} ${jbmono.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
