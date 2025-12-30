# Meadows The Cafe - Landing Page

A modern, mobile-first landing page for Meadows The Cafe built with Next.js, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, premium look with gradient accents
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Optimized with Next.js App Router
- **SEO Optimized**: Complete meta tags, JSON-LD structured data, and OpenGraph tags
- **Sticky Header**: Navigation with Call, Directions, and WhatsApp buttons
- **Complete Sections**: Hero, Social Proof, Features, Menu, Gallery, FAQ, Location, Footer

## 📁 Project Structure

```
meadows-the-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO meta tags
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Header.tsx       # Sticky navigation header
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── SocialProof.tsx  # Rating and testimonials
│   │   ├── Features.tsx     # Features and highlights
│   │   ├── Menu.tsx         # Signature items
│   │   ├── Gallery.tsx      # Image gallery (placeholders)
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Location.tsx     # Address and map embed
│   │   ├── Footer.tsx       # Footer with contact info
│   │   └── ui/              # shadcn/ui components
│   ├── data.ts              # Cafe data (single source of truth)
│   └── lib/
│       └── utils.ts         # Utility functions
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📸 Gallery Images

The gallery section currently uses placeholder divs. To add actual images:

1. Add your images to `src/assets/` or `public/` folder
2. Update `src/components/Gallery.tsx` to import and use the actual images

**Recommended images from shotlist:**
- Cafe interior and seating
- Mocktails close-up shots
- Popular food items like noodles
- Friends or family dining
- Exterior view near Khelghar Sports Arena

Example:
```tsx
import gallery1 from "@/assets/cafe-interior.jpg";
import gallery2 from "@/assets/mocktails.jpg";
// ... etc
```

## 🔧 Configuration

### Update Contact Information

All data is stored in `src/data.ts`. Update the following if needed:
- Phone number (WhatsApp will use this if no separate WhatsApp number is provided)
- Google Maps link (if available)
- Address
- Hours

### SEO Customization

SEO meta tags are in `src/app/layout.tsx`. Update:
- Title
- Description
- Keywords
- OpenGraph tags
- JSON-LD structured data

## 📱 Features Implemented

✅ Sticky header with smooth scroll navigation
✅ Call Now button (tel: link)
✅ Get Directions button (Google Maps or scroll to location)
✅ WhatsApp button (shows only if phone number available)
✅ Social proof with ratings and testimonials
✅ Features section with icons
✅ Menu/Signature items display
✅ Gallery with placeholder images
✅ FAQ accordion
✅ Location with embedded map
✅ Footer with contact information
✅ Mobile-responsive design
✅ SEO optimization

## 🎨 Design Notes

- Color scheme: Orange to red gradients for primary actions
- Typography: Inter font family
- Spacing: Consistent padding and margins throughout
- Animations: Smooth transitions and hover effects
- Icons: Lucide React icons

## 📝 Notes

- The WhatsApp button will only show if a phone number is available in the data
- Google Maps embed uses the address if no `google_maps_link` is provided
- Gallery images need to be replaced with actual photos
- All content is sourced from `src/data.ts` - no hardcoded values

## 🚀 Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting service

Make sure to run `npm run build` before deploying to ensure everything compiles correctly.






