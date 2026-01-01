"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
    const phoneNumber = "08469520030"; // From JSON

    if (!phoneNumber) return null;

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hello! I'm interested in ordering a designer cake from Shades On Cake.");
        window.open(`https://wa.me/91${phoneNumber.replace(/\s+/g, '')}?text=${message}`, "_blank");
    };

    return (
        <button
            onClick={handleWhatsApp}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={28} fill="currentColor" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppCTA;
