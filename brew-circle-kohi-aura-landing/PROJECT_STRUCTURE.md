# Project Structure

## Complete Folder Structure

```
brew-circle-kohi-aura-landing/
├── .gitignore
├── IMAGE_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── README.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── components.json
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ui/
    │   │   ├── accordion.tsx
    │   │   ├── button.tsx
    │   │   └── card.tsx
    │   ├── FAQ.tsx
    │   ├── Features.tsx
    │   ├── Footer.tsx
    │   ├── Gallery.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Location.tsx
    │   ├── Menu.tsx
    │   └── SocialProof.tsx
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
- **SocialProof.tsx**: Rating display and customer testimonials
- **Features.tsx**: Features/highlights section with icons
- **Menu.tsx**: Signature items display
- **Gallery.tsx**: Image gallery (currently placeholders)
- **FAQ.tsx**: Accordion FAQ section
- **Location.tsx**: Address, contact info, and embedded map
- **Footer.tsx**: Footer with contact information and links

#### UI Components (`src/components/ui/`)
- **button.tsx**: Reusable button component (shadcn/ui)
- **accordion.tsx**: Accordion component for FAQ (shadcn/ui)
- **card.tsx**: Card component for menu items (shadcn/ui)

#### Data (`src/data.ts`)
- **data.ts**: Single source of truth for all content. Contains all JSON data from the original prompt.

#### Utilities (`src/lib/`)
- **utils.ts**: Utility functions (cn helper for className merging)

## Key Features

### SEO Optimization
- Meta tags in `layout.tsx`
- JSON-LD structured data (LocalBusiness schema)
- OpenGraph tags for social sharing

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Sticky header that adapts on scroll

### Performance
- Next.js Image optimization ready (for gallery images)
- Lazy loading for maps
- Optimized font loading (Inter from Google Fonts)

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements

## Color Theme

The project uses a warm amber/coffee color scheme:

- **Primary**: Amber-700, Amber-800, Amber-900
- **Backgrounds**: Amber-50, Amber-100
- **Borders**: Amber-200
- **Text**: Gray-900 (dark), Gray-700 (medium), Gray-600 (light)
- **Accents**: Amber-500, Amber-600

## Data Flow

1. All content comes from `src/data.ts`
2. Components import and use data from `cafeData`
3. No hardcoded content in components
4. Easy to update: just edit `src/data.ts`

## Component Architecture

- **Presentational Components**: All components are presentational and receive data from `cafeData`
- **Client Components**: Header, Hero, Location (use client-side features like scroll)
- **Server Components**: Footer, Features, Menu, FAQ, SocialProof, Gallery (default)





