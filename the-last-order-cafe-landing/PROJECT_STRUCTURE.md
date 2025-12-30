# Project Structure

## Complete Folder Structure

```
the-last-order-cafe-landing/
├── .gitignore
├── components.json              # shadcn/ui configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project documentation
├── GALLERY_IMAGES.md          # Gallery integration guide
├── PROJECT_STRUCTURE.md       # This file
└── src/
    ├── app/
    │   ├── globals.css        # Global styles and Tailwind
    │   ├── layout.tsx         # Root layout with SEO & JSON-LD
    │   └── page.tsx           # Main landing page
    ├── components/
    │   ├── Header.tsx          # Sticky header with navigation
    │   ├── Hero.tsx            # Hero section with CTAs
    │   ├── SocialProof.tsx    # Ratings and testimonials
    │   ├── Features.tsx       # Features and highlights
    │   ├── Menu.tsx            # Signature items showcase
    │   ├── Gallery.tsx         # Image gallery (placeholders)
    │   ├── FAQ.tsx             # Frequently asked questions
    │   ├── Location.tsx        # Address and map embed
    │   ├── Footer.tsx          # Footer with links
    │   └── ui/                # shadcn/ui components
    │       ├── accordion.tsx  # FAQ accordion component
    │       ├── button.tsx     # Button component
    │       └── card.tsx       # Card component
    ├── data.ts                 # All cafe data (source of truth)
    └── lib/
        └── utils.ts           # Utility functions (cn helper)
```

## Key Files

### Configuration Files
- **package.json**: Dependencies (Next.js 16, React 19, Tailwind 4, shadcn/ui)
- **tsconfig.json**: TypeScript configuration with path aliases
- **next.config.ts**: Next.js configuration
- **components.json**: shadcn/ui component configuration

### Source Files
- **src/data.ts**: Single source of truth for all cafe content
- **src/app/layout.tsx**: Root layout with SEO metadata, JSON-LD schema
- **src/app/page.tsx**: Main landing page assembling all sections
- **src/components/**: All React components for each section

### Component Breakdown

1. **Header.tsx**:
   - Sticky navigation
   - Call, Directions, WhatsApp buttons
   - Mobile menu

2. **Hero.tsx**:
   - Full-screen hero section
   - Headline and subheadline
   - Primary CTAs

3. **SocialProof.tsx**:
   - Rating display (4.6★)
   - Review count (81+)
   - Testimonials
   - Review themes

4. **Features.tsx**:
   - Feature bullets grid
   - "Best For" tags
   - About paragraph

5. **Menu.tsx**:
   - Signature items cards
   - Unique selling points

6. **Gallery.tsx**:
   - Image grid (currently placeholders)
   - See GALLERY_IMAGES.md for integration

7. **FAQ.tsx**:
   - Accordion component
   - FAQ items from data

8. **Location.tsx**:
   - Address, phone, hours
   - Google Maps embed
   - Get Directions button

9. **Footer.tsx**:
   - Contact information
   - Quick links
   - Copyright

## Data Flow

All content flows from `src/data.ts`:
- Brand information → Header, Hero, Footer
- Contact info → Header, Hero, Location, Footer
- Social proof → SocialProof component
- Menu items → Menu component
- FAQ → FAQ component
- Features → Features component

## Styling

- **Tailwind CSS 4**: Utility-first CSS
- **Color Scheme**: Amber/warm tones (amber-50 to amber-950)
- **Responsive**: Mobile-first design
- **Components**: shadcn/ui for consistent UI

## SEO Implementation

- Meta tags in `layout.tsx`
- OpenGraph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML throughout

## Next Steps

1. Add gallery images (see GALLERY_IMAGES.md)
2. Add Google Maps link to `data.ts` when available
3. Add website/Instagram links if available
4. Optimize images before deployment
5. Test on various devices and browsers



