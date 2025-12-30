import { DATA } from '@/lib/data'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Location() {
    const addressParam = encodeURIComponent(`${DATA.brand.business_name}, ${DATA.contact.address}`);
    const mapUrl = DATA.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${addressParam}`;
    const embedUrl = `https://maps.google.com/maps?q=${addressParam}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="py-12 sm:py-16 md:py-20 bg-slate-900 text-white">
            <div className="container px-4 sm:px-6 mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="space-y-6 sm:space-y-7 md:space-y-8 order-2 md:order-1">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 sm:mb-5 md:mb-6">
                            Visit Us
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-7 md:mb-8 max-w-md">
                            Come experience the best rooftop vibe in Vesu with us.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-7 md:space-y-8">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary shrink-0">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base sm:text-lg mb-1">Address</h3>
                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{DATA.contact.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary shrink-0">
                                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base sm:text-lg mb-1">Opening Hours</h3>
                                <p className="text-sm sm:text-base text-slate-300">{DATA.contact.hours}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2.5 sm:p-3 bg-primary/20 rounded-full text-primary shrink-0">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-base sm:text-lg mb-1">Contact</h3>
                                <p className="text-sm sm:text-base text-slate-300">{DATA.contact.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 sm:pt-5 md:pt-6">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white text-sm sm:text-base"
                            asChild
                        >
                            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Get Directions
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-slate-800 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden relative order-1 md:order-2 shadow-2xl border border-slate-700">
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                        className="grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    )
}
