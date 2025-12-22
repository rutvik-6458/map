# Cheezylicious Cafe Landing Page

A modern, single-page landing page for Cheezylicious Cafe built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- ✅ Modern, mobile-first design
- ✅ Sticky header with navigation
- ✅ Hero section with CTAs
- ✅ Trust section with ratings and reviews
- ✅ Features/Highlights section
- ✅ Menu section with signature items
- ✅ Gallery section (placeholder images)
- ✅ FAQ section
- ✅ Location section with map embed
- ✅ Footer with contact information
- ✅ SEO optimized with meta tags, JSON-LD, and OpenGraph
- ✅ WhatsApp integration
- ✅ Google Maps integration

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **Lucide React** icons

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
cheezylicious-cafe-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with Tailwind theme
│   │   ├── layout.tsx            # Root layout with SEO, JSON-LD, OpenGraph
│   │   └── page.tsx             # Main landing page (single page)
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx       # shadcn/ui Button component
│   │   ├── Header.tsx           # Sticky header with nav & CTAs
│   │   ├── Hero.tsx             # Hero section with tagline
│   │   ├── Trust.tsx            # Ratings & reviews section
│   │   ├── Features.tsx         # Features/Highlights section
│   │   ├── Menu.tsx             # Menu items
│   │   ├── Gallery.tsx          # Gallery section
│   │   ├── FAQ.tsx              # FAQ accordion section
│   │   ├── Location.tsx         # Location with map embed
│   │   └── Footer.tsx           # Footer with links
│   ├── data.ts                  # Business data (single source of truth)
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── public/
│   └── gallery/                 # Gallery images folder (create this)
│       ├── cheese-dishes.jpg
│       ├── bunny-chow.jpg
│       ├── tea-coffee.jpg
│       ├── interior.jpg
│       └── exterior.jpg
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Gallery Images

**Important**: Replace the placeholder gallery images with actual photos.

1. Create a `public/gallery/` folder in the project root
2. Add the following images (recommended size: 1200x900px or similar aspect ratio):
   - `cheese-dishes.jpg` - Cheese-loaded dishes close-up
   - `bunny-chow.jpg` - Bunny Chow specialty item
   - `tea-coffee.jpg` - Tea and coffee beverages
   - `interior.jpg` - Cafe interior and seating
   - `exterior.jpg` - Exterior view at Aagam Square Complex

The gallery component will automatically handle image loading errors and show placeholders if images are missing.

## Customization

All business data is stored in `src/data.ts`. Update this file to change:
- Business name, tagline, and description
- Contact information (phone, address, hours)
- Menu items and signature dishes
- Reviews and testimonials
- FAQ content

## SEO

The landing page includes:
- Meta title and description
- OpenGraph tags for social sharing
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML structure

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The WhatsApp button will only show if a phone number is available in `data.ts`
- The Google Maps link will use the address to generate directions if `google_maps_link` is empty
- All images use Next.js Image component for optimization
- The design is fully responsive and mobile-first

