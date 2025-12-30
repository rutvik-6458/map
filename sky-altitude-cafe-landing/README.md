# Sky Altitude Cafe & Restro Lounge - Landing Page

A modern, mobile-first landing page for Sky Altitude Cafe & Restro Lounge built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with navigation and CTAs
- ✅ Hero section with call-to-action buttons
- ✅ Social proof section with ratings and testimonials
- ✅ Features/highlights section
- ✅ Menu section with signature items
- ✅ Gallery section (placeholder images ready for replacement)
- ✅ FAQ section with accordion
- ✅ Location section with map embed
- ✅ Footer with contact information
- ✅ SEO optimized with meta tags and JSON-LD schema
- ✅ WhatsApp integration
- ✅ Google Maps integration ready

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sky-altitude-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles with Tailwind
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── accordion.tsx
│   │   ├── Header.tsx          # Sticky header with navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── SocialProof.tsx     # Ratings and testimonials
│   │   ├── Features.tsx        # Features/highlights
│   │   ├── Menu.tsx            # Menu section
│   │   ├── Gallery.tsx         # Gallery with placeholders
│   │   ├── FAQ.tsx             # FAQ accordion
│   │   ├── Location.tsx        # Location with map
│   │   └── Footer.tsx          # Footer
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
└── ...config files
```

## Customization

### Replace Gallery Images

1. Add your images to the `public/gallery/` folder
2. Update `src/components/Gallery.tsx` to use the actual images:

```tsx
import Image from "next/image";

// Replace placeholder with:
<Image
  src="/gallery/image1.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

### Update Google Maps Link

1. Get your Google Maps embed URL or link
2. Update the `googleMapsLink` variable in:
   - `src/components/Header.tsx`
   - `src/components/Hero.tsx`
   - `src/components/Location.tsx`

### Update Contact Information

Update phone numbers and addresses in:
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Location.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx` (for JSON-LD schema)

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All content is sourced from the provided JSON data
- Gallery images are placeholders - replace with actual images
- Google Maps link is empty - add your link when available
- WhatsApp button uses the phone number provided
- The page is fully SEO optimized with proper meta tags and schema markup



