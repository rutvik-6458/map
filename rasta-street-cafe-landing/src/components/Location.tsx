"use client";

import { Button } from "@/components/ui/button";
import { Navigation, Phone, MessageCircle } from "lucide-react";

const Location = () => {
  const phoneNumber = "09327639226";
  const telLink = `tel:+91${phoneNumber.replace(/\D/g, "")}`;
  const whatsappLink = `https://wa.me/91${phoneNumber.replace(/\D/g, "")}`;
  const address = "G-47, Ambrosia Business Hub, VIP Rd, Vesu, Surat, Gujarat 395007";

  // Google Maps embed URL (you can replace this with actual coordinates or Google Maps link)
  // Format: https://www.google.com/maps/embed?pb=...
  // For now, using a placeholder that shows the area
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin";

  const handleDirections = () => {
    // If you have a Google Maps link, use it; otherwise, open maps with address
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <section
      id="location"
      className="py-20 px-4 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located at Ambrosia Business Hub on VIP Road, Vesu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-amber-200">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rasta Street Cafe Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-white border-2 border-amber-200 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📍</span> Address
                </h4>
                <p className="text-gray-600 leading-relaxed">{address}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📞</span> Phone
                </h4>
                <a
                  href={telLink}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  {phoneNumber}
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🕐</span> Hours
                </h4>
                <p className="text-gray-600">Opens at 11:30 am</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                onClick={handleDirections}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-amber-600 text-amber-600 hover:bg-amber-50"
                onClick={() => window.open(telLink, "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;







