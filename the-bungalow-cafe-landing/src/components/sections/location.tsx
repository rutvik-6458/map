import { DATA } from '@/lib/data'
import { MapPin, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Location() {
    const addressParam = encodeURIComponent(`${DATA.brand.business_name}, ${DATA.contact.address}`);
    const mapUrl = DATA.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${addressParam}`;
    const embedUrl = `https://maps.google.com/maps?q=${addressParam}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="py-20 bg-slate-900 text-white">
            <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 order-2 md:order-1">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-6">Visit Us</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-md">
                            Come experience the best rooftop vibe in Vesu with us.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Address</h3>
                                <p className="text-slate-300 leading-relaxed max-w-xs">{DATA.contact.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                                <p className="text-slate-300">{DATA.contact.hours}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Contact</h3>
                                <p className="text-slate-300">{DATA.contact.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button size="lg" className="w-full sm:w-auto text-lg h-12" asChild>
                            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                                Get Directions
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="h-[450px] bg-slate-800 rounded-3xl overflow-hidden relative order-1 md:order-2 shadow-2xl skew-y-1 border border-slate-700">
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
