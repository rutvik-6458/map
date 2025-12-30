# Project Structure

## Complete Folder Structure

```
cheezylicious-cafe-landing/
├── .gitignore
├── GALLERY_IMAGES.md          # Instructions for gallery images
├── next-env.d.ts             # Next.js type definitions (auto-generated)
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration for Tailwind
├── PROJECT_STRUCTURE.md      # This file
├── README.md                 # Project documentation
├── tsconfig.json             # TypeScript configuration
└── src/
    ├── app/
    │   ├── globals.css       # Global styles with Tailwind theme
    │   ├── layout.tsx        # Root layout with SEO, JSON-LD, OpenGraph
    │   └── page.tsx          # Main landing page (single page)
    ├── components/
    │   ├── ui/
    │   │   └── button.tsx    # shadcn/ui Button component
    │   ├── Header.tsx        # Sticky header with nav & CTAs
    │   ├── Hero.tsx          # Hero section with tagline
    │   ├── Trust.tsx         # Ratings & reviews section
    │   ├── Features.tsx      # Features/Highlights section
    │   ├── Menu.tsx          # Menu items
    │   ├── Gallery.tsx       # Gallery section
    │   ├── FAQ.tsx           # FAQ accordion section
    │   ├── Location.tsx      # Location with map embed
    │   └── Footer.tsx        # Footer with links
    ├── data.ts               # Business data (single source of truth)
    └── lib/
        └── utils.ts          # Utility functions (cn helper)
└── public/                   # Static assets (create this folder)
    └── gallery/              # Gallery images (create this folder)
        ├── cheese-dishes.jpg
        ├── bunny-chow.jpg
        ├── tea-coffee.jpg
        ├── interior.jpg
        └── exterior.jpg
```

## Key Files

### Configuration Files
- `package.json` - Dependencies and npm scripts
- `tsconfig.json` - TypeScript compiler configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS/Tailwind configuration

### Source Files
- `src/data.ts` - **Single source of truth** for all business data
- `src/app/layout.tsx` - Root layout with SEO metadata and JSON-LD
- `src/app/page.tsx` - Main landing page that imports all sections
- `src/app/globals.css` - Global styles and Tailwind theme

### Components
All components are in `src/components/`:
- `Header.tsx` - Sticky navigation with Call, Directions, and WhatsApp buttons
- `Hero.tsx` - Hero section with headline, subheadline, and CTAs
- `Trust.tsx` - Ratings, reviews, and testimonials
- `Features.tsx` - About section with features and unique selling points
- `Menu.tsx` - Signature menu items display
- `Gallery.tsx` - Image gallery (requires images in `public/gallery/`)
- `FAQ.tsx` - Accordion-style FAQ section
- `Location.tsx` - Address, hours, and embedded Google Maps
- `Footer.tsx` - Footer with links and contact info

## Data Source

All content comes from `src/data.ts`. This is the **only** file you need to edit to update:
- Business information
- Contact details
- Menu items
- Reviews and testimonials
- FAQ content
- Hero headlines and taglines

## Gallery Images

**Important**: Create `public/gallery/` folder and add 5 images:
1. `cheese-dishes.jpg` - Cheese-loaded dishes close-up
2. `bunny-chow.jpg` - Bunny Chow specialty item
3. `tea-coffee.jpg` - Tea and coffee beverages
4. `interior.jpg` - Cafe interior and seating
5. `exterior.jpg` - Exterior view at Aagam Square Complex

See `GALLERY_IMAGES.md` for detailed instructions.

## SEO Features

- Meta title and description in `layout.tsx`
- OpenGraph tags for social sharing
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML throughout

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Sticky header adapts on scroll
- Mobile menu for navigation





