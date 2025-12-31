import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export default function Hero() {
    return (
        <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-zinc-900 text-white pt-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')"
                    }}
                />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8 space-y-8 animate-in fade-in zoom-in duration-1000">
                <div className="space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-rose-500/50 bg-rose-500/20 text-rose-200 text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                        Vesu, Surat
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-lg">
                        Celebrate Moments <br className="hidden md:block" /> That Matter
                    </h1>
                    <p className="text-xl sm:text-2xl text-zinc-100 max-w-2xl mx-auto font-light drop-shadow-md">
                        A cozy cafe in Vesu known for celebrations and couple-friendly vibes.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a href="#location" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
                        Plan a Celebration <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Jerry+Cafe+Vesu+Surat" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" /> Get Directions
                    </a>
                </div>
            </div>
        </section>
    )
}
