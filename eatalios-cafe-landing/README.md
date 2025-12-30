# Eatalio's Cafe Landing Page

A modern, mobile-first landing page for Eatalio's Cafe built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- ✅ Modern, premium design with Italian cafe theme
- ✅ Mobile-first responsive layout
- ✅ Sticky header with smooth navigation
- ✅ SEO optimized with meta tags and JSON-LD schema
- ✅ OpenGraph tags for social sharing
- ✅ Fast performance with Next.js App Router
- ✅ Accessible components with shadcn/ui

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
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
eatalios-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Sticky navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── SocialProof.tsx  # Ratings and testimonials
│   │   ├── Features.tsx     # Features/Highlights
│   │   ├── Menu.tsx         # Menu/Services section
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── Location.tsx     # Location and map
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
└── package.json
```

## Configuration Needed

Before deploying, update the following in the components:

1. **Phone Number**: Add phone number in:
   - `src/components/Header.tsx`
   - `src/components/Hero.tsx`

2. **WhatsApp Number**: Add WhatsApp number in:
   - `src/components/Header.tsx`
   - `src/components/Hero.tsx`

3. **Google Maps Link**: Add Google Maps link in:
   - `src/components/Header.tsx`
   - `src/components/Hero.tsx`
   - `src/components/Location.tsx`
   - `src/app/layout.tsx` (for JSON-LD)

4. **Gallery Images**: Replace placeholder images in:
   - `src/components/Gallery.tsx`
   - Add images to `public/gallery/` folder:
     - `pasta-1.jpg` - Pasta close-up shots
     - `pizza-1.jpg` - Exotica pizza
     - `interior-1.jpg` - Cafe interior and seating
     - `food-spread-1.jpg` - Food and beverage spread
     - `exterior-1.jpg` - Exterior view at Prime Shoppers
     - `pasta-2.jpg` - Additional pasta dish

5. **SEO Metadata**: Update in `src/app/layout.tsx`:
   - Website URL (if available)
   - Business image URL
   - Phone number in JSON-LD

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The gallery section currently shows placeholders. Replace with actual images as described above.
- The Google Maps embed will work once you add the Google Maps link.
- All contact information (phone, WhatsApp) is conditionally rendered - buttons will only show when numbers are provided.
- The design uses a red-orange gradient theme to reflect Italian cafe aesthetics.






