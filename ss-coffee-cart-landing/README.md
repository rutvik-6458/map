# SS Coffee Cart Landing Page

A modern, mobile-first landing page for SS Coffee Cart - a popular coffee cart on VIP Road, Vesu, Surat. Known for excellent hot chocolate and drive-through convenience.

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
ss-coffee-cart-landing/
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
│   ├── data.ts              # Single source of truth (all JSON data)
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json
└── README.md
```

## Data Source

All content is sourced from the provided JSON data in `src/data.ts`:
- Business name, category, location
- Contact information (phone, address)
- Rating and reviews
- Signature items and menu
- FAQ questions and answers
- Features and unique selling points

## Next Steps

1. **Install Dependencies**: Run `npm install`
2. **Add Images**: Follow `IMAGE_INTEGRATION.md` guide to replace gallery placeholders
3. **Update Google Maps**: Add actual Google Maps embed URL in `src/data.ts` if available
4. **Add Phone Number**: Update phone number in `src/data.ts` if available
5. **Add Business Hours**: Update hours in `src/data.ts` if available
6. **Test**: Run `npm run dev` and test all functionality
7. **Deploy**: Build and deploy to your hosting platform

## Notes

- Phone number is formatted for tel: links automatically
- WhatsApp button only shows if phone number is available
- Get Directions button uses Google Maps link if available, otherwise scrolls to location section
- Gallery uses placeholder images - replace with actual photos (see IMAGE_INTEGRATION.md)
- All content can be updated in `src/data.ts`


