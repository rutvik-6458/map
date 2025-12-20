'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'
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
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    // Check if section is in viewport (near top)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

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

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })

            setIsOpen(false)
            setActiveSection(href.substring(1))
        }
    }

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
            isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border/40 py-2 sm:py-3" : "bg-transparent py-4 sm:py-5"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link
                    href="#hero"
                    onClick={(e) => scrollToSection(e as any, '#hero')}
                    className="text-xl sm:text-2xl font-bold font-heading text-primary truncate max-w-[200px] sm:max-w-none"
                >
                    {DATA.brand.business_name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                                activeSection === item.href.substring(1)
                                    ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Button asChild variant="outline" size="sm" className="hidden lg:flex">
                        <a
                            href={DATA.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${DATA.brand.business_name}, ${DATA.contact.address}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MapPin className="mr-2 h-4 w-4" />
                            Directions
                        </a>
                    </Button>
                    <Button asChild size="sm">
                        <a href={`tel:${DATA.contact.phone.replace(/\s+/g, '')}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={cn(
                                "text-lg font-medium transition-colors py-2 px-2 rounded-md",
                                activeSection === item.href.substring(1) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex gap-3 mt-2 pt-4 border-t">
                        <Button asChild variant="outline" className="flex-1">
                            <a
                                href={DATA.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${DATA.brand.business_name}, ${DATA.contact.address}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MapPin className="mr-2 h-4 w-4" />
                                Map
                            </a>
                        </Button>
                        <Button asChild className="flex-1">
                            <a href={`tel:${DATA.contact.phone.replace(/\s+/g, '')}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                Call
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
