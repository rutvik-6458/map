import { Button } from '@/components/ui/button'
import { DATA } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import HeroImage from '@/assets/hero-main.avif'

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70 z-10" />
                <Image
                    src={HeroImage}
                    alt="The Bungalow Cafe Ambience"
                    fill
                    priority
                    className="object-cover opacity-80 scale-105 animate-slow-zoom"
                />
            </div>

            <div className="container relative z-20 text-center px-4 space-y-8 max-w-5xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {DATA.content_blocks.hero_headline_options[0]}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {DATA.content_blocks.hero_subheadline_options[0]}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                    <Button size="lg" className="w-full sm:w-auto text-xl px-10 h-16 rounded-full shadow-2xl hover:scale-105 transition-all">
                        View Menu <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-xl px-10 h-16 rounded-full bg-white/10 border-white/40 hover:bg-white/20 text-white backdrop-blur-md transition-all">
                        {DATA.content_blocks.cta_options[2]}
                    </Button>
                </div>
            </div>
        </section>
    )
}
