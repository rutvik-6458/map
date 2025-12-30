# Odd Three Coffee Club Landing Page

A modern, mobile-first landing page for Odd Three Coffee Club - a specialty coffee cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Single-page landing design
- ✅ Mobile-first responsive layout
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ SEO optimized with meta tags and JSON-LD structured data
- ✅ All sections: Hero, Social Proof, Features, Menu, Gallery, FAQ, Location, Footer
- ✅ Fast loading and optimized performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
odd-three-coffee-club-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles & Tailwind setup
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   └── button.tsx
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── Trust.tsx        # Ratings & testimonials
│   │   ├── Features.tsx     # Features & highlights
│   │   ├── Menu.tsx         # Signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address & map
│   │   └── Footer.tsx       # Footer with links
│   ├── data.ts              # Single source of truth (all JSON data)
│   └── lib/
│       └── utils.ts         # Utility functions (cn helper)
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── components.json          # shadcn/ui configuration
```

## Data Source

All content is sourced from `src/data.ts` - the single source of truth. Update this file to change any content on the landing page.

## Image Integration

The Gallery component currently uses placeholder images. To add your own images:

1. Add images to `public/` folder or `src/assets/` folder
2. Update the `galleryImages` array in `src/components/Gallery.tsx`
3. Replace placeholder URLs with your image paths

Recommended gallery images:
- Cafe interior and seating
- Barista preparing coffee
- Cold brew and specialty coffee drinks
- Customers working or relaxing
- Exterior and VIP Road view

## SEO & Metadata

- Meta title and description are set in `src/app/layout.tsx`
- JSON-LD structured data (LocalBusiness schema) is included
- OpenGraph tags for social sharing
- Update the `url` and `image` fields in the JSON-LD schema with your actual domain and hero image

## Next Steps

1. **Install Dependencies**: Run `npm install`
2. **Add Images**: Replace placeholder images in Gallery component
3. **Update Google Maps**: Add actual Google Maps embed URL in `src/data.ts` if available
4. **Test**: Run `npm run dev` and test all functionality
5. **Deploy**: Build and deploy to your hosting platform

## Notes

- Phone number is formatted for tel: links automatically
- WhatsApp button uses phone number (formatted) - update if you have a separate WhatsApp number
- Google Maps link falls back to search query if not provided
- All components are mobile-responsive and optimized for performance





