# Project Structure

## Complete Folder Structure

```
gossip-cafe-landing/
├── .gitignore
├── GALLERY_IMAGES.md
├── PROJECT_STRUCTURE.md
├── README.md
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
- **Navbar.tsx**: Sticky navigation header with mobile menu, Call, WhatsApp, and Directions buttons
- **Hero.tsx**: Hero section with headline, subheadline, rating badge, and CTA buttons
- **Trust.tsx**: Rating display (4.0★) and customer testimonials (3 cards)
- **Features.tsx**: Features/highlights section with icons (6 items from features_bullets)
- **Services.tsx**: Signature items display (Cold coffee, Cheese sauce nachos, Garlic bread)
- **Gallery.tsx**: Image gallery (currently placeholders - see GALLERY_IMAGES.md)
- **FAQ.tsx**: Accordion FAQ section (3 questions)
- **Location.tsx**: Address, contact info, embedded map, and CTA buttons
- **Footer.tsx**: Footer with contact information, quick links, and social CTAs

#### Data (`src/data.ts`)
- **cafeData**: Single source of truth for all cafe information, structured as provided in the JSON

#### Utilities (`src/lib/`)
- **utils.ts**: Utility functions (cn for className merging)

## Color Scheme

The project uses a purple/pink color scheme:
- Primary: Purple (600, 700) - for main CTAs and accents
- Secondary: Pink (400, 600) - for highlights
- Support: Green (600) - for WhatsApp buttons
- Background: White/Gray (50, 100, 950) - for sections and text

## Key Features

1. **SEO Optimized**
   - Meta title and description
   - OpenGraph tags
   - Twitter Card
   - JSON-LD LocalBusiness schema

2. **Contact Integration**
   - Phone: Click-to-call (tel: link)
   - WhatsApp: Direct chat link (wa.me with country code)
   - Google Maps: Directions link (falls back to address search)

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

4. **Animations**
   - Framer Motion for scroll-triggered animations
   - Hover effects and transitions
   - Smooth page interactions

## Data Flow

All components import from `src/data.ts`:
- Brand information
- Contact details
- Social proof (ratings, testimonials)
- Content blocks (headlines, paragraphs, FAQs)
- Positioning and features

This ensures consistency and makes updates easy - just change the data file.


