"use client";

import { Star, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Trust() {
    const testimonials = [
        "A great place with a great menu and very good staff.",
        "Very pleasant and must stopover cafe.",
        "What a lovely chill out place, some good coffee happening here."
    ];

    return (
        <section id="reviews" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-stone-900 mb-6">
                            Voted 4.5/5 by <br />
                            <span className="text-stone-500">2,169 Coffee Lovers</span>
                        </h2>
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4].map(i => (
                                <Star key={i} className="w-6 h-6 fill-stone-950 text-stone-950" />
                            ))}
                            <div className="relative">
                                <Star className="w-6 h-6 text-stone-950" />
                                <div className="absolute inset-0 w-1/2 overflow-hidden">
                                    <Star className="w-6 h-6 fill-stone-950 text-stone-950" />
                                </div>
                            </div>
                        </div>
                        <p className="text-stone-600 leading-relaxed mb-8 max-w-lg">
                            Known for its wide range of hot and cold coffee creations, Meraki has become a popular hangout spot in Vesu, Surat.
                        </p>
                        <div className="space-y-4">
                            {["Great coffee menu and flavours", "Good ambience and setup", "Generally friendly service"].map((theme, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-stone-100">
                                        <CheckCircle2 className="w-4 h-4 text-stone-950" />
                                    </div>
                                    <span className="text-stone-700 font-medium">{theme}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 gap-6">
                        {testimonials.map((quote, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-stone-50 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <p className="text-stone-800 italic font-medium leading-relaxed mb-4">
                                    "{quote}"
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-stone-200" />
                                    <span className="text-stone-500 text-sm">Verified Customer</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
