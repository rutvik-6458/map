# Rasta Street Cafe – VIP Road Landing Page

A modern, mobile-first landing page for Rasta Street Cafe located in Vesu, Surat.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** components
- **Lucide React** icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
rasta-street-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── accordion.tsx
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── SocialProof.tsx  # Rating and testimonials
│   │   ├── Features.tsx     # Features/highlights
│   │   ├── Menu.tsx         # Menu section
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── Location.tsx     # Map and contact info
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json          # shadcn/ui config
```

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with smooth scroll navigation
- ✅ SEO optimized (meta tags, JSON-LD schema)
- ✅ OpenGraph tags for social sharing
- ✅ LocalBusiness schema markup
- ✅ Call, Directions, and WhatsApp CTAs
- ✅ Rating and review display
- ✅ FAQ accordion
- ✅ Google Maps embed
- ✅ Modern, premium UI design

## Image Integration

The Gallery component currently uses placeholder images. To add actual images:

1. Add images to `/public/gallery/` folder
2. Update `Gallery.tsx` to reference the actual image paths
3. Recommended images:
   - Cafe exterior at Ambrosia Business Hub
   - Hot chocolate close-up
   - Sandwiches and rice dishes
   - Interior seating and ambience
   - Coffee and beverage shots

## Customization

### Phone Number
Update the phone number in:
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Location.tsx`
- `src/components/Footer.tsx`
- `src/app/layout.tsx` (for JSON-LD)

### Google Maps Link
If you have a specific Google Maps link, update:
- `src/components/Location.tsx` - `googleMapsEmbedUrl` variable
- Or use the address-based search (already implemented)

### Colors
The design uses amber/orange color scheme. To change:
- Update Tailwind classes in components
- Modify gradient colors (from-amber-600 to-orange-600)

## Missing Information

The following information was not provided in the source data:
- Official website link
- WhatsApp contact number (using phone number as fallback)
- Closing time (only opening time provided: 11:30 am)

## License

Private project for Rasta Street Cafe – VIP Road.




