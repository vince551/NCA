import type { Metadata } from "next";
import "./globals.css";
import InstallPWA from "./InstallPWA";

export const metadata: Metadata = {
  title: "KCA — Kenya Children Assembly",
  description: "The digital chamber for Kenya's children: representation, Assembly business, leadership, sessions, rights and participation.",
  applicationName: "KCA — Kenya Children Assembly",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <body className="antialiased">
        {children}
        <InstallPWA />
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(()=>{}));}` }} />
      </body>
    </html>
  );
}
