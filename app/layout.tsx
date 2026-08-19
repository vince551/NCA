import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KCA — Kenya Children Assembly",
  description: "The digital chamber for Kenya's children: representation, Assembly business, leadership, sessions, rights and participation.",
  applicationName: "KCA — Kenya Children Assembly",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body className="antialiased">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}` }} />
      </body>
    </html>
  );
}
