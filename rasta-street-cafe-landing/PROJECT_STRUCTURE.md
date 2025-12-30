# Project Structure

## Complete Folder Structure

```
rasta-street-cafe-landing/
├── .gitignore
├── README.md
├── IMAGE_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
│
├── public/                      # Static assets
│   └── (add gallery images here)
│
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout with SEO & JSON-LD
    │   ├── page.tsx             # Main landing page
    │   └── globals.css           # Global Tailwind styles
    │
    ├── components/
    │   ├── ui/                  # shadcn/ui components
    │   │   ├── accordion.tsx    # FAQ accordion component
    │   │   └── button.tsx       # Button component
    │   │
    │   ├── Header.tsx           # Sticky header with navigation
    │   ├── Hero.tsx              # Hero section with CTAs
    │   ├── SocialProof.tsx      # Rating & testimonials
    │   ├── Features.tsx         # Features/highlights section
    │   ├── Menu.tsx             # Menu & signature items
    │   ├── Gallery.tsx          # Image gallery (placeholders)
    │   ├── FAQ.tsx              # FAQ accordion section
    │   ├── Location.tsx         # Map & contact information
    │   └── Footer.tsx           # Footer with links & CTAs
    │
    └── lib/
        └── utils.ts             # Utility functions (cn helper)
```

## Key Files Overview

### Configuration Files

- **package.json**: All dependencies (Next.js 16, React 19, Tailwind v4, shadcn/ui)
- **tsconfig.json**: TypeScript configuration with path aliases
- **next.config.ts**: Next.js configuration
- **components.json**: shadcn/ui component configuration
- **postcss.config.mjs**: PostCSS config for Tailwind v4

### Core Application Files

- **src/app/layout.tsx**:
  - SEO metadata (title, description, keywords)
  - OpenGraph tags
  - JSON-LD LocalBusiness schema
  - Root layout wrapper

- **src/app/page.tsx**:
  - Main landing page
  - Imports and renders all sections

- **src/app/globals.css**:
  - Tailwind CSS imports
  - CSS variables for theming
  - Base styles

### Component Files

All components are in `src/components/`:

1. **Header.tsx**: Sticky navigation with Call/Directions buttons
2. **Hero.tsx**: Hero section with headline, rating, and CTAs
3. **SocialProof.tsx**: Rating display and customer testimonials
4. **Features.tsx**: 6 feature cards highlighting USPs
5. **Menu.tsx**: Signature items and menu categories
6. **Gallery.tsx**: Image gallery with placeholders
7. **FAQ.tsx**: Accordion with 3 FAQs
8. **Location.tsx**: Google Maps embed and contact info
9. **Footer.tsx**: Footer with links and CTAs

### UI Components

- **button.tsx**: Reusable button component (shadcn/ui)
- **accordion.tsx**: Accordion component for FAQ (shadcn/ui)

## Data Source

All content is sourced from the provided JSON data:
- Business name, category, location
- Contact information (phone, address)
- Rating and reviews
- Signature items and menu
- FAQ questions and answers
- Features and unique selling points

## Next Steps

1. **Install Dependencies**: Run `npm install`
2. **Add Images**: Follow `IMAGE_INTEGRATION.md` guide
3. **Update Google Maps**: Add actual Google Maps embed URL if available
4. **Test**: Run `npm run dev` and test all functionality
5. **Deploy**: Build and deploy to your hosting platform

## Notes

- Phone number is formatted for tel: links automatically
- WhatsApp uses phone number (no separate WhatsApp number provided)
- Google Maps uses address-based search (no direct link provided)
- Gallery uses placeholders - replace with actual images
- All sections are mobile-responsive
- SEO optimized with proper meta tags and schema markup







