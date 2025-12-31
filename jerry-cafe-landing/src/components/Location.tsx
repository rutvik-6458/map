import { MapPin, Clock } from 'lucide-react'

export default function Location() {
    return (
        <section id="location" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Visit Us</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                                    <p className="text-muted-foreground">
                                        Near Chai Bike, Ward 2, Vesu, Surat, Gujarat 395007
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                                    <p className="text-muted-foreground">
                                        Open Daily: 11:00 AM – 11:00 PM <span className="text-xs text-muted-foreground/60">(Confirmed by Business)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Jerry+Cafe+Vesu+Surat"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>

                    <div className="h-[400px] w-full bg-secondary/30 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?q=Jerry%20Cafe%20Vesu%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Jerry Cafe Location"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
