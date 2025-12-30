'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DATA } from '@/lib/data'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const [isScrolled, setIsScrolled] = useState(false)

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Location', href: '#location' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = navItems.map(item => item.href.substring(1))
            let currentSection = 'hero'
            
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    // Check if section is in viewport (near top)
                    if (rect.top <= 200 && rect.bottom >= 100) {
                        currentSection = section
                    }
                }
            }
            
            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Initial check
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.getElementById(href.substring(1))
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            setIsOpen(false)
            setActiveSection(href.substring(1))

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })

            // Update active section after scroll completes
            setTimeout(() => {
                setActiveSection(href.substring(1))
            }, 500)
        }
    }

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
            (isScrolled || isOpen) 
                ? "bg-white shadow-md border-slate-200 py-2 sm:py-3" 
                : "bg-black/30 backdrop-blur-sm border-transparent py-4 sm:py-5"
        )}>
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                <Link
                    href="#hero"
                    onClick={(e) => scrollToSection(e as any, '#hero')}
                    className={cn(
                        "text-lg sm:text-xl md:text-2xl font-bold font-heading truncate max-w-[180px] xs:max-w-[200px] sm:max-w-none transition-colors",
                        (isScrolled || isOpen) ? "text-primary" : "text-white drop-shadow-lg"
                    )}
                >
                    {DATA.brand.business_name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1)
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "text-xs xl:text-sm font-medium transition-all duration-300 relative pb-1 pt-1",
                                    isActive
                                        ? cn(
                                            (isScrolled || isOpen)
                                                ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:rounded-full"
                                                : "text-white font-bold drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full"
                                        )
                                        : cn(
                                            (isScrolled || isOpen)
                                                ? "text-slate-600 hover:text-primary"
                                                : "text-white/90 hover:text-white drop-shadow-md"
                                        )
                                )}
                            >
                                {item.name}
                            </a>
                        )
                    })}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                    <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className={cn(
                            "hidden xl:flex transition-colors text-xs xl:text-sm border-2",
                            (isScrolled || isOpen) 
                                ? "border-primary/20 text-primary hover:bg-primary hover:text-white" 
                                : "border-white/50 text-white hover:bg-white/10 hover:border-white"
                        )}
                    >
                        <a
                            href={DATA.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${DATA.brand.business_name}, ${DATA.contact.address}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MapPin className="mr-1.5 xl:mr-2 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                            Directions
                        </a>
                    </Button>
                    <Button 
                        asChild 
                        size="sm"
                        className={cn(
                            "transition-colors text-xs xl:text-sm shadow-md",
                            (isScrolled || isOpen)
                                ? "bg-primary hover:bg-primary/90 text-white"
                                : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                        )}
                    >
                        <a href={`tel:${DATA.contact.phone.replace(/\s+/g, '')}`}>
                            <Phone className="mr-1.5 xl:mr-2 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                            Call
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className={cn(
                        "lg:hidden p-2 rounded-lg transition-all duration-200",
                        (isScrolled || isOpen) 
                            ? "bg-slate-100 text-slate-900 hover:bg-slate-200" 
                            : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20"
                    )} 
                    onClick={() => setIsOpen(!isOpen)} 
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl transition-all duration-300 ease-in-out origin-top",
                isOpen 
                    ? "opacity-100 translate-y-0 scale-y-100 visible" 
                    : "opacity-0 -translate-y-4 scale-y-95 invisible pointer-events-none"
            )}>
                <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-[calc(100vh-80px)] overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1)
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "text-base sm:text-lg font-bold transition-all duration-200 py-3 px-4 rounded-xl flex items-center justify-between",
                                    isActive
                                        ? "text-primary bg-primary/5"
                                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                )}
                            >
                                {item.name}
                                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </a>
                        )
                    })}
                    
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-6 border-t border-slate-100">
                        <Button asChild variant="outline" className="h-12 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary transition-all rounded-xl">
                            <a
                                href={DATA.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${DATA.brand.business_name}, ${DATA.contact.address}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MapPin className="mr-2 h-4 w-4" />
                                Directions
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="h-12 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary transition-all rounded-xl">
                            <a href={`tel:${DATA.contact.phone.replace(/\s+/g, '')}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                Call Now
                            </a>
                        </Button>
                        <Button asChild className="col-span-2 h-12 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 transition-all rounded-xl">
                            <a 
                                href={`https://wa.me/${DATA.contact.phone.replace(/\s+/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
