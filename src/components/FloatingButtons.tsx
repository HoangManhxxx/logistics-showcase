import { Phone, MessageCircle } from "lucide-react";
import {PHONE_NUMBER} from "@/constants/InformationConsts.ts";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0974819846"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn w-14 h-14 bg-[#0068FF] text-primary-foreground hover:scale-110"
        title="Chat Zalo"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:0974819846"
        className="floating-btn w-14 h-14 bg-accent text-accent-foreground animate-pulse-slow"
        title="Gọi ngay"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Hotline Badge */}
      <div className="fixed bottom-6 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hidden md:flex items-center gap-2">
        <Phone className="w-4 h-4 animate-pulse" />
        <span className="font-semibold text-sm">HOTLINE: {PHONE_NUMBER}</span>
      </div>
    </div>
  );
};

export default FloatingButtons;
