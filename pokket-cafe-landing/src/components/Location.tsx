import { businessData } from "../data";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
  const whatsappNumber = businessData.contact.phone.replace(/\s+/g, '');
  
  // Direct Google Maps link for directions
  const directionsLink = "https://maps.app.goo.gl/uDcWdmok6FTJ73g6A";

  // Generate Google Maps embed URL with place name for better pin visibility
  // Using the place name format to show detailed map with location pin (like the first image)
  const placeQuery = "Pokket Cafe Atria, G-10, B Wing, SNS Atria, Opp. Jolly Party Plot, Besides Happy Exclencia, Maharana Pratap Rd, Vesu, Surat, Gujarat 395007";
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&output=embed`;

  return (
    <section id="location" className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-secondary/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 sm:mb-8">Find Us in Vesu</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Our Address</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {businessData.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Opening Hours</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {businessData.contact.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-border/50">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Contact Phone</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {businessData.contact.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base w-full sm:w-auto" asChild>
                  <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Get Directions
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base bg-white w-full sm:w-auto" asChild>
                  <a href={`tel:${whatsappNumber}`}>
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white relative group mt-8 lg:mt-0">
              <iframe
                src={mapsEmbedUrl}
                className="w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

