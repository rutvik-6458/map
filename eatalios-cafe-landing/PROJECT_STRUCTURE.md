# Project Structure

```
eatalios-cafe-landing/
├── .eslintrc.json              # ESLint configuration
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui configuration
├── IMAGE_INTEGRATION.md         # Guide for adding images
├── next-env.d.ts               # Next.js TypeScript definitions
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── PROJECT_STRUCTURE.md        # This file
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
│
├── public/                     # Static assets
│   └── gallery/               # Gallery images (add here)
│       ├── pasta-1.jpg
│       ├── pizza-1.jpg
│       ├── interior-1.jpg
│       ├── food-spread-1.jpg
│       ├── exterior-1.jpg
│       └── pasta-2.jpg
│
└── src/
    ├── app/
    │   ├── layout.tsx          # Root layout with SEO, JSON-LD, OpenGraph
    │   ├── page.tsx            # Main landing page (single page)
    │   └── globals.css         # Global styles and Tailwind
    │
    ├── components/
    │   ├── ui/                 # shadcn/ui components
    │   │   ├── accordion.tsx   # FAQ accordion component
    │   │   ├── button.tsx      # Button component
    │   │   └── card.tsx        # Card component
    │   │
    │   ├── Header.tsx          # Sticky header with navigation
    │   ├── Hero.tsx            # Hero section with CTAs
    │   ├── SocialProof.tsx     # Ratings and testimonials
    │   ├── Features.tsx        # Features/Highlights section
    │   ├── Menu.tsx            # Menu/Services section
    │   ├── Gallery.tsx         # Image gallery (placeholders)
    │   ├── FAQ.tsx             # FAQ accordion section
    │   ├── Location.tsx        # Location and map section
    │   └── Footer.tsx          # Footer
    │
    └── lib/
        └── utils.ts            # Utility functions (cn helper)
```

## Key Files to Update

### Contact Information
- `src/components/Header.tsx` - Lines 9-11 (phone, WhatsApp, maps link)
- `src/components/Hero.tsx` - Lines 4-6 (phone, WhatsApp, maps link)
- `src/components/Location.tsx` - Line 6 (maps link)
- `src/app/layout.tsx` - JSON-LD schema (phone, URL, image)

### Images
- `src/components/Gallery.tsx` - Uncomment Image components when images are added
- Add images to `public/gallery/` folder

### SEO
- `src/app/layout.tsx` - Update metadata, JSON-LD with complete business info


