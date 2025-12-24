# The Street Cafe by Ab's Kitchen - Landing Page

A modern, mobile-first landing page for The Street Cafe by Ab's Kitchen in Vesu, Surat.

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
the-street-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO meta tags
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky header with CTAs
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Trust.tsx       # Rating and reviews
│   │   ├── Features.tsx    # Unique selling points
│   │   ├── Services.tsx    # Menu items and services
│   │   ├── Gallery.tsx     # Image gallery
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── Location.tsx    # Address and map
│   │   └── Footer.tsx      # Footer with links
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets (add gallery images here)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Gallery Images

Replace placeholder images in `src/components/Gallery.tsx`:

1. Add actual images to `public/` folder:
   - `gallery1.jpg` - Veg steamed momos close-up
   - `gallery2.jpg` - Peri peri fries and snacks
   - `gallery3.jpg` - Sandwiches and pasta
   - `gallery4.jpg` - Small cafe seating and vibe
   - `gallery5.jpg` - Exterior view on VIP Road

2. Update the `galleryImages` array in `Gallery.tsx` to import from `public/`:
```typescript
import gallery1 from "/gallery1.jpg";
// ... etc
```

## Missing Information

The following information needs to be added when available:

- **Phone number** - Update in `Navbar.tsx`, `Hero.tsx`, `Location.tsx`, and `Footer.tsx`
- **Opening hours** - Update in `Location.tsx` and `Footer.tsx`
- **WhatsApp contact** - Will automatically show when phone number is added
- **Google Maps link** - Update `googleMapsLink` variable in components

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call + Directions buttons
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ Smooth animations with Framer Motion
- ✅ Accessible components
- ✅ Fast loading and optimized

## Build for Production

```bash
npm run build
npm start
```

## License

Private project - All rights reserved.

