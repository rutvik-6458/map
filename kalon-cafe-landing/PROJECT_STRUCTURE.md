# Project Structure

```
kalon-cafe-landing/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
├── GALLERY_IMAGES.md
├── PROJECT_STRUCTURE.md
│
├── public/                          # Static assets
│   └── (add gallery images here)
│
└── src/
    ├── app/
    │   ├── layout.tsx               # Root layout with SEO, JSON-LD, metadata
    │   ├── page.tsx                 # Main landing page (assembles all sections)
    │   └── globals.css              # Global Tailwind styles
    │
    ├── components/
    │   ├── ui/                      # shadcn/ui components
    │   │   ├── button.tsx           # Button component
    │   │   └── accordion.tsx        # Accordion component for FAQ
    │   │
    │   ├── Navbar.tsx               # Sticky header with navigation, Call, Directions
    │   ├── Hero.tsx                 # Hero section with headline, CTAs (Call, Directions, WhatsApp)
    │   ├── Trust.tsx                # Rating display and customer testimonials
    │   ├── Features.tsx             # Unique selling points + "Best For" section
    │   ├── Menu.tsx                 # Signature items/services display
    │   ├── Gallery.tsx              # Image gallery with placeholders
    │   ├── FAQ.tsx                  # Frequently asked questions with accordion
    │   ├── Location.tsx             # Address, contact info, Google Maps embed
    │   └── Footer.tsx               # Footer with links, contact, copyright
    │
    ├── data.ts                      # Single source of truth - all business data
    │
    └── lib/
        └── utils.ts                 # Utility functions (cn for className merging)
```

## Key Files

### Data Source
- **`src/data.ts`**: Contains all business information (brand, contact, positioning, social proof, content blocks). This is the single source of truth. Update this file to change any content on the site.

### Main Page
- **`src/app/page.tsx`**: Imports and assembles all section components in order

### Layout & SEO
- **`src/app/layout.tsx`**:
  - Sets up root HTML structure
  - Includes SEO metadata (title, description, keywords, OpenGraph, Twitter)
  - Adds JSON-LD structured data (LocalBusiness schema)
  - Configures Inter font

### Components
All components are located in `src/components/`:
- Each component is self-contained and uses data from `src/data.ts`
- Components follow React best practices with TypeScript
- Mobile-first responsive design with Tailwind CSS

### Styling
- **`src/app/globals.css`**: Global Tailwind CSS configuration with theme variables
- All components use Tailwind utility classes for styling
- Design system uses amber/gold color scheme for the cafe brand

## How to Update Content

1. **Business Information**: Edit `src/data.ts`
2. **Styling**: Modify Tailwind classes in component files
3. **Add Images**: See `GALLERY_IMAGES.md`
4. **Add Sections**: Create new component in `src/components/` and import in `src/app/page.tsx`

## Dependencies

Key dependencies (see `package.json`):
- Next.js 16.1.0 (App Router)
- React 19.2.3
- Tailwind CSS 4
- shadcn/ui components (Radix UI + class-variance-authority)
- Lucide React (icons)
- TypeScript 5


