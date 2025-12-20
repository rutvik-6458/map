# Pokket Cafe – Atria Landing Page

A modern, single-page landing page for Pokket Cafe – Atria built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- ✅ Modern, mobile-first design
- ✅ Sticky header with navigation
- ✅ Hero section with CTAs
- ✅ Trust section with ratings and reviews
- ✅ Features/Highlights section
- ✅ Menu section with signature items
- ✅ **Gallery with click-to-scroll functionality** - Click on gallery images to scroll to menu items
- ✅ FAQ section
- ✅ Location section with map embed
- ✅ Footer with contact information
- ✅ SEO optimized with meta tags, JSON-LD, and OpenGraph
- ✅ WhatsApp integration
- ✅ Google Maps integration

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **Lucide React** icons

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
pokket-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO meta tags
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Ratings and reviews
│   │   ├── Features.tsx     # Features/Highlights
│   │   ├── Menu.tsx         # Menu items (with highlight support)
│   │   ├── Gallery.tsx      # Gallery with click-to-scroll
│   │   ├── FAQ.tsx          # FAQ section
│   │   ├── Location.tsx     # Location with map
│   │   └── Footer.tsx       # Footer
│   ├── data.ts              # Business data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
```

## Gallery Images - Where to Replace

The gallery images are currently using placeholder images from Unsplash. To replace them with actual photos:

1. **Location**: `src/components/Gallery.tsx`
2. **Array**: `GALLERY_IMAGES` (lines 5-30)
3. **Replace the `src` URLs** with your actual image URLs or paths

### Recommended Images:
- Cheese Burst Pizza close-up
- Pasta and French Fries on table
- Cafe interior and seating
- Friends or family dining
- Exterior view at SNS Atria
- Blue Ocean Ice Tea

### Example:
```typescript
const GALLERY_IMAGES = [
  {
    src: "/images/cafe-interior.jpg",  // Replace with actual path
    alt: "Cafe Interior",
    menuItem: null,
  },
  {
    src: "/images/cheese-burst-pizza.jpg",
    alt: "Cheese Burst Pizza",
    menuItem: "Cheese Burst Pizza",  // This will scroll to menu when clicked
  },
  // ... more images
];
```

## Gallery Click-to-Scroll Feature

When users click on gallery images that have a `menuItem` property, the page will:
1. Scroll smoothly to the Menu section
2. Highlight the corresponding menu item with a ring animation
3. The highlight automatically disappears after 3 seconds

## Configuration

### Business Data
All business information is stored in `src/data.ts`. Update this file to change:
- Business name, tagline, address
- Contact information
- Menu items
- Reviews and ratings
- FAQ content

### Google Maps
To add Google Maps embed:
1. Update `google_maps_link` in `src/data.ts`
2. Or add a Google Maps embed URL in `src/components/Location.tsx`

### WhatsApp
WhatsApp button uses the phone number from `src/data.ts`. Make sure the phone number is in international format (without spaces).

## SEO

The page includes:
- Meta title and description
- OpenGraph tags
- Twitter Card tags
- JSON-LD structured data (LocalBusiness schema)

Update these in `src/app/layout.tsx`.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Replace placeholder images in Gallery component
- Update Google Maps link if available
- Add actual social media links in Footer
- Update opening hours if exact time is known
- Replace placeholder hero background image

## License

Private project for Pokket Cafe – Atria.

