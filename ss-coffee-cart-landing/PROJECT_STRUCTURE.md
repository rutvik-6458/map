# Project Structure

## Complete Folder Structure

```
ss-coffee-cart-landing/
├── .gitignore
├── IMAGE_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── README.md
├── components.json
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── assets/
    │   └── (add gallery images here)
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
- **components.json**: shadcn/ui setup
- **.gitignore**: Git ignore rules

### Source Files

#### App Directory (`src/app/`)
- **layout.tsx**: Root layout with SEO meta tags, JSON-LD structured data, OpenGraph tags
- **page.tsx**: Main landing page that imports all components
- **globals.css**: Global styles with Tailwind CSS setup

#### Components (`src/components/`)
- **Header.tsx**: Sticky navigation header with mobile menu, Call/Directions/WhatsApp buttons
- **Hero.tsx**: Hero section with headline, subheadline, CTA buttons
- **SocialProof.tsx**: Rating display and customer testimonials
- **Features.tsx**: Features/highlights section with icons
- **Menu.tsx**: Signature items display
- **Gallery.tsx**: Image gallery (currently placeholders - see IMAGE_INTEGRATION.md)
- **FAQ.tsx**: Accordion FAQ section
- **Location.tsx**: Address, contact info, and embedded map
- **Footer.tsx**: Footer with contact information and links

#### UI Components (`src/components/ui/`)
- **button.tsx**: Reusable button component (shadcn/ui)
- **accordion.tsx**: Accordion component for FAQ (shadcn/ui)
- **card.tsx**: Card component for menu items (shadcn/ui)

#### Data & Utils
- **data.ts**: Single source of truth - all JSON data from the prompt
- **lib/utils.ts**: Utility functions (cn helper for className merging)

## Key Features

### Conditional Rendering
- Phone/Call button: Only shows if phone number is available in data
- WhatsApp button: Only shows if phone number is available
- Hours display: Only shows if hours are available in data
- Google Maps link: Uses provided link if available, otherwise generates from address

### SEO Optimization
- Meta title and description
- OpenGraph tags for social sharing
- Twitter card tags
- JSON-LD structured data (LocalBusiness schema)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Sticky header with mobile menu
- Responsive grid layouts

## Data Structure

All content is in `src/data.ts` following this structure:
- `brand`: Business name, category, location, taglines
- `contact`: Address, phone, Google Maps link, hours
- `positioning`: Best for, signature items, unique selling points
- `social_proof`: Rating, review count, testimonials, review themes
- `content_blocks`: Headlines, about paragraph, features, FAQ, CTAs
- `assets_needed`: Recommended sections, photo shotlist
- `missing_info_to_request`: List of missing information

## Next Steps

1. Add gallery images (see IMAGE_INTEGRATION.md)
2. Update phone number in `src/data.ts` if available
3. Update business hours in `src/data.ts` if available
4. Add Google Maps embed link in `src/data.ts` if available
5. Customize colors/branding if needed
6. Test on mobile and desktop
7. Deploy to hosting platform


