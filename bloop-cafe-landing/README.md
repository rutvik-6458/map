# BLOOP Cafe Landing Page

A modern, mobile-first landing page for BLOOP Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ **Modern Design**: Premium, clean UI with earthy color scheme (amber/brown tones)
- ✅ **Mobile-First**: Fully responsive design optimized for all devices
- ✅ **SEO Optimized**: Complete meta tags, OpenGraph, and JSON-LD structured data
- ✅ **Fast Performance**: Optimized with Next.js App Router
- ✅ **Sticky Header**: Navigation bar with Call, Directions, and WhatsApp buttons (conditionally rendered)
- ✅ **Complete Sections**: Hero, Trust, Features, Menu, Gallery, FAQ, Location, Footer

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components (Radix UI primitives)
- **Lucide React** icons

## Getting Started

### Installation

```bash
cd bloop-cafe-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
bloop-cafe-landing/
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
│   │   ├── SocialProof.tsx  # Rating & testimonials
│   │   ├── Features.tsx     # Features & highlights
│   │   ├── Menu.tsx         # Signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address & map embed
│   │   └── Footer.tsx       # Footer with links
│   ├── data.ts              # Cafe data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json          # shadcn/ui configuration
```

## Gallery Images

The gallery section currently uses placeholder images. To replace them:

1. **Recommended Images** (from photo shotlist):
   - Cafe interior and earthy decor
   - Coffee and food close-ups
   - Mushroom toast
   - Customers enjoying the space
   - Exterior and canal road surroundings

2. **To Add Images**:
   - Add images to `src/assets/` or `public/` directory
   - Update `src/components/Gallery.tsx` to import and use actual images
   - Recommended format: `.jpg`, `.jpeg`, or `.webp`
   - Recommended size: 1200x1200px or similar square aspect ratio
   - Optimize images before adding (use tools like ImageOptim or Squoosh)

3. **Example Update**:
   ```tsx
   // In Gallery.tsx, replace the placeholder logic with:
   import gallery1 from "@/assets/gallery1.jpg";
   import gallery2 from "@/assets/gallery2.jpg";
   // ... etc

   const galleryImages = [gallery1, gallery2, ...];
   ```

## Configuration

### Update Contact Information

If phone number or Google Maps link becomes available, update `src/data.ts`:

```typescript
contact: {
  phone: "Your phone number here", // Will show Call/WhatsApp buttons
  google_maps_link: "Your Google Maps link here", // Will use direct link
  // ...
}
```

### Color Scheme

The landing page uses an earthy color scheme:
- Primary: Amber/Brown tones (`amber-600`, `amber-700`, `amber-800`, `amber-900`)
- Background: Stone/Beige tones (`stone-50`, `stone-100`, `stone-200`)
- Accents: Green for WhatsApp, Amber for CTAs

Colors are defined in component files and can be customized by updating Tailwind classes.

## SEO Features

- ✅ Meta title and description
- ✅ OpenGraph tags for social sharing
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design

## Notes

- Phone number and Google Maps link are currently empty, so Call/WhatsApp buttons are hidden
- When phone number is added, Call and WhatsApp buttons will automatically appear
- When Google Maps link is added, it will be used directly instead of address search
- Gallery uses placeholder images - replace with actual photos per instructions above


