import { businessData } from "../data";
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  const phoneNumber = businessData.contact.phone;
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';

  return (
    <footer className="bg-foreground text-white py-12 sm:py-16 md:py-20 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair mb-4 sm:mb-6 text-primary">{businessData.brand.business_name}</h3>
            <p className="text-sm sm:text-base text-white/60 max-w-sm mb-6 sm:mb-8 leading-relaxed">
              {businessData.content_blocks.about_paragraph}
            </p>
            <div className="flex gap-3 sm:gap-4">
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              )}
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg tracking-wide uppercase text-white/90">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {["Features", "Menu", "Reviews", "Gallery", "FAQ", "Location"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm sm:text-base text-white/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg tracking-wide uppercase text-white/90">Visit Us</h4>
            <address className="text-sm sm:text-base text-white/60 not-italic space-y-3 sm:space-y-4 leading-relaxed">
              <p>{businessData.contact.address}</p>
              {phoneNumber && <p className="font-bold text-white pt-2">{phoneNumber}</p>}
              <p>{businessData.contact.hours}</p>
            </address>
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/40">
          <p>© {new Date().getFullYear()} {businessData.brand.business_name}. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


