# The Flat White Coffee House - Landing Page

A modern, mobile-first landing page for The Flat White Coffee House in Piplod, Surat.

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
the-flat-white-coffee-house-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky header with CTAs
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Social proof & reviews
│   │   ├── Features.tsx    # Why choose us section
│   │   ├── Services.tsx    # Menu highlights
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Map & contact info
│   │   └── Footer.tsx       # Footer with links
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── data.ts              # All content data
├── public/                  # Static assets
└── package.json
```

## Gallery Images

The gallery section currently uses placeholder divs. To add actual images:

1. Add your gallery images to the `public/` folder:
   - `gallery-1.jpg` - Cafe exterior and location
   - `gallery-2.jpg` - Coffee drinks close-up (flat white, cappuccino)
   - `gallery-3.jpg` - Sandwiches and bakery items
   - `gallery-4.jpg` - Interior seating and ambience
   - `gallery-5.jpg` - Evening cafe vibe
   - `gallery-6.jpg` - Specialty coffee preparation

2. Update `src/components/Gallery.tsx`:
   - Uncomment the `Image` component code
   - Update the `galleryItems` array to use your image paths
   - Remove or comment out the placeholder div

Example:
```tsx
const galleryItems = [
  { id: 1, image: "/gallery-1.jpg", alt: "Cafe exterior and location" },
  // ... etc
];
```

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call + Directions buttons
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ WhatsApp CTA button (shows only if phone number available)
- ✅ Google Maps integration
- ✅ Smooth animations with Framer Motion
- ✅ Accessible and semantic HTML
- ✅ Fast performance with Next.js optimization

## Customization

All content is stored in `src/data.ts`. Update this file to change:
- Business information
- Contact details
- Menu items
- Reviews and testimonials
- FAQ content

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for The Flat White Coffee House.



