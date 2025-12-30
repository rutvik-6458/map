# Cafe Nine Forty Five Landing Page

A modern, mobile-first landing page for Cafe Nine Forty Five - an evening hangout cafe in Vesu, Surat.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cafe-nine-forty-five-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Trust.tsx       # Social proof & reviews
│   │   ├── Features.tsx    # Key features/highlights
│   │   ├── Services.tsx    # Services/menu items
│   │   ├── Gallery.tsx     # Image gallery (placeholders)
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── Location.tsx    # Location & map
│   │   └── Footer.tsx      # Footer section
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   └── data.ts             # Business data (JSON)
├── public/                 # Static assets
└── src/assets/             # Image assets

```

## Gallery Images

The gallery section currently uses placeholders. To add actual images:

1. Add your images to `src/assets/` directory (e.g., `gallery1.jpg`, `gallery2.jpg`, etc.)
2. Update `src/components/Gallery.tsx` to import and use the actual images

Example:
```tsx
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
// ... etc
```

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky navigation with Call & Directions buttons
- ✅ SEO optimized (meta tags, JSON-LD structured data)
- ✅ Smooth animations with Framer Motion
- ✅ Google Maps integration
- ✅ FAQ accordion
- ✅ Social proof with reviews
- ✅ Modern, premium UI design

## Customization

All business data is centralized in `src/data.ts`. Update this file to change:
- Business name, address, hours
- Reviews and ratings
- Features and services
- FAQ content
- And more...

## Notes

- Phone number is currently empty, so WhatsApp and Call buttons are hidden
- Google Maps link uses address-based search if no direct link is provided
- Gallery images need to be added to `src/assets/` directory




