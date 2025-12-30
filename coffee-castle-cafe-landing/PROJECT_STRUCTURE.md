# Coffee Castle Cafe - Project Structure

## Folder Structure

```
coffee-castle-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata, JSON-LD schema, OpenGraph tags
│   │   ├── page.tsx             # Main landing page (assembles all sections)
│   │   └── globals.css          # Global styles & Tailwind CSS configuration
│   │
│   ├── components/
│   │   ├── ui/                  # shadcn/ui base components
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── card.tsx         # Card components (Card, CardHeader, etc.)
│   │   │   └── accordion.tsx    # Accordion component for FAQ
│   │   │
│   │   ├── Header.tsx           # Sticky header with navigation and CTAs
│   │   ├── Hero.tsx             # Hero section with headline and action buttons
│   │   ├── SocialProof.tsx      # Rating display and testimonials
│   │   ├── Features.tsx         # Features/highlights section
│   │   ├── Menu.tsx             # Services/Menu items section
│   │   ├── Gallery.tsx          # Image gallery (placeholders - needs images)
│   │   ├── FAQ.tsx              # Frequently asked questions (accordion)
│   │   ├── Location.tsx         # Address and Google Maps embed
│   │   └── Footer.tsx           # Footer with contact info and links
│   │
│   ├── data.ts                  # Single source of truth - all cafe data
│   └── lib/
│       └── utils.ts             # Utility functions (cn for className merging)
│
├── public/                      # Static assets (images, etc.)
│
├── .gitignore                   # Git ignore file
├── components.json              # shadcn/ui configuration
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js TypeScript definitions
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration (Tailwind)
├── PROJECT_STRUCTURE.md         # This file
├── README.md                    # Project documentation
└── tsconfig.json                # TypeScript configuration

```

## Key Files Overview

### Data Source
- **`src/data.ts`**: Contains all content for the landing page. This is the single source of truth. Update this file to change any content on the site.

### Layout & SEO
- **`src/app/layout.tsx`**:
  - Sets up the root HTML structure
  - Includes SEO metadata (title, description, keywords)
  - JSON-LD structured data (LocalBusiness schema)
  - OpenGraph and Twitter Card tags

### Components
All components are in `src/components/`:
- **Header**: Sticky navigation with conditional Call/Directions/WhatsApp buttons
- **Hero**: Main hero section with headline and CTAs
- **SocialProof**: Displays rating, review count, and testimonials
- **Features**: Shows features bullets and "best for" items
- **Menu**: Displays services and unique selling points
- **Gallery**: Image gallery (currently placeholders - see README for replacement instructions)
- **FAQ**: Accordion with frequently asked questions
- **Location**: Address display and Google Maps embed
- **Footer**: Footer with business info and copyright

### Styling
- **`src/app/globals.css`**:
  - Tailwind CSS imports
  - CSS custom properties for theming
  - Base styles

## Next Steps

1. **Replace Gallery Images**: See README.md for instructions on adding actual cafe photos
2. **Add Phone Number**: Update `src/data.ts` → `contact.phone` to enable Call and WhatsApp buttons
3. **Add Google Maps Link**: Update `src/data.ts` → `contact.google_maps_link` for direct map navigation
4. **Install Dependencies**: Run `npm install`
5. **Start Development**: Run `npm run dev`

## Component Dependencies

- All components import from `@/data` for content
- UI components (Button, Card, Accordion) are from shadcn/ui
- Icons are from `lucide-react`
- Utilities from `@/lib/utils`



