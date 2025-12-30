# OK Café Corner Landing Page - Project Structure

## Folder Structure

```
ok-cafe-corner-landing/
├── .gitignore
├── GALLERY_IMAGES.md          # Guide for replacing gallery images
├── PROJECT_STRUCTURE.md       # This file
├── README.md                  # Project documentation
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── src/
    ├── app/
    │   ├── globals.css        # Global styles and Tailwind theme
    │   ├── layout.tsx         # Root layout with SEO, JSON-LD, OpenGraph
    │   └── page.tsx           # Main landing page (single page)
    ├── components/
    │   ├── Header.tsx         # Sticky header with navigation
    │   ├── Hero.tsx           # Hero section with CTAs
    │   ├── Trust.tsx          # Social proof (ratings & reviews)
    │   ├── Features.tsx       # Features/highlights section
    │   ├── Menu.tsx           # Menu/Services section
    │   ├── Gallery.tsx        # Image gallery (placeholder images)
    │   ├── FAQ.tsx            # Frequently asked questions
    │   ├── Location.tsx       # Location with map embed
    │   ├── Footer.tsx         # Footer section
    │   └── ui/
    │       └── button.tsx     # shadcn/ui Button component
    ├── data.ts                # Business data (single source of truth)
    └── lib/
        └── utils.ts           # Utility functions (cn helper)
```

## Key Features Implemented

### ✅ SEO & Meta Tags
- Meta title and description
- OpenGraph tags for social sharing
- Twitter card metadata
- JSON-LD structured data (LocalBusiness schema)
- Keywords for search optimization

### ✅ Navigation
- Sticky header that changes on scroll
- Smooth scroll navigation
- Active section highlighting
- Mobile-responsive menu
- Call, Directions, and WhatsApp buttons (WhatsApp hidden if no phone)

### ✅ Sections
1. **Hero** - Main headline, subheadline, CTAs
2. **Trust** - 4.9-star rating, review count, testimonials
3. **Features** - About paragraph, feature bullets, unique selling points
4. **Menu** - Signature items/services display
5. **Gallery** - Image gallery with placeholders (6 images)
6. **FAQ** - Accordion-style FAQ section
7. **Location** - Address, hours, map embed, contact buttons
8. **Footer** - Business info, quick links, social icons

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Touch-friendly buttons and navigation
- Optimized images and lazy loading

### ✅ Performance
- Next.js App Router
- Optimized fonts (Inter, Playfair Display)
- Lazy-loaded images
- Efficient component structure

## Data Source

All content comes from `src/data.ts` - this is the single source of truth. Update this file to change any business information.

## Next Steps

1. **Install dependencies**: `npm install`
2. **Add phone number** to `src/data.ts` (if available) - enables WhatsApp button
3. **Add Google Maps link** to `src/data.ts` (if available) - improves map integration
4. **Replace gallery images** - see `GALLERY_IMAGES.md` for instructions
5. **Update domain URLs** in `src/app/layout.tsx` (JSON-LD and OpenGraph)
6. **Run development server**: `npm run dev`

## Notes

- WhatsApp button automatically hides if no phone number is provided
- Get Directions button works with or without Google Maps link (falls back to address search)
- Gallery uses placeholder images - replace with actual cafe photos
- All components are TypeScript with proper typing
- Follows user's code quality rules (DRY, modular, <50 lines per function where possible)





