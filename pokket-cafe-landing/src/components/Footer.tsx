import { businessData } from "../data";
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappNumber = businessData.contact.phone.replace(/\s+/g, '');

  return (
    <footer className="bg-foreground text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold font-playfair mb-6 text-primary">{businessData.brand.business_name}</h3>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              {businessData.content_blocks.about_paragraph}
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase text-white/90">Quick Links</h4>
            <ul className="space-y-4">
              {["Features", "Menu", "Reviews", "Gallery", "FAQ", "Location"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase text-white/90">Visit Us</h4>
            <address className="text-white/60 not-italic space-y-4 leading-relaxed">
              <p>{businessData.contact.address}</p>
              <p className="font-bold text-white pt-2">{businessData.contact.phone}</p>
              <p>{businessData.contact.hours}</p>
            </address>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {businessData.brand.business_name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

