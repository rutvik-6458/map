"use client";

const images = [
    "/assets/r49a-dishes-Livestream-Coffee-Vesu-2025-09-5.jpg",
    "/assets/Vietnamese-Coffee-756x471.avif",
    "/assets/red-velvet-cheesecake-801717242-0e7to17i.avif",
    "/assets/images.jfif",
    "/assets/sasa.jfif",
    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-10 md:space-y-12">
                <div className="text-center space-y-3 sm:space-y-4">
                    <h2 className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Ambience</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black italic px-4">Visual Experience</h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2.5rem] lg:rounded-[3rem] bg-stone-100 transition-all",
                                i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                            )}
                        >
                            <img
                                src={src}
                                alt="Cafe Gallery"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6 md:p-8">
                                <span className="text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs">@livestreamcoffee</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
