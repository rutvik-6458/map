# Cafe Dezire Landing Page - Project Structure

## Complete Folder Structure

```
cafe-dezire-landing/
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── README.md
├── GALLERY_IMAGES.md
├── PROJECT_STRUCTURE.md
└── src/
    ├── app/
    │   ├── layout.tsx          # Root layout with SEO, JSON-LD, OpenGraph
    │   ├── page.tsx            # Main landing page (single page)
    │   └── globals.css         # Global Tailwind styles
    ├── components/
    │   ├── Navbar.tsx          # Sticky header (Call/WhatsApp/Directions)
    │   ├── Hero.tsx            # Hero section with headline & CTAs
    │   ├── Trust.tsx           # Social proof & testimonials
    │   ├── Features.tsx        # Why choose us (6 features)
    │   ├── Services.tsx        # Menu highlights
    │   ├── Gallery.tsx         # Image gallery (placeholders)
    │   ├── FAQ.tsx             # Accordion FAQ section
    │   ├── Location.tsx        # Map embed & contact info
    │   └── Footer.tsx          # Footer with links & CTAs
    ├── data.ts                 # Single source of truth (all JSON data)
    └── lib/
        └── utils.ts            # Utility functions (cn helper)
```

## File Descriptions

### Configuration Files

- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **next.config.ts** - Next.js configuration
- **postcss.config.mjs** - PostCSS/Tailwind configuration
- **.gitignore** - Git ignore rules

### Source Files

#### App Directory (`src/app/`)
- **layout.tsx**:
  - SEO meta tags (title, description, keywords)
  - OpenGraph tags for social sharing
  - Twitter card metadata
  - JSON-LD structured data (LocalBusiness schema)
  - Font configuration (Geist Sans & Mono)

- **page.tsx**:
  - Single-page landing page
  - Imports and renders all sections in order

- **globals.css**:
  - Tailwind CSS imports
  - CSS variables
  - Global styles

#### Components (`src/components/`)

- **Navbar.tsx**:
  - Sticky header that changes on scroll
  - Navigation links (Features, Menu, Gallery, FAQ, Location)
  - Call button (if phone available)
  - WhatsApp button (if phone available)
  - Get Directions button

- **Hero.tsx**:
  - Full-screen hero section
  - Headline and subheadline
  - Rating badge
  - CTA buttons (Get Directions, Visit Cafe)
  - Feature tags (Cold Coffee, Affordable, Ice Creams)

- **Trust.tsx**:
  - Rating display (4.7 stars)
  - Review count
  - Top review themes
  - 3 testimonial cards with quotes

- **Features.tsx**:
  - 6 feature cards with icons
  - Why choose Cafe Dezire section
  - About paragraph

- **Services.tsx**:
  - Menu highlights (Cold coffee, Coffee beverages, Ice creams)
  - Best for tags
  - Service descriptions

- **Gallery.tsx**:
  - 6 image placeholders (to be replaced)
  - Grid layout (responsive)
  - Hover effects

- **FAQ.tsx**:
  - Accordion-style FAQ
  - 3 questions from data
  - Smooth animations

- **Location.tsx**:
  - Split layout (info + map)
  - Address, hours, phone
  - Google Maps embed
  - Get Directions button

- **Footer.tsx**:
  - 4-column layout
  - Quick links
  - Contact information
  - Get Directions & WhatsApp buttons
  - Copyright

#### Data & Utils

- **data.ts**:
  - Complete JSON data structure
  - Single source of truth for all content
  - Brand, contact, positioning, social proof, content blocks

- **lib/utils.ts**:
  - `cn()` function for className merging
  - Uses clsx and tailwind-merge

## Key Features Implemented

✅ **SEO Optimization**
- Meta title, description, keywords
- OpenGraph tags
- Twitter card
- JSON-LD LocalBusiness schema

✅ **Mobile-First Design**
- Responsive breakpoints
- Touch-friendly buttons
- Optimized layouts

✅ **Performance**
- Next.js Image optimization (ready for gallery)
- Code splitting
- Optimized animations

✅ **Accessibility**
- Semantic HTML
- Alt text for images
- Keyboard navigation
- ARIA labels where needed

✅ **Integration**
- WhatsApp button (conditional)
- Google Maps embed
- Phone call links
- Get Directions links

## Next Steps

1. **Add Gallery Images**: Follow `GALLERY_IMAGES.md`
2. **Update Google Maps Link**: Add to `src/data.ts` if available
3. **Test on Mobile**: Verify all sections work on mobile devices
4. **Deploy**: Ready for Vercel/Netlify deployment

## Dependencies

- **next**: 16.1.0 - React framework
- **react**: 19.2.3 - UI library
- **framer-motion**: 12.23.26 - Animations
- **lucide-react**: 0.562.0 - Icons
- **tailwindcss**: ^4 - Styling
- **clsx**: 2.1.1 - Class name utility
- **tailwind-merge**: 3.4.0 - Tailwind class merging




