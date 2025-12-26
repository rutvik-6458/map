# Project Structure

## Folder Structure

```
the-pancake-story-landing/
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── PROJECT_STRUCTURE.md
├── README.md
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── FAQ.tsx
    │   ├── Features.tsx
    │   ├── Footer.tsx
    │   ├── Gallery.tsx
    │   ├── Hero.tsx
    │   ├── Location.tsx
    │   ├── Navbar.tsx
    │   ├── Services.tsx
    │   └── Trust.tsx
    ├── data.ts
    └── lib/
        └── utils.ts
```

## File Descriptions

### Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS/Tailwind configuration
- `.gitignore` - Git ignore rules

### Source Files

#### App Router (`src/app/`)
- `layout.tsx` - Root layout with SEO metadata, JSON-LD schema, and OpenGraph tags
- `page.tsx` - Main landing page that imports all components
- `globals.css` - Global styles and Tailwind imports

#### Components (`src/components/`)
- `Navbar.tsx` - Sticky header with navigation, Call, WhatsApp, and Directions buttons
- `Hero.tsx` - Hero section with headline, CTAs, and rating badge
- `Trust.tsx` - Social proof section with rating, review count, and testimonials
- `Features.tsx` - Features/highlights section with icons
- `Services.tsx` - Menu highlights showcasing signature items
- `Gallery.tsx` - Image gallery (placeholder images - needs replacement)
- `FAQ.tsx` - Accordion FAQ section
- `Location.tsx` - Location section with address, hours, and embedded Google Maps
- `Footer.tsx` - Footer with contact info, links, and social proof

#### Data & Utils
- `data.ts` - Single source of truth for all business data (JSON structure)
- `lib/utils.ts` - Utility functions (cn helper for className merging)

## Component Dependencies

All components import:
- `@/data` - Business data
- `@/lib/utils` - Utility functions (for className merging)
- `framer-motion` - Animations
- `lucide-react` - Icons

## Data Flow

All business information flows from `src/data.ts`:
- Brand information (name, tagline, category)
- Contact details (address, phone, hours, maps link)
- Positioning (best for, signature items, USPs)
- Social proof (rating, reviews, testimonials)
- Content blocks (headlines, descriptions, FAQs, features)
- Assets needed (sections, photo shotlist)

## Styling

- Uses Tailwind CSS v4
- Color scheme: Orange/Pink/Amber (warm dessert theme)
- Mobile-first responsive design
- Custom animations via Framer Motion

## SEO & Metadata

- Meta title and description in `layout.tsx`
- JSON-LD structured data (LocalBusiness schema)
- OpenGraph tags for social sharing
- Twitter card metadata

