# Cafe Buddy's Espresso Landing Page

A modern, mobile-first landing page for Cafe Buddy's Espresso in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Single-page landing design
- ✅ Mobile-first responsive layout
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ SEO optimized with meta tags and JSON-LD structured data
- ✅ OpenGraph tags for social sharing
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
cafe-buddys-espresso-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles & Tailwind setup
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── accordion.tsx
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── SocialProof.tsx  # Ratings & testimonials
│   │   ├── Features.tsx     # Features & highlights
│   │   ├── Menu.tsx         # Signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address & map
│   │   └── Footer.tsx       # Footer with links
│   ├── data.ts              # Cafe data (JSON source)
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Gallery Images

The Gallery component currently uses placeholder images. To add real images:

1. Add your gallery images to `src/assets/` or `public/` folder
2. Update `src/components/Gallery.tsx` to import and use the actual images
3. Recommended images based on photo shotlist:
   - Exterior of the cafe
   - Coffee cups and espresso shots
   - Interior seating and ambience
   - Drive-through counter
   - Close-up of coffee preparation

## Configuration

### Update Contact Information

All contact information is stored in `src/data.ts`. Update the following fields as needed:
- Phone number
- Address
- Google Maps link (if available)
- Business hours

### SEO

SEO metadata is configured in `src/app/layout.tsx`:
- Meta title and description
- OpenGraph tags
- Twitter card tags
- JSON-LD structured data (LocalBusiness schema)

## Build for Production

```bash
npm run build
npm start
```

## Notes

- WhatsApp button only shows if phone number is available
- Get Directions button links to Google Maps if `google_maps_link` is provided, otherwise scrolls to Location section
- Gallery section uses placeholders - replace with actual images
- Business hours section is conditionally rendered (only shows if hours are provided)

