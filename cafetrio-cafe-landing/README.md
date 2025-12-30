# Cafetrio Cafe Landing Page

A modern, mobile-first landing page for Cafetrio cafe in Vesu, Surat. Built with Next.js 16 (App Router), Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, premium design with emerald green theme
- 📱 Fully responsive and mobile-first
- ⚡ Fast performance with Next.js App Router
- 🔍 SEO optimized with meta tags and JSON-LD schema
- 🎯 Sticky header with Call and Directions buttons
- 📸 Gallery section (placeholder images - replace with actual photos)
- 🗺️ Google Maps integration for location
- 💬 WhatsApp integration (when phone number is available)

## Sections

1. **Hero** - Eye-catching header with main CTA buttons
2. **Trust** - Ratings, reviews, and customer testimonials
3. **Features** - Unique selling points and best-for highlights
4. **Services/Menu** - Signature items and offerings
5. **Gallery** - Photo showcase (placeholder images)
6. **FAQ** - Frequently asked questions
7. **Location** - Address, hours, and embedded map
8. **Footer** - Contact information and quick links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Update Contact Information

Edit the following files to add phone number, WhatsApp, and Google Maps link:

- `src/components/Navbar.tsx` - Update `phoneNumber` and `googleMapsLink`
- `src/components/Hero.tsx` - Update `phoneNumber` and `googleMapsLink`
- `src/components/Location.tsx` - Update `phoneNumber` and `googleMapsLink`
- `src/components/Footer.tsx` - Update `phoneNumber`

### Replace Gallery Images

1. Add your images to `public/` folder or `src/assets/` folder
2. Update `src/components/Gallery.tsx` to import and use actual images
3. Recommended images:
   - Burnt garlic rice close-up
   - Cafe interior and seating
   - Oreo shake and beverages
   - Happy customers and ambience
   - Exterior signage at Digital Asset Academy

### SEO Configuration

Update SEO metadata in `src/app/layout.tsx`:
- Title and description
- OpenGraph tags
- JSON-LD schema (LocalBusiness)
- URL (when domain is available)

## Tech Stack

- **Next.js 16.1.0** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **shadcn/ui** - UI components (via utilities)

## Project Structure

```
cafetrio-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx         # Main page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Trust.tsx        # Ratings & testimonials
│   │   ├── Features.tsx     # USP highlights
│   │   ├── Services.tsx     # Menu/services
│   │   ├── Gallery.tsx      # Photo gallery
│   │   ├── FAQ.tsx          # FAQ accordion
│   │   ├── Location.tsx     # Location & map
│   │   └── Footer.tsx       # Footer
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Missing Information

The following information needs to be added when available:

- Phone number
- WhatsApp contact
- Official website or online menu link
- Exact closing time
- Google Maps link (for better map embedding)

## License

Private project for Cafetrio cafe.




