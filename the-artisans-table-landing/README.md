# The Artisan's Table - Landing Page

A modern, elegant landing page for The Artisan's Table cafe in Vesu, Surat. Built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean, premium look with elegant styling
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Built with Next.js App Router for optimal performance
- **SEO Optimized**: Includes meta tags, OpenGraph, and JSON-LD structured data
- **Accessible**: Follows accessibility best practices
- **Interactive**: Smooth scrolling, sticky header, and engaging animations

## Sections

1. **Hero**: Eye-catching hero section with call-to-action buttons
2. **Social Proof**: Customer ratings, reviews, and testimonials
3. **Features**: Key features and benefits of the cafe
4. **Menu**: Signature items and services
5. **Gallery**: Visual showcase of the cafe (placeholder images)
6. **FAQ**: Frequently asked questions
7. **Location**: Address, contact info, and embedded map
8. **Footer**: Contact information and quick links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Gallery Images

The gallery section currently uses placeholder images. To replace them:

1. Add your images to `src/assets/` directory
2. Update `src/components/Gallery.tsx` to import and use your images

Recommended images based on photo shotlist:
- Interior seating and decor
- Outdoor seating area
- Coffee drinks close-up
- Food plating shots
- Evening or night ambience

### Data Updates

All content is managed in `src/data.ts`. Update this file to change:
- Business information
- Contact details
- Menu items
- FAQs
- Social proof data

### Google Maps Link

To add a Google Maps link:
1. Get the embed URL from Google Maps
2. Update `google_maps_link` in `src/data.ts`

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## Project Structure

```
the-artisans-table-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO and JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Header.tsx       # Sticky header with navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── SocialProof.tsx  # Ratings and testimonials
│   │   ├── Features.tsx     # Features section
│   │   ├── Menu.tsx         # Menu/signature items
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── Location.tsx    # Location and map
│   │   ├── Footer.tsx       # Footer
│   │   └── ui/              # shadcn/ui components
│   ├── data.ts              # All content data
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Notes

- **Gallery Images**: Currently using placeholder images. Replace with actual cafe photos.
- **Google Maps**: If you have a Google Maps embed link, add it to `data.ts` for better map integration.
- **WhatsApp**: WhatsApp button automatically appears if phone number is available.
- **SEO**: All meta tags and structured data are configured in `layout.tsx`.

## License

Private project - All rights reserved.


