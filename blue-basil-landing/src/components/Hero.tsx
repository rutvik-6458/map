import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
                        <Star className="w-3 h-3 fill-primary" />
                        Top Rated Family Restaurant
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 mt-2">
                        Blue Basil – A Popular <span className="text-primary tracking-tight">Family Restaurant</span> in Surat
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Enjoy North Indian, Chinese, and more in a relaxed setting. Perfect for family meals, celebrations, and group dining.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button size="lg" className="rounded-full px-8 md:px-10 h-12 md:h-16 text-base md:text-xl shadow-lg shadow-primary/25" asChild>
                            <a href="tel:07284890007">
                                Order Online <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 md:px-10 h-12 md:h-16 text-base md:text-xl" asChild>
                            <a href="#location">Find Us</a>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-50">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Open Now</p>
                                <p className="text-sm font-bold text-slate-900 leading-tight">Until 3:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-50">
                                <MapPin className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Location</p>
                                <p className="text-sm font-bold text-slate-900 leading-tight">Vesu, Surat</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-50 text-yellow-500">
                                <Star className="w-5 h-5 fill-yellow-500" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Rating</p>
                                <p className="text-sm font-bold text-slate-900 leading-tight">4.2 / 5.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[350px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    {/* Placeholder for Hero Image */}
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center group overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200"
                            alt="Blue Basil Ambience"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white text-lg font-medium">Fine Dining Experience at Blue Basil</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
