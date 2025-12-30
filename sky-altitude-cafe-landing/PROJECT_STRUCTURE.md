# Project Structure

Complete folder structure for Sky Altitude Cafe & Restro Lounge landing page.

## Root Files

```
sky-altitude-cafe-landing/
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── components.json           # shadcn/ui configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
├── .gitignore                # Git ignore rules
├── next-env.d.ts             # Next.js TypeScript definitions
├── README.md                 # Project documentation
├── GALLERY_IMAGES.md         # Gallery integration guide
└── PROJECT_STRUCTURE.md      # This file
```

## Source Files

```
src/
├── app/
│   ├── layout.tsx            # Root layout with SEO metadata and JSON-LD
│   ├── page.tsx              # Main landing page (all sections)
│   └── globals.css           # Global styles with Tailwind CSS
│
├── components/
│   ├── ui/                   # shadcn/ui base components
│   │   ├── button.tsx        # Button component
│   │   ├── card.tsx          # Card components
│   │   └── accordion.tsx     # Accordion component for FAQ
│   │
│   ├── Header.tsx            # Sticky header with navigation
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── SocialProof.tsx       # Ratings and testimonials
│   ├── Features.tsx          # Features/highlights section
│   ├── Menu.tsx              # Menu section with signature items
│   ├── Gallery.tsx           # Gallery with image placeholders
│   ├── FAQ.tsx               # FAQ accordion section
│   ├── Location.tsx          # Location with map embed
│   └── Footer.tsx            # Footer with contact info
│
└── lib/
    └── utils.ts              # Utility functions (cn helper)
```

## Public Assets (to be added)

```
public/
└── gallery/                  # Gallery images (add your images here)
    ├── rooftop-ambience.jpg
    ├── food-pasta.jpg
    ├── food-tacos.jpg
    ├── food-sizzlers.jpg
    ├── family-dining.jpg
    ├── interior-decor.jpg
    └── exterior-view.jpg
```

## Section Order

The landing page follows this structure (from top to bottom):

1. **Header** - Sticky navigation with Call/WhatsApp/Directions buttons
2. **Hero** - Main headline, tagline, and primary CTAs
3. **Social Proof** - Star rating, review count, testimonials
4. **Features** - Why choose Sky Altitude (6 feature cards)
5. **Menu** - Signature dishes and "perfect for" section
6. **Gallery** - Image grid (currently placeholders)
7. **FAQ** - Frequently asked questions with accordion
8. **Location** - Map embed and contact information
9. **Footer** - Links, contact details, and CTAs

## Key Features Implemented

✅ Mobile-first responsive design
✅ Sticky header with smooth scroll navigation
✅ SEO optimization (meta tags, JSON-LD schema)
✅ WhatsApp integration
✅ Google Maps ready (link can be added)
✅ Accessibility considerations
✅ Performance optimized (Next.js Image ready)
✅ TypeScript for type safety
✅ Modern UI with Tailwind CSS
✅ shadcn/ui components

## Content Source

All content is sourced from the provided JSON data:
- Business name, category, location
- Contact information
- Ratings and reviews
- Menu items
- Features and USPs
- FAQ questions and answers
- Testimonials

## Next Steps

1. Replace gallery placeholder images (see GALLERY_IMAGES.md)
2. Add Google Maps link to Location component
3. Add actual gallery images to public/gallery/
4. Customize colors/branding if needed
5. Test on various devices
6. Deploy to production



