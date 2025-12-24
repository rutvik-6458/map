# OK Café Corner Landing Page

A modern, mobile-first landing page for OK Café Corner built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, premium design
- 📱 Mobile-first responsive layout
- ⚡ Fast performance with Next.js App Router
- 🔍 SEO optimized with meta tags and JSON-LD
- 📍 Google Maps integration
- 💬 WhatsApp integration (hidden if no phone number)
- 🎯 Sticky header with smooth scrolling navigation

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
ok-cafe-corner-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO and JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles and Tailwind config
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation header
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── Trust.tsx        # Social proof and reviews
│   │   ├── Features.tsx     # Features and highlights
│   │   ├── Menu.tsx         # Menu/Services section
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Location and map
│   │   ├── Footer.tsx       # Footer section
│   │   └── ui/
│   │       └── button.tsx   # Button component
│   ├── data.ts              # Business data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Customization

All business data is stored in `src/data.ts`. Update this file to change:
- Business name and taglines
- Contact information
- Menu items
- Reviews and testimonials
- FAQ content
- And more...

## Gallery Images

The gallery section currently uses placeholder images from Unsplash. To replace them:

1. Add your images to `src/assets/` folder
2. Update the `galleryImages` array in `src/components/Gallery.tsx`
3. Import the images and replace the placeholder URLs

**Recommended photo shots:**
- Cafe seating and setup
- Coffee and beverages
- Friends hanging out
- Interior vibe
- Exterior view at Sun Arcade

## Missing Information

The following information needs to be added when available:
- Phone number (currently empty - WhatsApp button will show when added)
- Google Maps link (currently uses address-based search)
- Actual gallery images (currently using placeholders)

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for OK Café Corner.

