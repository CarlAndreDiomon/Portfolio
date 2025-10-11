import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { json } from "stream/consumers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carl Andre R. Diomon",
  description: " Furute Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">

          {
            "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Carl Andre R. Diomon",
          "url": "https://www.carlandrediomon.me",
          "image": "/images/me.png",
          "jobTitle": "Aspiring Software Engineer"
          }

        </script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiase  `}
      >
        {children}
      </body>
    </html>
  );
}
