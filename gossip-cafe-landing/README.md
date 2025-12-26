# Gossip Cafe Landing Page

A modern, mobile-first landing page for Gossip Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, premium UI with purple/pink color scheme
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Optimized with Next.js App Router
- **SEO Optimized**: Complete meta tags, OpenGraph, and JSON-LD structured data
- **Sticky Header**: Navigation bar with Call, Directions, and WhatsApp buttons
- **Complete Sections**: Hero, Trust, Features, Menu, Gallery, FAQ, Location, Footer

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

### Installation

```bash
cd gossip-cafe-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
gossip-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky header with CTAs
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Rating & testimonials
│   │   ├── Features.tsx     # Highlights/features
│   │   ├── Services.tsx     # Menu/signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Map & address
│   │   └── Footer.tsx       # Footer with links
│   ├── data.ts              # Cafe data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets (add gallery images here)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 📸 Adding Gallery Images

To replace the placeholder gallery images:

1. Add your images to the `public/` folder (e.g., `public/gallery1.jpg`, `public/gallery2.jpg`, etc.)
2. Update `src/components/Gallery.tsx` to import and use the images:

```tsx
import Image from "next/image";
import gallery1 from "@/public/gallery1.jpg";
// ... import other images

// Then in the component:
<Image
  src={gallery1}
  alt="Gossip Cafe - Exterior view"
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Recommended Photo Shotlist:**
- Cafe exterior at Ashtha Complex
- Interior seating and lighting
- Cold coffee and snacks close-up
- Group and couple seating areas
- Decor and selfie-friendly spots

## 🎨 Customization

All cafe-specific data is stored in `src/data.ts`. Update this file to change:
- Business information
- Contact details
- Menu items
- FAQs
- Testimonials
- And more...

## 📱 Contact Features

- **Phone**: Click-to-call functionality
- **WhatsApp**: Direct WhatsApp chat link (uses phone number with country code)
- **Google Maps**: Directions link (falls back to address search if no direct link provided)

## 🔍 SEO Features

- Meta title and description
- OpenGraph tags for social sharing
- Twitter Card support
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML structure

## 📄 License

Private project - All rights reserved.
