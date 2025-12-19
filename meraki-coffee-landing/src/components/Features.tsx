"use client";

import { Coffee, Cake, Truck, Clock, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
    const highlights = [
        {
            icon: <Coffee className="w-6 h-6" />,
            title: "Extensive Coffee Menu",
            description: "From classic hot brews to experimental cold creations and affogato."
        },
        {
            icon: <Cake className="w-6 h-6" />,
            title: "Sweet Treats",
            description: "Handcrafted brownies, cheesecakes, and desserts to pair with your brew."
        },
        {
            icon: <Truck className="w-6 h-6" />,
            title: "Flexible Options",
            description: "Enjoy dine-in, kerbside pickup, or no-contact delivery to your door."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Modern Vibe",
            description: "A popular hangout spot with a comfortable and modern coffee house atmosphere."
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Prime Location",
            description: "Conveniently located on Vesu Main Road, SNS Platina."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Open Daily",
            description: "Your everyday coffee escape, open daily until 10 pm."
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-stone-900 mb-4">
                        Why Meraki?
                    </h2>
                    <p className="text-stone-600">
                        More than just a coffee shop – it's a destination for flavor and relaxation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-white border border-stone-100 hover:border-[#D4A373]/30 transition-all hover:shadow-xl hover:shadow-stone-200/50"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-[#D4A373] group-hover:text-white transition-all mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 font-outfit">
                                {item.title}
                            </h3>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
