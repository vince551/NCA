"use client";

import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallPWA() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const onInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setInstallEvent(event);
      setVisible(true);
    };

    const onInstalled = () => {
      setInstalled(true);
      setVisible(false);
      setInstallEvent(null);
    };

    window.addEventListener("beforeinstallprompt", onInstallPrompt);
    window.addEventListener("appinstalled", onInstalled);

    if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as Navigator & { standalone?: boolean }).standalone) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed || !visible || !installEvent) return null;

  const install = async () => {
    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    if (choice.outcome === "accepted") {
      setVisible(false);
    }
    setInstallEvent(null);
  };

  return (
    <div className="fixed bottom-4 left-3 right-3 z-[100] mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-[#07120f]/95 p-3 text-white shadow-2xl shadow-black/40 backdrop-blur-xl sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0">
      <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1">
        <img src="/logo.png" alt="KCA" className="h-full w-full rounded-lg object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-black">Install KCA</p>
        <p className="text-[11px] leading-4 text-white/55">Add the Kenya Children Assembly app to your home screen.</p>
      </div>
      <button onClick={install} className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#d69b25] px-3.5 py-2.5 text-xs font-black text-[#07120f] hover:bg-[#f0cf7b]" aria-label="Install KCA app">
        <Download size={15} /> Install
      </button>
      <button onClick={() => setVisible(false)} className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/45 hover:bg-white/10 hover:text-white" aria-label="Dismiss install prompt">
        <X size={16} />
      </button>
    </div>
  );
}
