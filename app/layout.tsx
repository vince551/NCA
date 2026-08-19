import type { Metadata } from "next";
import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenya Children Assembly | NCA",
  description: "The digital chamber for Kenya's children: representation, Assembly business, leadership, sessions, rights and participation.",
  applicationName: "Kenya Children Assembly",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/nca-emblem.svg", apple: "/nca-emblem.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" className={GeistSans.variable}>
      <body className="antialiased">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}` }} />
      </body>
    </html>
  );
}
