# Baithak Cafe Landing Page - Project Structure

## Complete Folder Structure

```
baithak-cafe-landing/
├── .gitignore
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js TypeScript definitions
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── PROJECT_STRUCTURE.md         # This file
├── IMAGE_INTEGRATION.md         # Guide for adding images
├── README.md                    # Project documentation
├── tsconfig.json                # TypeScript configuration
│
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout with SEO & JSON-LD
    │   ├── page.tsx             # Main landing page (single page)
    │   └── globals.css           # Global styles & Tailwind setup
    │
    ├── components/
    │   ├── ui/                  # shadcn/ui base components
    │   │   ├── accordion.tsx    # FAQ accordion component
    │   │   ├── button.tsx       # Button component
    │   │   └── card.tsx         # Card component
    │   │
    │   ├── Header.tsx           # Sticky header with navigation & CTAs
    │   ├── Hero.tsx             # Hero section with headline & CTAs
    │   ├── SocialProof.tsx      # Ratings, reviews & testimonials
    │   ├── Features.tsx         # Features, highlights & "best for"
    │   ├── Menu.tsx             # Signature items & USPs
    │   ├── Gallery.tsx         # Image gallery (placeholders)
    │   ├── FAQ.tsx              # Frequently asked questions
    │   ├── Location.tsx         # Address, contact & map
    │   └── Footer.tsx           # Footer with links & info
    │
    ├── data.ts                  # Single source of truth (all JSON data)
    └── lib/
        └── utils.ts             # Utility functions (cn helper)
```

## Key Files Overview

### Configuration Files
- **package.json**: All dependencies (Next.js 16, Tailwind v4, shadcn/ui, Lucide icons)
- **tsconfig.json**: TypeScript paths configured with `@/*` alias
- **components.json**: shadcn/ui setup pointing to `src/components/ui`
- **next.config.ts**: Basic Next.js config (ready for customization)

### Source Files

#### `src/app/layout.tsx`
- SEO meta tags (title, description, keywords, OpenGraph)
- JSON-LD structured data (LocalBusiness schema)
- Root HTML structure with Inter font

#### `src/app/page.tsx`
- Single-page layout
- Imports and renders all section components in order

#### `src/data.ts`
- **Single source of truth** for all content
- Contains all JSON data from the prompt
- Update this file to change any content

#### Components

1. **Header.tsx**:
   - Sticky header with scroll detection
   - Navigation menu (desktop & mobile)
   - Call, Directions, WhatsApp buttons
   - Conditional rendering based on data availability

2. **Hero.tsx**:
   - Large headline (first option from data)
   - Subheadline
   - Primary CTAs (Call, Directions, WhatsApp)
   - Hours and address display

3. **SocialProof.tsx**:
   - Star rating display
   - Review count
   - Testimonial quotes
   - Top review themes

4. **Features.tsx**:
   - About paragraph
   - Feature bullets with icons
   - "Best for" badges

5. **Menu.tsx**:
   - Signature items cards
   - Unique selling points

6. **Gallery.tsx**:
   - Placeholder grid (6 items)
   - Ready for image integration
   - See IMAGE_INTEGRATION.md

7. **FAQ.tsx**:
   - Accordion component
   - All FAQ items from data

8. **Location.tsx**:
   - Address, phone, hours cards
   - Google Maps embed (if URL provided)
   - Fallback placeholder if no embed URL
   - "Get Directions" button

9. **Footer.tsx**:
   - Business info
   - Contact details
   - Quick links
   - Copyright

## Data Flow

All components import from `src/data.ts`:
```typescript
import { cafeData } from "@/data";
```

This ensures:
- Single source of truth
- Easy content updates
- Type safety
- No hardcoded values

## Styling

- **Tailwind CSS v4**: Modern utility-first CSS
- **Color Scheme**: Orange/red gradient theme (matches cafe branding)
- **Responsive**: Mobile-first design with breakpoints
- **Components**: shadcn/ui for consistent UI patterns

## Next Steps

1. **Install dependencies**: `npm install`
2. **Run dev server**: `npm run dev`
3. **Add images**: Follow IMAGE_INTEGRATION.md
4. **Update data**: Edit `src/data.ts` for any content changes
5. **Add Google Maps**: Add `google_maps_link` to `data.ts` for map embed
6. **Customize colors**: Update Tailwind classes if needed

## Notes

- WhatsApp button only shows if phone number is available
- Google Maps embed requires a valid embed URL in `google_maps_link`
- All CTAs are functional and use data from `data.ts`
- Gallery uses placeholders - see IMAGE_INTEGRATION.md for setup
- SEO and JSON-LD are fully configured in `layout.tsx`




