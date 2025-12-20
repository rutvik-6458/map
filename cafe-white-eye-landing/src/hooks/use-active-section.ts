"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 100) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the current section
            let current = "";
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        current = id;
                        break; // Found the section
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
}
