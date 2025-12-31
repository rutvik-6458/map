"use client";

import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import { CheckCircle2, Heart, PartyPopper, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Highlights = () => {
    const highlights = [
        {
            icon: <PartyPopper className="text-primary" />,
            title: "Celebration Ready",
            description: "Ideal for birthdays and small celebrations with custom decoration setups.",
        },
        {
            icon: <Heart className="text-red-500" />,
            title: "Couple Friendly",
            description: "Providing a cozy and private seating space perfect for quality time.",
        },
        {
            icon: <ShieldCheck className="text-green-600" />,
            title: "Clean & Hygienic",
            description: "We maintain a safe and memorable environment for all our guests.",
        },
        {
            icon: <CheckCircle2 className="text-primary" />,
            title: "Prime Location",
            description: "Conveniently located in Vesu, Surat, making it easy to visit.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold font-outfit text-foreground leading-tight">
                                Jerry Cafe – Where <span className="text-primary">Celebrations</span> Meet Comfort
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                                "Jerry Cafe is a popular cafe in Vesu, Surat, well known for hosting small celebrations, birthday parties, and providing a cozy, private space for couples."
                            </p>
                            <p className="text-muted-foreground">
                                Customers often appreciate the decoration, service quality, and overall memorable experience, making it a preferred spot for special occasions.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-muted transition-colors group">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <div className="group-hover:text-white transition-colors">{item.icon}</div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-outfit text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group cursor-pointer"
                    >
                        {/* Actual image for decoration/celebration */}
                        <div className="aspect-square bg-muted rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white">
                            <Image
                                src={gallery1}
                                alt="Beautiful celebration decoration at Jerry Cafe"
                                fill
                                priority
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Highlights;
