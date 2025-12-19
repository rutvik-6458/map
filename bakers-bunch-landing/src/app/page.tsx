'use client';

import { useEffect } from 'react';
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Menu } from "../components/Menu";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Location } from "../components/Location";
import { Footer } from "../components/Footer";
import { businessData } from "../data";

export default function LandingPage() {

  useEffect(() => {
    document.title = `${businessData.brand.business_name} - ${businessData.brand.short_tagline}`;
    // Optionally set meta description via JS if no Helmet
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', businessData.content_blocks.hero_subheadline);
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": businessData.brand.business_name,
    "image": "", // Add hero image URL if hosted
    "@id": "",
    "url": "https://bakers-bunch.com",
    "telephone": businessData.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.contact.address,
      "addressLocality": "Surat",
      "addressRegion": "GJ",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.147, // Approx for Vesu
      "longitude": 72.791
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "23:00"
    },
    "sameAs": [
      businessData.contact.google_maps_link
    ]
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Menu />
        <Testimonials />
        <FAQ />
        <Location />
      </main>

      <Footer />
    </div>
  );
}
