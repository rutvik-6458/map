import { DATA } from '@/lib/data'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import AboutImage from '@/assets/about.avif'

export default function Features() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                                {DATA.content_blocks.hero_headline_options[1]}
                            </h2>
                            <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-primary rounded-full" />
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                            "{DATA.content_blocks.about_paragraph}"
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                            {DATA.content_blocks.features_bullets.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-colors group">
                                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <span className="font-medium text-sm sm:text-base text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] group animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-primary/5 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] -rotate-1 sm:-rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                        <div className="relative h-full rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src={AboutImage}
                                alt="The Bungalow Cafe Ambience"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Decorative Badge */}
                        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                                <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-xs sm:text-sm md:text-base text-slate-900">Instagram-Worthy</p>
                                    <p className="text-xs text-muted-foreground">Every corner is a vibe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
