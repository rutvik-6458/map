# Teaspresso Bubble Cafe Landing Page

A modern, mobile-first landing page for Teaspresso Bubble Cafe in Vesu, Surat.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Features

- ✅ Sticky header with Call + Directions buttons
- ✅ Hero section with CTA buttons
- ✅ Trust section (rating & reviews)
- ✅ Features/Highlights section
- ✅ Menu/Services section
- ✅ Gallery section (placeholder images)
- ✅ FAQ section
- ✅ Location section with Google Maps embed
- ✅ Footer with contact info
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ WhatsApp integration
- ✅ Mobile-first responsive design

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

Replace the placeholder images in the Gallery component:

1. Add your images to `public/` folder:
   - `gallery1.jpg` - Bubble tea cups close-up
   - `gallery2.jpg` - Waffles with ice cream
   - `gallery3.jpg` - Cafe interior and seating
   - `gallery4.jpg` - Friends enjoying drinks
   - `gallery5.jpg` - Exterior view at Aagam Emporio
   - `gallery6.jpg` - Bubble tea preparation

2. Update `src/components/Gallery.tsx`:
   - Uncomment the Image components
   - Update image paths to match your files

## Project Structure

```
teaspresso-bubble-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Rating & reviews
│   │   ├── Features.tsx     # Features section
│   │   ├── Services.tsx     # Menu items
│   │   ├── Gallery.tsx      # Gallery (placeholders)
│   │   ├── FAQ.tsx          # FAQ section
│   │   ├── Location.tsx     # Location & map
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                   # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Customization

All content is sourced from the provided JSON data. To update:

- Business info: `src/app/layout.tsx` (metadata & JSON-LD)
- Contact details: Update in `Navbar.tsx`, `Location.tsx`, and `Footer.tsx`
- Content: Update individual component files

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Google Maps link is configured but may need adjustment based on actual location
- Gallery uses placeholder divs - replace with actual images
- WhatsApp button uses phone number from contact info
- All sections are fully responsive and mobile-optimized





