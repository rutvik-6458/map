# BB Social Landing Page

A modern, mobile-first landing page for BB Social - a poolside cafe in Vesu, Surat.

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
bb-social-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── SocialProof.tsx  # Rating & testimonials
│   │   ├── Features.tsx     # Features/Highlights
│   │   ├── Menu.tsx         # Menu highlights
│   │   ├── Gallery.tsx      # Photo gallery (placeholders)
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── Location.tsx      # Address & map
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui config
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with smooth scroll navigation
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ Call, WhatsApp, and Directions CTAs
- ✅ Rating and social proof display
- ✅ Interactive FAQ accordion
- ✅ Google Maps integration ready
- ✅ Premium, modern UI with gradients

## Image Integration

### Gallery Section

Replace placeholder images in `src/components/Gallery.tsx`. The component currently shows placeholders for:

1. Poolside seating and ambience
2. Coffee and mojito drinks
3. Popular food items like tacos and nachos
4. Game zone with board games
5. Exterior view at BB Club Bhagban

**To add images:**
1. Add images to `public/` folder (e.g., `public/gallery-1.jpg`)
2. Update `Gallery.tsx` to use `next/image`:
```tsx
import Image from "next/image";

<Image
  src="/gallery-1.jpg"
  alt="Poolside seating"
  fill
  className="object-cover"
/>
```

### Google Maps Embed

To add a Google Maps embed:

1. Get your Google Maps embed URL or API key
2. Update `src/components/Location.tsx`:
   - Replace `googleMapsLink` with your embed URL, OR
   - Add your API key to the embed URL template

## Customization

### Colors

The theme uses blue/cyan gradients. To change colors:
- Update gradient classes in components (e.g., `from-blue-600 to-cyan-600`)
- Modify CSS variables in `src/app/globals.css`

### Content

All content is sourced from the provided JSON data and embedded in components. Update component files to modify text, hours, menu items, etc.

## Build

```bash
npm run build
npm start
```

## License

Private project for BB Social.



