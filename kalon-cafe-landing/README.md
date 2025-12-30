# KALON Cafe Landing Page

A modern, responsive landing page for KALON cafe in Vesu, Surat, built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, premium design with mobile-first approach
- ⚡ Fast performance with Next.js App Router
- 📱 Fully responsive design
- 🎯 SEO optimized with meta tags and JSON-LD structured data
- 🔗 Sticky header with Call and Directions buttons
- 💬 WhatsApp CTA integration
- 🗺️ Google Maps embed for location
- ⭐ Social proof section with ratings and testimonials
- 📋 FAQ section with accordion
- 🖼️ Gallery section (with placeholders - ready for image integration)

## Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
kalon-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO and JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   └── accordion.tsx
│   │   ├── Navbar.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── Trust.tsx        # Rating and testimonials
│   │   ├── Features.tsx     # Unique selling points
│   │   ├── Menu.tsx         # Signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address and map embed
│   │   └── Footer.tsx       # Footer with links and contact
│   ├── data.ts              # Business data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
└── public/                  # Static assets
```

## Gallery Images

The Gallery component currently displays placeholder divs. To add actual images:

1. Add images to `public/gallery/` or `src/assets/`
2. Update `src/components/Gallery.tsx` to import and use the images
3. Recommended photos (from data.ts):
   - Cafe exterior at Goldmines Shoppers
   - Coffee cups and drinks close-up
   - Popular food items like pasta
   - Interior ambience and seating
   - Happy customers and table setups

See `GALLERY_IMAGES.md` for detailed integration instructions.

## Customization

All business data is stored in `src/data.ts`. Update this file to change:
- Business name, address, phone
- Headlines and descriptions
- Menu items
- FAQ questions and answers
- Ratings and testimonials

## SEO

The site includes:
- Meta title and description
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD structured data (LocalBusiness schema)

## Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Deploy to Vercel (recommended):
```bash
vercel
```

## License

Private project for KALON cafe.



