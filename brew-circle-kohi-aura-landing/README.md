# Brew Circle by Kohi Aura Landing Page

A modern, mobile-first landing page for Brew Circle by Kohi Aura - a late-night cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Single-page landing design
- ✅ Mobile-first responsive layout
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ SEO optimized with meta tags and JSON-LD structured data
- ✅ All sections: Hero, Social Proof, Features, Menu, Gallery, FAQ, Location, Footer
- ✅ Fast loading and optimized performance
- ✅ Premium UI with warm amber/coffee color theme

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
brew-circle-kohi-aura-landing/
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
│   ├── data.ts              # Single source of truth (all JSON data)
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── components.json
```

## Data Source

All content is sourced from `src/data.ts`. This is the single source of truth for all content on the page. Update this file to change any content.

## Customization

### Updating Content
Edit `src/data.ts` to update any content, including:
- Business information
- Contact details
- Menu items
- FAQ questions
- Social proof (ratings, reviews)

### Styling
The project uses Tailwind CSS v4. The color theme is based on warm amber/brown tones to reflect the coffee cafe vibe. Main color classes:
- Primary: `amber-700`, `amber-800`, `amber-900`
- Accents: `amber-50`, `amber-100`, `amber-200`

### Images
See `IMAGE_INTEGRATION.md` for instructions on adding gallery images.

### Google Maps
If you have a Google Maps embed link, add it to `cafeData.contact.google_maps_link` in `src/data.ts`. Otherwise, the map will use the address for embedding.

### WhatsApp
The WhatsApp button automatically appears if a phone number is available in the contact data. The phone number is formatted for WhatsApp links automatically.

## Build & Deploy

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Notes

- Phone numbers are automatically formatted for `tel:` links
- WhatsApp links use the phone number from contact data
- Google Maps embed falls back to address-based embedding if no direct link is provided
- All components are mobile-first and responsive
- SEO metadata is included in `layout.tsx` with JSON-LD structured data

## License

Private project - All rights reserved.




