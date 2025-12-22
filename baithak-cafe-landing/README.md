# Baithak Cafe Landing Page

A modern, mobile-first landing page for Baithak Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

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
baithak-cafe-landing/
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
│   ├── data.ts              # All cafe data (JSON source)
│   └── lib/
│       └── utils.ts         # Utility functions
```

## Image Integration

The Gallery component currently uses placeholder divs. To add real images:

1. Add images to `public/gallery/` folder
2. Update `src/components/Gallery.tsx` to import and display them
3. Recommended images (from data):
   - Cheese Mysore dosa close-up
   - Chinese food dishes
   - Cafe seating and ambience
   - Clean kitchen or service counter
   - Exterior view at Phoenix Market

## Customization

All content is sourced from `src/data.ts`. Update this file to change any text, contact info, or business details.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- WhatsApp button only shows if phone number is available
- Google Maps embed requires a valid `google_maps_link` in data.ts
- If `google_maps_link` is empty, the Location section shows a placeholder with address
- All CTAs (Call, Directions, WhatsApp) are functional and use the data from `data.ts`


