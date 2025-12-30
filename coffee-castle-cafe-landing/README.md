# Coffee Castle Cafe Landing Page

A modern, mobile-first landing page for Coffee Castle Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Single-page landing design
- ✅ Mobile-first responsive layout
- ✅ Sticky header with Call, Directions, and WhatsApp buttons (conditionally shown)
- ✅ SEO optimized with meta tags, JSON-LD structured data, and OpenGraph tags
- ✅ All sections: Hero, Social Proof, Features, Menu, Gallery, FAQ, Location, Footer
- ✅ Fast loading and optimized performance
- ✅ Premium, modern UI with smooth animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
coffee-castle-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles & Tailwind setup
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── accordion.tsx
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── SocialProof.tsx  # Ratings & testimonials
│   │   ├── Features.tsx     # Features & highlights
│   │   ├── Menu.tsx         # Signature items/services
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address & map
│   │   └── Footer.tsx       # Footer with links
│   ├── data.ts              # Cafe data (source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Configuration Needed

Before deploying, update the following if available:

1. **Phone Number**: Add phone number in `src/data.ts`:
   - `contact.phone` - Will enable Call and WhatsApp buttons

2. **Google Maps Link**: Add Google Maps link in `src/data.ts`:
   - `contact.google_maps_link` - Will enable direct map navigation

## Gallery Images

The Gallery section currently uses placeholder images. To replace them:

1. Add your gallery images to `src/assets/` or `public/` folder
2. Update `src/components/Gallery.tsx` to import and use your images
3. Recommended images based on the shotlist:
   - Exterior of Safal Square entrance
   - Cafe interior seating
   - Private seating areas
   - Coffee cups on table
   - Overall cafe ambience

Example replacement in `Gallery.tsx`:
```tsx
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
// ... etc

// Then in the component:
<Image src={gallery1} alt="Cafe interior" fill className="object-cover" />
```

## Build for Production

```bash
npm run build
npm start
```

## Data Source

All content is sourced from `src/data.ts`. This is the single source of truth for:
- Brand information
- Contact details
- Social proof (ratings, reviews)
- Content blocks (headlines, descriptions, FAQs)
- Positioning and features

Update `src/data.ts` to modify any content on the site.

## SEO Features

- Meta title and description
- JSON-LD structured data (LocalBusiness schema)
- OpenGraph tags for social sharing
- Twitter Card support
- Semantic HTML structure

## Notes

- WhatsApp button only shows if phone number is provided
- Get Directions button links to Google Maps if link is provided, otherwise scrolls to location section
- Call button only shows if phone number is provided
- All buttons are conditionally rendered based on available data



