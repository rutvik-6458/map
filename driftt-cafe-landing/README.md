# Driftt Cafe Landing Page

A modern, premium landing page for Driftt Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Single-page landing with smooth scrolling
- ✅ Sticky header with Call and Directions buttons
- ✅ Mobile-first responsive design
- ✅ SEO optimized with meta tags and JSON-LD schema
- ✅ Premium, modern UI with animations
- ✅ All sections: Hero, Trust, Features, Services, Gallery, FAQ, Location, Footer

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
driftt-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky header with CTAs
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Rating and testimonials
│   │   ├── Features.tsx     # Unique selling points
│   │   ├── Services.tsx     # Menu items and services
│   │   ├── Gallery.tsx      # Photo gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address and map
│   │   └── Footer.tsx       # Footer with links
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Configuration

### Update Contact Information

Update the following in the components:

1. **Phone Number**: Update `phoneNumber` in:
   - `src/components/Navbar.tsx`
   - `src/components/Hero.tsx`
   - `src/components/Location.tsx`
   - `src/components/Footer.tsx`

2. **Google Maps Link**: Update `googleMapsLink` in:
   - `src/components/Navbar.tsx`
   - `src/components/Location.tsx`

3. **WhatsApp**: Will automatically work when phone number is added.

### Update SEO Metadata

Edit `src/app/layout.tsx` to update:
- Meta title and description
- OpenGraph tags
- JSON-LD schema (address, phone, hours, etc.)

## Gallery Images

Replace the placeholder images in `src/components/Gallery.tsx` with actual photos. See `GALLERY_IMAGES.md` for details.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Phone number and Google Maps link are currently empty (as per provided JSON data)
- Gallery section uses placeholders - replace with actual images
- All content is based on the provided JSON data structure





