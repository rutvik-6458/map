# Project Structure

## Folder Structure

```
the-cafe-4-you-landing/
├── .gitignore
├── README.md
├── IMAGE_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── public/                          # Static assets (add images here)
└── src/
    ├── app/
    │   ├── layout.tsx               # Root layout with SEO, JSON-LD, OpenGraph
    │   ├── page.tsx                 # Main landing page (single page)
    │   └── globals.css               # Global styles, Tailwind config
    ├── components/
    │   ├── ui/
    │   │   └── button.tsx           # shadcn/ui Button component
    │   ├── Header.tsx                # Sticky header with navigation
    │   ├── Hero.tsx                  # Hero section with CTA buttons
    │   ├── Trust.tsx                 # Social proof (rating/reviews)
    │   ├── Features.tsx              # Highlights/Features section
    │   ├── Menu.tsx                  # Menu/Services section
    │   ├── Gallery.tsx               # Gallery section (placeholder images)
    │   ├── FAQ.tsx                   # FAQ accordion section
    │   ├── Location.tsx              # Location with map embed
    │   └── Footer.tsx                # Footer with links and contact
    ├── data.ts                       # Single source of truth (JSON data)
    └── lib/
        └── utils.ts                  # Utility functions (cn helper)
```

## Key Files

### `src/data.ts`
- **Single source of truth** for all business data
- Contains brand info, contact details, positioning, social proof, content blocks
- All components read from this file

### `src/app/layout.tsx`
- Root layout with SEO metadata
- JSON-LD structured data (LocalBusiness schema)
- OpenGraph tags for social sharing
- Font configuration (Inter + Playfair Display)

### `src/app/page.tsx`
- Single-page landing page
- Imports and renders all sections in order

### Components
All components are in `src/components/`:
- **Header**: Sticky navigation with Call/Directions/WhatsApp buttons
- **Hero**: Full-screen hero with headline, CTA buttons, and background image
- **Trust**: Rating display and customer testimonials
- **Features**: About section with feature bullets and image
- **Menu**: Signature items/services with images
- **Gallery**: Image grid (6 placeholder images - needs replacement)
- **FAQ**: Accordion-style FAQ section
- **Location**: Address, hours, contact buttons, and Google Maps embed
- **Footer**: Links, contact info, social media icons

## Data Flow

```
src/data.ts (JSON)
    ↓
All Components (read from businessData)
    ↓
src/app/page.tsx (renders all components)
    ↓
src/app/layout.tsx (wraps with SEO/metadata)
```

## Styling

- **Tailwind CSS 4** with custom theme
- **CSS Variables** for colors (primary, secondary, etc.)
- **Mobile-first** responsive design
- **Custom fonts**: Inter (sans) + Playfair Display (headings)

## SEO Features

- Meta title and description
- Keywords meta tag
- OpenGraph tags (Facebook, LinkedIn)
- Twitter Card tags
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML structure

## Contact Integration

- **Phone**: `tel:` links (shows if phone number exists)
- **WhatsApp**: Auto-generated from phone number (shows if phone exists)
- **Directions**: Google Maps link or auto-generated search link
- **Map Embed**: Google Maps iframe (uses embed link or generates from address)

## Next Steps

1. **Replace gallery images** - See `IMAGE_INTEGRATION.md`
2. **Add Google Maps link** - Update `google_maps_link` in `src/data.ts`
3. **Add actual hero image** - Update in `src/components/Hero.tsx`
4. **Update menu images** - Replace in `src/components/Menu.tsx`
5. **Customize colors** - Edit CSS variables in `src/app/globals.css`
6. **Update domain URLs** - Replace placeholder URLs in `src/app/layout.tsx`





