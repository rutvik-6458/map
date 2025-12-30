# Waves Cafe Landing Page

A modern, single-page landing page for Waves Cafe built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ SEO optimized with meta tags, JSON-LD, and OpenGraph
- ✅ Smooth animations with Framer Motion
- ✅ All sections: Hero, Trust, Features, Services, Gallery, FAQ, Location, Footer

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

## Gallery Images

The gallery component currently uses placeholder divs. To add actual images:

1. Add your gallery images to `src/assets/` folder:
   - `gallery1.jpg` - Cafe exterior
   - `gallery2.jpg` - Interior seating and ambience
   - `gallery3.jpg` - Food and drinks close-up
   - `gallery4.jpg` - Menu display
   - `gallery5.jpg` - Overall cafe vibe
   - `gallery6.jpg` - Cafe atmosphere

2. Open `src/components/Gallery.tsx` and:
   - Import the images at the top:
   ```typescript
   import gallery1 from "@/assets/gallery1.jpg";
   import gallery2 from "@/assets/gallery2.jpg";
   // ... etc
   ```

   - Update the `galleryItems` array to include the image imports
   - Uncomment the `<Image>` component and remove the placeholder `<div>`

## Missing Information

The following information is currently empty and should be added when available:
- Phone number (will enable Call and WhatsApp buttons)
- Business hours
- Google Maps link (currently uses address-based fallback)
- Menu details
- Website or social media links

## Project Structure

```
waves-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Rating/reviews
│   │   ├── Features.tsx     # Highlights
│   │   ├── Services.tsx     # Menu/services
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── FAQ.tsx          # FAQ section
│   │   ├── Location.tsx     # Map and address
│   │   └── Footer.tsx       # Footer
│   ├── data.ts              # Cafe data
│   └── lib/
│       └── utils.ts         # Utility functions
└── package.json
```

## Build

```bash
npm run build
```

## Tech Stack

- Next.js 16.1.0 (App Router)
- React 19.2.3
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React (icons)




