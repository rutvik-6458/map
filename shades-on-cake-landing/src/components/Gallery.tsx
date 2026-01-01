"use client";

const images = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1000&auto=format&fit=crop",
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-16 md:py-24 px-4 bg-[#F1E9E2]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-[#2D241E] mb-4 md:mb-6">
                            A Glimpse of our <span className="text-[#DB2777]">Designer Cakes</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-[#6B5E55]">
                            Browse through our recent creations. Each cake is handcrafted with attention to detail and a passion for perfection.
                        </p>
                    </div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        className="bg-white text-[#2D241E] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-center gap-2 text-sm md:text-base shrink-0"
                    >
                        Follow us on Instagram
                    </a>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                    {images.map((img, i) => (
                        <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-lg">
                            <img
                                src={img}
                                alt={`Designer Cake ${i + 1}`}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                                <p className="text-white font-bold text-base md:text-lg">Designer Series</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] text-center border border-[#F1E9E2] shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#2D241E] mb-4">Have a specific design in mind?</h3>
                    <p className="text-[#6B5E55] text-base md:text-lg mb-8 max-w-2xl mx-auto">
                        We love bringing your ideas to life. Contact us to discuss your custom design and flavour preferences.
                    </p>
                    <a
                        href="tel:08469520030"
                        className="inline-flex items-center gap-2 bg-[#DB2777] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-[#BE185D] transition-all shadow-xl hover:shadow-[#DB2777]/30"
                    >
                        Request Custom Design
                    </a>
                </div>
            </div>
        </section>
    );
};


export default Gallery;
