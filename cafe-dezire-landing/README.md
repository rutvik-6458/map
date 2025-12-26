# Cafe Dezire Landing Page

A modern, mobile-first landing page for Cafe Dezire built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

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

## 📁 Project Structure

```
cafe-dezire-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO & JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky header with Call/WhatsApp/Directions
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── Trust.tsx        # Social proof & testimonials
│   │   ├── Features.tsx     # Why choose us section
│   │   ├── Services.tsx     # Menu highlights
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Map & contact info
│   │   └── Footer.tsx       # Footer with links
│   ├── data.ts              # All cafe data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🖼️ Gallery Images Setup

The gallery section currently uses placeholder components. To add actual images:

1. **Create an assets folder:**
   ```
   src/assets/
   ```

2. **Add your images** (recommended: 800x600px or similar aspect ratio):
   - `gallery1.jpg` - Cafe exterior on Udhana–Magdalla Road
   - `gallery2.jpg` - Cold coffee close-up
   - `gallery3.jpg` - Ice creams and desserts
   - `gallery4.jpg` - Dine-in seating area
   - `gallery5.jpg` - Coffee being served
   - `gallery6.jpg` - Additional cafe ambiance

3. **Update `src/components/Gallery.tsx`:**
   - Import your images at the top:
   ```typescript
   import gallery1 from "@/assets/gallery1.jpg";
   import gallery2 from "@/assets/gallery2.jpg";
   // ... etc
   ```
   - Replace the placeholder items with actual Image components:
   ```typescript
   const galleryItems = [
     { id: 1, image: gallery1, alt: "Cafe Dezire - Exterior view" },
     { id: 2, image: gallery2, alt: "Cafe Dezire - Cold coffee" },
     // ... etc
   ];
   ```
   - Update the JSX to use Next.js Image component (see existing examples in other projects)

## 📝 Data Source

All content comes from `src/data.ts`. This is the single source of truth for:
- Business information
- Contact details
- Social proof (ratings, reviews)
- Content blocks (headlines, descriptions, FAQs)
- Positioning and features

## ✨ Features

- ✅ Mobile-first responsive design
- ✅ Sticky header with Call, WhatsApp, and Directions buttons
- ✅ SEO optimized (meta tags, JSON-LD, OpenGraph)
- ✅ Smooth animations with Framer Motion
- ✅ Google Maps embed
- ✅ WhatsApp integration (shows only if phone number available)
- ✅ Accessible and semantic HTML
- ✅ Fast performance with Next.js optimization

## 🔧 Configuration

### Google Maps Link

If you have a specific Google Maps link, update it in `src/data.ts`:
```typescript
contact: {
  google_maps_link: "YOUR_GOOGLE_MAPS_LINK_HERE",
  // ...
}
```

### WhatsApp Button

The WhatsApp button automatically appears if a phone number is available in `src/data.ts`. It uses the format: `https://wa.me/[phone_number]`

## 📱 Sections

1. **Hero** - Main headline with rating badge and CTAs
2. **Trust** - Social proof with testimonials
3. **Features** - Why choose Cafe Dezire
4. **Services** - Menu highlights (Cold coffee, Coffee beverages, Ice creams)
5. **Gallery** - Image showcase (placeholders to be replaced)
6. **FAQ** - Common questions with accordion
7. **Location** - Map embed and contact information
8. **Footer** - Links, contact info, and social CTAs

## 🎨 Styling

- Uses Tailwind CSS v4
- Custom color scheme with amber accents
- Smooth transitions and hover effects
- Modern rounded corners and shadows

## 📄 License

Private project for Cafe Dezire.

