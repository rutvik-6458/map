# The Last Order by Engine Cafe - Landing Page

A modern, mobile-first landing page for The Last Order by Engine Cafe, built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- ✅ Single-page landing page with smooth scrolling
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ Mobile-first responsive design
- ✅ SEO optimized with meta tags, OpenGraph, and JSON-LD schema
- ✅ All sections: Hero, Social Proof, Features, Menu, Gallery, FAQ, Location, Footer
- ✅ Premium design with amber/warm color scheme
- ✅ Fast performance with Next.js App Router

## Tech Stack

- **Next.js 16.1.0** (App Router)
- **React 19.2.3**
- **TypeScript 5**
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
the-last-order-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO & JSON-LD
│   │   ├── page.tsx          # Main landing page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx        # Sticky header with navigation
│   │   ├── Hero.tsx           # Hero section with CTAs
│   │   ├── SocialProof.tsx   # Ratings and testimonials
│   │   ├── Features.tsx      # Features and highlights
│   │   ├── Menu.tsx           # Signature items
│   │   ├── Gallery.tsx        # Image gallery (placeholders)
│   │   ├── FAQ.tsx            # Frequently asked questions
│   │   ├── Location.tsx       # Address and map
│   │   ├── Footer.tsx         # Footer with links
│   │   └── ui/               # shadcn/ui components
│   ├── data.ts                # All cafe data (source of truth)
│   └── lib/
│       └── utils.ts           # Utility functions
└── package.json
```

## Gallery Images

The gallery section currently uses placeholder divs. To add actual images:

1. Add images to `src/assets/` directory
2. Update `src/components/Gallery.tsx` to import and use the images
3. Recommended images based on photo shotlist:
   - Cafe interior and seating
   - Loaded nachos and garlic bread
   - Pasta and lasagna close-ups
   - Staff interacting with customers
   - Exterior view from VIP Road

## Data Source

All content is sourced from `src/data.ts`. This is the single source of truth for:
- Brand information
- Contact details
- Menu items
- Reviews and ratings
- FAQ content
- And more...

## SEO Features

- Meta title and description
- OpenGraph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML structure

## Missing Information

The following information should be added when available:
- Google Maps link (currently uses address-based embed)
- Official website or Instagram handle
- Detailed menu PDF
- Exact opening time

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for The Last Order by Engine Cafe.

