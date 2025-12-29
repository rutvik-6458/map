import { businessData } from "../data";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0543788734636!2d72.7711462!3d21.1415065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053d266666667%3A0x6666666666666666!2sKOE+-+The+Kafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






