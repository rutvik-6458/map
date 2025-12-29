import { businessData } from "../data";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
  // Generate Google Maps embed URL for International Finance Centre, Vesu
  // This centers the map on IFC as shown in the reference image
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent("International Finance Centre, VIP Rd, Vesu, Surat, Gujarat 395007")}&output=embed`;

  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-secondary/20 rounded-[3rem] p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8">Find Us in Vesu</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {businessData.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {businessData.contact.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contact Phone</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {businessData.contact.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8 h-14" asChild>
                  <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-5 w-5" /> Get Directions
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 bg-white" asChild>
                  <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
                <iframe
                    src={mapsEmbedUrl}
                    className="w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






