# Project Structure

## Complete Folder Structure

```
cafe-buddys-espresso-landing/
├── .gitignore
├── IMAGE_INTEGRATION.md
├── next-env.d.ts
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
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Location.tsx
    │   ├── Menu.tsx
    │   ├── SocialProof.tsx
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── button.tsx
    │       └── card.tsx
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
- **.gitignore**: Git ignore rules
- **next-env.d.ts**: Next.js TypeScript declarations

### Source Files

#### App Directory (`src/app/`)
- **layout.tsx**: Root layout with SEO meta tags, JSON-LD structured data, OpenGraph tags
- **page.tsx**: Main landing page that imports all components
- **globals.css**: Global styles with Tailwind CSS setup

#### Components (`src/components/`)
- **Header.tsx**: Sticky navigation header with mobile menu
- **Hero.tsx**: Hero section with headline, CTA buttons (Call, Directions, WhatsApp)
- **SocialProof.tsx**: Rating display and customer testimonials
- **Features.tsx**: Features/highlights section with icons
- **Menu.tsx**: Services display (Espresso, Dine-in, Drive-through)
- **Gallery.tsx**: Image gallery (currently placeholders - see IMAGE_INTEGRATION.md)
- **FAQ.tsx**: Accordion FAQ section
- **Location.tsx**: Address, contact info, and embedded map
- **Footer.tsx**: Footer with contact information and links

#### UI Components (`src/components/ui/`)
- **button.tsx**: shadcn/ui Button component
- **card.tsx**: shadcn/ui Card component
- **accordion.tsx**: shadcn/ui Accordion component

#### Data & Utils
- **data.ts**: All cafe data from the provided JSON (single source of truth)
- **lib/utils.ts**: Utility functions (cn for className merging)

## Key Features

### Conditional Rendering
- WhatsApp button only shows if phone number is available
- Get Directions button uses Google Maps link if available, otherwise scrolls to Location section
- Business hours section only renders if hours are provided

### SEO & Metadata
- Complete meta tags in layout.tsx
- JSON-LD structured data (LocalBusiness schema)
- OpenGraph tags for social sharing
- Twitter card tags

### Responsive Design
- Mobile-first approach
- Sticky header with mobile menu
- Responsive grid layouts
- Touch-friendly buttons

### Performance
- Next.js Image optimization ready
- Lazy loading for map iframe
- Optimized Tailwind CSS build

## Data Source

All content comes from `src/data.ts`, which contains:
- Brand information
- Contact details
- Positioning and USP
- Social proof (ratings, reviews)
- Content blocks (headlines, features, FAQ)
- Assets needed list

## Next Steps

1. **Add Gallery Images**: See `IMAGE_INTEGRATION.md` for instructions
2. **Update Business Hours**: Add hours to `src/data.ts` if available
3. **Add Google Maps Link**: Update `google_maps_link` in `src/data.ts` if available
4. **Customize Colors**: Modify Tailwind classes or CSS variables in `globals.css` if needed



