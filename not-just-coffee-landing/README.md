# Not Just Coffee - Landing Page

A modern, mobile-first landing page for Not Just Coffee, a cozy coffee shop in Vesu, Surat.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
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
not-just-coffee-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky header with CTAs
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Trust.tsx       # Social proof & reviews
│   │   ├── Features.tsx    # Key features
│   │   ├── Services.tsx    # Menu/services
│   │   ├── Gallery.tsx     # Image gallery (placeholders)
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── Location.tsx    # Map & contact info
│   │   └── Footer.tsx      # Footer with links
│   ├── data.ts             # Business data (source of truth)
│   └── lib/
│       └── utils.ts        # Utility functions
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call, WhatsApp, and Directions buttons
- ✅ SEO optimized (meta tags, JSON-LD schema, OpenGraph)
- ✅ Smooth animations with Framer Motion
- ✅ Google Maps integration
- ✅ WhatsApp CTA (when phone number available)
- ✅ All sections: Hero, Trust, Features, Services, Gallery, FAQ, Location, Footer

## Gallery Images

**Important:** The gallery section currently uses placeholder images. Replace them with actual photos:

1. Add images to `src/assets/` folder:
   - `gallery1.jpg` - Cafe exterior on VIP Road
   - `gallery2.jpg` - Interior seating and ambience
   - `gallery3.jpg` - Desserts close-up
   - `gallery4.jpg` - Coffee and drinks
   - `gallery5.jpg` - Clean and cozy table setups
   - `gallery6.jpg` - Additional cafe atmosphere

2. Update `src/components/Gallery.tsx` to import and use the actual images.

See `GALLERY_IMAGES.md` for detailed instructions.

## Data Source

All content comes from `src/data.ts`. Update this file to change any business information, content, or features.

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for Not Just Coffee.

