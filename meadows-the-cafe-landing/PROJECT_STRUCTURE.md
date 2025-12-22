# Project Structure

## Complete Folder Structure

```
meadows-the-cafe-landing/
├── .gitignore
├── IMAGE_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── README.md
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

### Source Files

#### App Directory (`src/app/`)
- **layout.tsx**: Root layout with SEO meta tags, JSON-LD structured data, OpenGraph tags
- **page.tsx**: Main landing page that imports all components
- **globals.css**: Global styles with Tailwind CSS setup

#### Components (`src/components/`)
- **Header.tsx**: Sticky navigation header with mobile menu
- **Hero.tsx**: Hero section with headline, CTA buttons
- **SocialProof.tsx**: Rating display and customer testimonials
- **Features.tsx**: Features/highlights section with icons
- **Menu.tsx**: Signature items display
- **Gallery.tsx**: Image gallery (currently placeholders)
- **FAQ.tsx**: Accordion FAQ section
- **Location.tsx**: Address, contact info, and embedded map
- **Footer.tsx**: Footer with contact information and links

#### UI Components (`src/components/ui/`)
- **button.tsx**: Reusable button component (shadcn/ui)
- **card.tsx**: Card component for content sections
- **accordion.tsx**: Accordion component for FAQ

#### Data & Utilities
- **data.ts**: Single source of truth for all cafe data
- **lib/utils.ts**: Utility functions (cn helper for className merging)

## Key Features Implemented

✅ **SEO Optimization**
- Meta title and description
- Keywords
- OpenGraph tags
- JSON-LD structured data (LocalBusiness schema)

✅ **Navigation**
- Sticky header
- Smooth scroll to sections
- Mobile-responsive hamburger menu

✅ **Call-to-Actions**
- Call Now button (tel: link)
- Get Directions button (Google Maps or scroll)
- WhatsApp button (conditional, based on phone availability)

✅ **Content Sections**
- Hero with headline and CTAs
- Social proof (rating + testimonials)
- Features/highlights
- Menu/signature items
- Gallery (placeholders ready for images)
- FAQ accordion
- Location with map embed
- Footer

✅ **Design**
- Mobile-first responsive design
- Premium look with gradients
- Smooth animations and transitions
- Consistent spacing and typography

## Next Steps

1. **Add Gallery Images**: See `IMAGE_INTEGRATION.md`
2. **Update Google Maps Link**: Add to `google_maps_link` in `data.ts` if available
3. **Add WhatsApp Number**: If different from phone, update in `data.ts`
4. **Customize Colors**: Modify gradient colors in components if needed
5. **Deploy**: Ready for deployment to Vercel, Netlify, etc.

## Data Source

All content is sourced from `src/data.ts`. This is the single source of truth - no hardcoded values in components. Update this file to change any content.



