export default function Location() {
    return (
        <section id="location" className="py-20 bg-background">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold">Visit Us</h2>
                    <p className="text-lg text-muted-foreground">
                        We are located at the International Finance Center on VIP Road.
                        The perfect spot for your next coffee break or late-night hangout.
                    </p>

                    <div className="space-y-2">
                        <h3 className="font-bold text-xl">Address</h3>
                        <p className="text-muted-foreground">
                            Cafe White Eye, International Finance Center,<br />
                            206, VIP Rd, Vesu, Surat, Gujarat 395007
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-xl">Hours</h3>
                        <p className="text-muted-foreground">
                            Open daily<br />
                            Closes at 1 am
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-xl">Contact</h3>
                        <p className="text-muted-foreground font-mono">063563 53531</p>
                    </div>
                </div>

                <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100">
                    <iframe
                        src="https://maps.google.com/maps?q=Cafe+White+Eye+International+Finance+Center+Vesu+Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
