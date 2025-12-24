# The Star Cafe Landing Page

A modern, mobile-first landing page for The Star Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and Framer Motion.

## Features

- ✅ **Modern Design**: Premium, clean UI with smooth animations
- ✅ **Mobile-First**: Fully responsive design optimized for all devices
- ✅ **SEO Optimized**: Complete meta tags, OpenGraph, and JSON-LD structured data
- ✅ **Fast Performance**: Optimized images, lazy loading, and efficient rendering
- ✅ **Sticky Header**: Navigation bar with Call, Directions, and WhatsApp buttons
- ✅ **Complete Sections**: Hero, Trust, Features, Menu, Gallery, FAQ, Location, Footer

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
cd the-star-cafe-landing
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
the-star-cafe-landing/
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
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets (add images here)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Content Source

All content is sourced from the provided JSON data:
- Business name, category, location
- Contact information (phone, address, hours)
- Signature menu items (Mojito, Peri Peri Fries, Tea & Coffee)
- Reviews and ratings (4.5★, 92 reviews)
- Testimonials and FAQs
- Unique selling points

## Image Gallery Setup

The Gallery component currently shows placeholders. To add actual images:

1. Add your images to the `public/` folder:
   - `gallery-1.jpg` - Cafe interior and seating
   - `gallery-2.jpg` - Food and snack close-ups
   - `gallery-3.jpg` - Tea and coffee beverages
   - `gallery-4.jpg` - Small group seating setup
   - `gallery-5.jpg` - Exterior view at J9 High Street
   - `gallery-6.jpg` - Cozy ambience showcase

2. Update `src/components/Gallery.tsx` to use Next.js Image component:

```tsx
import Image from "next/image";

// Replace placeholder div with:
<Image
  src={`/gallery-${item.id}.jpg`}
  alt={item.placeholder}
  fill
  className="object-cover"
/>
```

## Customization

### Colors
The theme uses amber/gold colors. To change:
- Update Tailwind classes in components (replace `amber-` with your color)
- Primary: `amber-600`, `amber-700`
- Accent: `amber-400`, `amber-500`

### Contact Information
Update in:
- `src/components/Navbar.tsx` - phoneNumber, whatsappNumber
- `src/components/Location.tsx` - address, hours, phoneNumber
- `src/components/Footer.tsx` - contact details
- `src/app/layout.tsx` - JSON-LD structured data

### SEO
Update in `src/app/layout.tsx`:
- `metadata.title` - Page title
- `metadata.description` - Meta description
- `jsonLd` - Structured data (address, hours, rating)

## Notes

- **WhatsApp Button**: Shows only if phone number is available
- **Get Directions**: Links to Google Maps with address
- **Map Embed**: Uses Google Maps iframe (update coordinates if needed)
- **Gallery**: Currently shows placeholders - replace with actual images
- **Opening Hours**: Currently shows "closes at 10:45 pm" (exact opening time not provided)

## Performance

- Images are optimized with Next.js Image component
- Lazy loading for map iframe
- Smooth scroll animations with Framer Motion
- Mobile-first responsive design

## License

Private project for The Star Cafe.


