# Apetito Café Landing Page

A modern, mobile-first landing page for Apetito Café in Vesu, Surat.

## Features

✅ **Smooth Scrolling Navigation** - Click any section in the navbar and it smoothly scrolls to that section
✅ **Active Section Highlighting** - The navbar automatically highlights which section you're viewing
✅ **Sticky Header** - Header stays at the top with background change on scroll
✅ **Mobile Responsive** - Fully responsive with mobile menu
✅ **SEO Optimized** - Meta tags, OpenGraph, and LocalBusiness JSON-LD schema
✅ **CTA Buttons** - Call, WhatsApp, and Get Directions buttons
✅ **Premium Design** - Modern gradients, animations, and hover effects

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components

## Sections

1. **Hero** - Full-screen hero with background image and CTAs
2. **Social Proof** - Rating, reviews, and testimonials
3. **Features** - About section and feature highlights
4. **Menu** - Signature menu items
5. **Gallery** - Image gallery with lightbox
6. **FAQ** - Frequently asked questions with accordion
7. **Location** - Google Maps embed and contact info
8. **Footer** - Links, contact, and social media

## Getting Started

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

## Customization

### Replace Images

Place your images in the `public` folder with these names:

- `hero-cafe.jpg` - Hero section background
- `menu-coffee.jpg` - Vietnamese Iced Coffee
- `menu-pasta.jpg` - Pesto Spaghetti
- `menu-shake.jpg` - Mix Berry Shake
- `gallery-interior.jpg` - Cafe interior
- `gallery-coffee.jpg` - Coffee close-up
- `gallery-pasta.jpg` - Pasta dish
- `gallery-ambience.jpg` - Seating area
- `gallery-exterior.jpg` - Exterior view
- `gallery-food.jpg` - Food variety

**Note:** The site uses fallback images from Unsplash if local images are not found.

### Update Google Maps

In `src/components/Location.tsx`, update the `mapEmbedUrl` with your actual Google Maps embed URL:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the `mapEmbedUrl` value

### Update Contact Info

All contact information is sourced from the JSON data and is already configured:

- Phone: 078020 01555
- Address: G/5, DMD Pacific, Vesu Canal Rd, Bharthana, Surat
- Hours: Open daily, closes at 11 pm

## Smooth Scrolling Implementation

The smooth scrolling is implemented in two ways:

1. **HTML Level**: Added `scroll-smooth` class to `<html>` tag in `layout.tsx`
2. **JavaScript**: Custom `scrollToSection` function in Header and other components that:
   - Gets the target element by ID
   - Calculates offset (accounting for fixed header)
   - Uses `window.scrollTo()` with `behavior: 'smooth'`

### Active Section Detection

The Header component tracks scroll position and highlights the active section:

```typescript
useEffect(() => {
  const handleScroll = () => {
    const sections = ["hero", "social-proof", "features", "menu", "gallery", "faq", "location"];
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

## Folder Structure

```
apetito-cafe-landing/
├── public/              # Static assets (images)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with SEO
│   │   ├── page.tsx     # Main page
│   │   └── globals.css  # Global styles
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # Sticky header with navigation
│   │   ├── Hero.tsx     # Hero section
│   │   ├── SocialProof.tsx
│   │   ├── Features.tsx
│   │   ├── Menu.tsx
│   │   ├── Gallery.tsx
│   │   ├── FAQ.tsx
│   │   ├── Location.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts     # Utility functions
└── package.json
```

## License

All rights reserved © Apetito Café
