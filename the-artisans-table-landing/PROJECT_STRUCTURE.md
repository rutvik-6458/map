# Project Structure

Complete folder structure for The Artisan's Table landing page.

```
the-artisans-table-landing/
├── .gitignore                    # Git ignore file
├── GALLERY_IMAGES.md             # Guide for replacing gallery images
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── PROJECT_STRUCTURE.md          # This file
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration
└── src/
    ├── app/
    │   ├── globals.css           # Global styles and Tailwind setup
    │   ├── layout.tsx             # Root layout with SEO, JSON-LD, OpenGraph
    │   └── page.tsx               # Main landing page (single page)
    ├── components/
    │   ├── FAQ.tsx                # FAQ accordion section
    │   ├── Features.tsx           # Features/Highlights section
    │   ├── Footer.tsx             # Footer with contact info
    │   ├── Gallery.tsx            # Image gallery (placeholder images)
    │   ├── Header.tsx             # Sticky header with navigation
    │   ├── Hero.tsx               # Hero section with CTAs
    │   ├── Location.tsx           # Location section with map
    │   ├── Menu.tsx               # Menu/Signature items section
    │   ├── SocialProof.tsx        # Ratings and testimonials
    │   └── ui/
    │       ├── accordion.tsx      # Accordion component (shadcn/ui)
    │       ├── button.tsx         # Button component (shadcn/ui)
    │       └── card.tsx           # Card component (shadcn/ui)
    ├── data.ts                    # All content data (source of truth)
    └── lib/
        └── utils.ts               # Utility functions (cn helper)

Note: Gallery images should be added to src/assets/ directory
      See GALLERY_IMAGES.md for detailed instructions
```

## Key Files

### Configuration
- `package.json` - Dependencies (Next.js, React, Tailwind, shadcn/ui)
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS for Tailwind

### Core Application
- `src/app/layout.tsx` - Root layout with:
  - SEO meta tags
  - OpenGraph tags
  - Twitter card tags
  - JSON-LD structured data (LocalBusiness schema)
- `src/app/page.tsx` - Single-page landing page
- `src/app/globals.css` - Global styles and Tailwind theme

### Data
- `src/data.ts` - **Single source of truth** for all content
  - Brand information
  - Contact details
  - Positioning and features
  - Social proof
  - Content blocks
  - FAQ data

### Components
All components are in `src/components/`:
- `Header.tsx` - Sticky header with navigation, Call, Directions, WhatsApp buttons
- `Hero.tsx` - Hero section with headline, CTAs
- `SocialProof.tsx` - Ratings, reviews, testimonials
- `Features.tsx` - Features grid and "Best For" section
- `Menu.tsx` - Signature items/services cards
- `Gallery.tsx` - Image gallery (currently placeholder images)
- `FAQ.tsx` - FAQ accordion
- `Location.tsx` - Address, contact, map embed
- `Footer.tsx` - Footer with links and contact info

### UI Components
shadcn/ui components in `src/components/ui/`:
- `button.tsx` - Button component with variants
- `card.tsx` - Card component
- `accordion.tsx` - Accordion component for FAQ

### Utilities
- `src/lib/utils.ts` - Utility functions (cn for className merging)

## Next Steps

1. **Install dependencies**: `npm install`
2. **Replace gallery images**: See `GALLERY_IMAGES.md`
3. **Add Google Maps link**: Update `google_maps_link` in `src/data.ts` if available
4. **Run development server**: `npm run dev`
5. **Build for production**: `npm run build`


