# The Cafe 4 You - Landing Page

A modern, mobile-first landing page for The Cafe 4 You, built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, premium design
- 📱 Mobile-first responsive layout
- ⚡ Fast performance with Next.js App Router
- 🔍 SEO optimized with meta tags and JSON-LD
- 📍 Google Maps integration
- 💬 WhatsApp integration
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
the-cafe-4-you-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO and JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles and Tailwind config
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx   # Button component
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Social proof section
│   │   ├── Features.tsx    # Features/Highlights section
│   │   ├── Menu.tsx         # Menu/Services section
│   │   ├── Gallery.tsx      # Gallery section
│   │   ├── FAQ.tsx          # FAQ section
│   │   ├── Location.tsx     # Location and map section
│   │   └── Footer.tsx       # Footer section
│   ├── data.ts              # Business data (JSON)
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                  # Static assets
└── package.json
```

## Customization

### Update Business Data

Edit `src/data.ts` to update business information, contact details, menu items, and content.

### Replace Gallery Images

1. Add your images to `src/assets/` or `public/` folder
2. Update the image paths in `src/components/Gallery.tsx`
3. Recommended images:
   - Cafe interior and seating
   - Friends hanging out
   - Mint Mojito drink
   - Ice Cream Brownie dessert
   - Exterior storefront

### Update Google Maps Link

Add your Google Maps embed link to `google_maps_link` in `src/data.ts`. If left empty, the page will generate a search link based on the address.

### Update SEO Information

Edit the metadata in `src/app/layout.tsx` to update:
- Page title and description
- OpenGraph tags
- JSON-LD structured data
- Keywords

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Gallery images are currently using placeholder images from Unsplash. Replace them with actual cafe photos.
- Google Maps link is empty in the data - add it when available.
- WhatsApp number is automatically generated from the phone number.
- All content is sourced from the JSON data in `src/data.ts`.



