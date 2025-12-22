# Dhakad Cafe (25Tea) Landing Page

A modern, mobile-first landing page for Dhakad Cafe (25Tea) - a late-night tea spot in Vesu, Surat.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** components
- **Lucide React** icons

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with navigation
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ Smooth scroll navigation
- ✅ Premium UI with gradient accents
- ✅ All sections: Hero, Trust, Features, Menu, Gallery, FAQ, Location, Footer
- ✅ Conditional WhatsApp/Call buttons (hidden if phone number not available)
- ✅ Get Directions button with Google Maps fallback

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
dhakad-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── SocialProof.tsx  # Rating and reviews
│   │   ├── Features.tsx     # Highlights/features
│   │   ├── Menu.tsx         # Menu/services
│   │   ├── Gallery.tsx      # Photo gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address and map
│   │   └── Footer.tsx       # Footer with contact info
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
├── next.config.ts
├── tsconfig.json
└── components.json          # shadcn/ui config
```

## Image Integration

### Gallery Section

Replace the placeholder images in `src/components/Gallery.tsx` with actual photos. The shotlist includes:

1. Tea cups and serving counter
2. Cheese chilli toast close-up
3. Seating area at night
4. Puff and Maggi snacks
5. Exterior view on Udhana - Magdalla Road

**To add images:**
1. Place images in `public/gallery/` folder
2. Update the Gallery component to use Next.js Image component
3. Replace placeholder divs with actual image paths

### Location Map

Replace the placeholder map in `src/components/Location.tsx` with an embedded Google Map:

1. Get the Google Maps embed code from Google Maps
2. Replace the placeholder div with an iframe
3. Use the address: "Udhana - Magdalla Rd, Someshwara Enclave, Vesu, Surat, Gujarat 395007"

## Missing Information

The following information is missing from the provided data and should be added:

- Phone number (currently hidden Call/WhatsApp buttons)
- WhatsApp contact
- Official website or menu link
- Exact opening time
- Google Maps link (currently uses fallback search)

## Customization

### Update Contact Information

Edit the following files to add contact information:
- `src/components/Header.tsx` - Update `phoneNumber` and `googleMapsLink`
- `src/components/Hero.tsx` - Update `phoneNumber` and `googleMapsLink`
- `src/components/Location.tsx` - Update `googleMapsLink`
- `src/components/Footer.tsx` - Update `phoneNumber` and `googleMapsLink`
- `src/app/layout.tsx` - Update JSON-LD schema with phone number

### Update SEO Metadata

Edit `src/app/layout.tsx` to update:
- Meta title and description
- OpenGraph tags
- JSON-LD structured data (add phone, URL, image, etc.)

## Build for Production

```bash
npm run build
npm start
```

## License

Private project for Dhakad Cafe (25Tea).



