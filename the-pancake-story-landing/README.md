# The Pancake Story - Landing Page

A modern, single-page landing page for The Pancake Story dessert cafe in Vesu, Surat.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

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
the-pancake-story-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO & JSON-LD
│   │   ├── page.tsx          # Main landing page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with CTAs
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Trust.tsx         # Social proof & reviews
│   │   ├── Features.tsx      # Features/Highlights
│   │   ├── Services.tsx      # Menu highlights
│   │   ├── Gallery.tsx       # Image gallery
│   │   ├── FAQ.tsx           # FAQ accordion
│   │   ├── Location.tsx      # Location with map
│   │   └── Footer.tsx        # Footer
│   ├── data.ts              # All business data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
└── package.json
```

## Image Replacement Instructions

### Gallery Images

Replace the placeholder images in the Gallery component. The component is located at:
- `src/components/Gallery.tsx`

**Current placeholders:**
- `/placeholder-pancake-1.jpg` - Signature pancakes with toppings
- `/placeholder-pancake-2.jpg` - Chocolate desserts and waffles
- `/placeholder-pancake-3.jpg` - Interior seating and ambience
- `/placeholder-pancake-4.jpg` - Milkshakes and beverages
- `/placeholder-pancake-5.jpg` - Evening dessert crowd
- `/placeholder-pancake-6.jpg` - Variety of pancake flavors

**To replace:**

1. Add your images to the `public/` folder (e.g., `public/gallery-1.jpg`, `public/gallery-2.jpg`, etc.)

2. Update `src/components/Gallery.tsx`:
   - Replace the placeholder paths in the `galleryItems` array
   - Uncomment the `Image` component code
   - Remove or comment out the placeholder div

**Example:**
```tsx
const galleryItems = [
  { id: 1, image: "/gallery-1.jpg", alt: "Signature pancakes with toppings" },
  { id: 2, image: "/gallery-2.jpg", alt: "Chocolate desserts and waffles" },
  // ... etc
];
```

### Hero Image (Optional)

If you want to add a hero background image instead of the gradient:

1. Add the image to `src/assets/` (e.g., `src/assets/hero.jpg`)
2. Update `src/components/Hero.tsx`:
   - Import the image: `import heroImage from "@/assets/hero.jpg";`
   - Replace the gradient div with an Image component (similar to the pattern in other landing pages)

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call + Directions buttons
- ✅ WhatsApp CTA button (shows only if phone number available)
- ✅ Get Directions button (links to Google Maps)
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ Smooth animations with Framer Motion
- ✅ All data sourced from `src/data.ts` (single source of truth)

## Sections

1. **Hero** - Eye-catching hero with CTAs
2. **Trust** - Rating, reviews, and testimonials
3. **Features** - Key highlights and selling points
4. **Services** - Menu highlights and signature items
5. **Gallery** - Visual showcase (images need to be added)
6. **FAQ** - Common questions with accordion
7. **Location** - Address, hours, and embedded Google Maps
8. **Footer** - Contact info and quick links

## Customization

All business data is centralized in `src/data.ts`. Update this file to change:
- Business name, tagline, description
- Contact information
- Menu items, features, FAQs
- Social proof (ratings, reviews)

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The Google Maps link is auto-generated from the address if `google_maps_link` is empty in `data.ts`
- WhatsApp link is auto-generated from the phone number
- All components are optimized for performance and accessibility
- The design uses a warm color palette (orange/pink/amber) suitable for a dessert cafe

