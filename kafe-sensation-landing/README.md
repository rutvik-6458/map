# Kafe Sensation Landing Page

A modern, mobile-first landing page for Kafe Sensation - a cozy coffee shop in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Single-page landing design
- ✅ Mobile-first responsive layout
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ SEO optimized with meta tags and JSON-LD structured data
- ✅ All sections: Hero, Social Proof, Features, Menu, Gallery, FAQ, Location, Footer
- ✅ Fast loading and optimized performance
- ✅ Premium UI with warm coffee theme

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
kafe-sensation-landing/
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
│   │   ├── Trust.tsx        # Rating and testimonials
│   │   ├── Features.tsx     # Features & highlights
│   │   ├── Menu.tsx         # Signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address & map
│   │   └── Footer.tsx       # Footer with links
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── data.ts              # Business data (JSON content)
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Gallery Images

The gallery section currently uses placeholder images from Unsplash. To replace them with actual cafe photos:

1. **Recommended images to add:**
   - Cafe interior and seating
   - Pizza and pasta dishes
   - Frappe and coffee drinks
   - Birthday celebration setup
   - Exterior view at Aagam Viviana

2. **How to replace:**
   - Option 1: Add images to `src/assets/` folder and import them in `Gallery.tsx`
   - Option 2: Update the `galleryImages` array in `src/components/Gallery.tsx` with your image URLs

3. **Current placeholder structure:**
   - Images are loaded from Unsplash URLs
   - Each image has error handling with colored placeholders
   - Images are responsive and optimized for web

## Configuration

### Update Business Information

All business data is stored in `src/data.ts`. Update this file to change:
- Business name, tagline, address
- Phone number, hours
- Menu items, features
- FAQ content
- Social proof (ratings, reviews)

### SEO & Metadata

SEO settings are in `src/app/layout.tsx`:
- Meta title and description
- OpenGraph tags for social sharing
- JSON-LD structured data for LocalBusiness schema
- Update the `url` and `image` fields in JSON-LD when you have the actual website URL

### Google Maps

- If you have a Google Maps link, add it to `google_maps_link` in `src/data.ts`
- If not provided, the site will generate a directions link from the address
- The map embed will automatically use the Google Maps link if available

### WhatsApp Integration

- WhatsApp button appears automatically if a phone number is available
- The phone number is cleaned (spaces removed) for WhatsApp links
- If no phone number is provided, WhatsApp button is hidden

## Deployment

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

Or deploy to Vercel:
```bash
vercel
```

## Notes

- All content is sourced from the provided JSON data
- Gallery images are placeholders - replace with actual cafe photos
- Google Maps link is empty in data - add when available
- WhatsApp number uses the phone number if available
- The site is fully responsive and mobile-optimized





