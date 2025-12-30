# Blue Vanilla Patisserie & Cafe Landing Page

A modern, mobile-first landing page for Blue Vanilla Patisserie & Cafe in Vesu, Surat.

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
blue-vanilla-patisserie-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO meta tags
│   │   ├── page.tsx        # Main landing page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky header with CTAs
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Trust.tsx       # Ratings & testimonials
│   │   ├── Features.tsx    # Unique selling points
│   │   ├── Services.tsx   # Menu & services
│   │   ├── Gallery.tsx    # Image gallery (placeholders)
│   │   ├── FAQ.tsx         # Frequently asked questions
│   │   ├── Location.tsx   # Address & map embed
│   │   └── Footer.tsx     # Footer with contact info
│   └── lib/
│       └── utils.ts        # Utility functions
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Gallery Images

The gallery component currently uses placeholder divs. Replace them with actual images:

1. Create an `assets` folder in `src/`:
```bash
mkdir src/assets
```

2. Add your images:
   - Cheesecake close-up shots
   - Assorted brownies and pastries
   - Cafe interior and seating
   - Coffee and frappes
   - Exterior view at DMD Paccific
   - Dessert display and ambience

3. Update `src/components/Gallery.tsx` to import and use the images (similar to the pattern in other projects).

## Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call, Directions, and WhatsApp buttons
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ Smooth animations with Framer Motion
- ✅ Google Maps embed
- ✅ FAQ accordion
- ✅ Premium blue/vanilla color scheme
- ✅ Fast loading and optimized

## Contact Information

- **Phone**: 091047 26042
- **Address**: F3, DMD Paccific, Vesu Canal Rd, near Cellestial Dreams, Surat, Gujarat 395007
- **Hours**: Opens at 12 pm

## Build for Production

```bash
npm run build
npm start
```

## Notes

- WhatsApp button uses the phone number (replace spaces with empty string)
- Google Maps link is currently empty - update when available
- Gallery images need to be added (see Gallery Images section above)




