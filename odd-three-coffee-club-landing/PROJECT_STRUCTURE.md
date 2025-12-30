# Project Structure

## Complete Folder Structure

```
odd-three-coffee-club-landing/
├── .gitignore
├── IMAGE_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── README.md
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ui/
    │   │   └── button.tsx
    │   ├── FAQ.tsx
    │   ├── Features.tsx
    │   ├── Footer.tsx
    │   ├── Gallery.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Location.tsx
    │   ├── Menu.tsx
    │   └── Trust.tsx
    ├── data.ts
    └── lib/
        └── utils.ts
```

## File Descriptions

### Configuration Files
- **package.json**: Dependencies and scripts
- **tsconfig.json**: TypeScript configuration
- **next.config.ts**: Next.js configuration
- **postcss.config.mjs**: PostCSS configuration for Tailwind
- **components.json**: shadcn/ui component configuration
- **.gitignore**: Git ignore rules

### Source Files

#### App Directory (`src/app/`)
- **layout.tsx**: Root layout with SEO meta tags, JSON-LD structured data, OpenGraph tags
- **page.tsx**: Main landing page that imports all components
- **globals.css**: Global styles with Tailwind CSS setup

#### Components (`src/components/`)
- **Header.tsx**: Sticky navigation header with mobile menu
- **Hero.tsx**: Hero section with headline, CTA buttons
- **Trust.tsx**: Rating display and customer testimonials
- **Features.tsx**: Features/highlights section with icons
- **Menu.tsx**: Signature items display
- **Gallery.tsx**: Image gallery (currently placeholders)
- **FAQ.tsx**: Accordion FAQ section
- **Location.tsx**: Address, contact info, and embedded map
- **Footer.tsx**: Footer with contact information and links

#### UI Components (`src/components/ui/`)
- **button.tsx**: Reusable button component (shadcn/ui)

#### Data & Utils
- **data.ts**: Single source of truth - all business data from JSON
- **lib/utils.ts**: Utility functions (cn helper for className merging)

## Key Features

### SEO Optimization
- Meta title and description
- JSON-LD LocalBusiness schema
- OpenGraph tags for social sharing
- Twitter card metadata

### Responsive Design
- Mobile-first approach
- Sticky header with scroll detection
- Mobile menu with hamburger icon
- Responsive grid layouts

### Interactive Elements
- Smooth scroll navigation
- Active section highlighting in header
- Accordion FAQ component
- Hover effects on cards and images

### Contact Integration
- Phone number with tel: links
- WhatsApp integration (uses phone number)
- Google Maps integration with fallback
- Get Directions button

## Data Flow

All content is sourced from `src/data.ts`. This is the single source of truth. To update any content:

1. Open `src/data.ts`
2. Modify the relevant field
3. Changes will reflect across all components automatically

## Component Dependencies

```
page.tsx
├── Header
├── Hero
├── Trust
├── Features
├── Menu
├── Gallery
├── FAQ
├── Location
└── Footer

All components import:
- businessData from ../data
- UI components from ./ui/
- Icons from lucide-react
- Utils from ../lib/utils
```

## Styling

- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Variables**: Theme colors defined in globals.css
- **Custom Fonts**: Inter (sans-serif) and Playfair Display (headings)
- **Color Scheme**: Warm coffee browns and creams

## Next Steps

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Replace placeholder images (see IMAGE_INTEGRATION.md)
4. Update Google Maps link in data.ts if available
5. Customize colors in globals.css if needed
6. Deploy to hosting platform





