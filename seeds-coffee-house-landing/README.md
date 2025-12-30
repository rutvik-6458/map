# Seeds - The Coffee House Landing Page

A modern, mobile-first landing page for Seeds - The Coffee House, built with Next.js, Tailwind CSS, and shadcn/ui components.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 📁 Project Structure

```
seeds-coffee-house-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO, JSON-LD, OpenGraph
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky header with CTAs
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Trust.tsx            # Social proof section
│   │   ├── Features.tsx         # Highlights/Features section
│   │   ├── Services.tsx         # Menu/Services section
│   │   ├── Gallery.tsx          # Gallery section
│   │   ├── FAQ.tsx              # FAQ section
│   │   ├── Location.tsx         # Location with map embed
│   │   └── Footer.tsx           # Footer
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets (images go here)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🖼️ Gallery Images Setup

The gallery section expects images in the `public/` folder. Replace the following placeholder images:

1. **`/public/gallery1.jpg`** - Specialty coffee close-ups
2. **`/public/gallery2.jpg`** - Rooftop seating and ambience
3. **`/public/gallery3.jpg`** - Barista preparing coffee
4. **`/public/gallery4.jpg`** - Latte art and hot beverages
5. **`/public/gallery5.jpg`** - Exterior view at International Wealth Center

**Hero Image:**
- **`/public/hero.jpg`** - Main hero background image (rooftop coffee house ambience)

### Image Recommendations:
- **Format:** JPG or WebP
- **Size:** 1200x800px or larger
- **Optimization:** Use Next.js Image component (already configured)
- **Alt text:** Already set in Gallery.tsx component

If images are not available, the gallery will show colored placeholders with descriptive text.

## 🔧 Configuration

### Update Google Maps Link
When the official Google Maps link is available, update it in:
- `src/components/Navbar.tsx` (line 12)
- `src/components/Location.tsx` (line 10)

### Update WhatsApp Number
If a dedicated WhatsApp number is available, update it in:
- `src/components/Navbar.tsx` (line 9)
- `src/components/Hero.tsx` (line 9)
- `src/components/Location.tsx` (line 8)
- `src/components/Footer.tsx` (line 9)

### SEO & Metadata
All SEO metadata is configured in `src/app/layout.tsx`:
- Meta title and description
- OpenGraph tags
- Twitter card tags
- JSON-LD structured data (LocalBusiness schema)

## 🎨 Design Features

- **Color Scheme:** Coffee-themed (amber/brown tones)
- **Mobile-First:** Responsive design for all screen sizes
- **Sticky Header:** Navigation bar with Call, Directions, and WhatsApp buttons
- **Smooth Animations:** Framer Motion for hero section
- **Accessibility:** Semantic HTML and proper ARIA labels
- **Performance:** Optimized images and lazy loading

## 📱 Sections

1. **Hero** - Main headline with CTAs
2. **Trust** - Rating, reviews, and testimonials
3. **Features** - Unique selling points
4. **Services** - Menu items and offerings
5. **Gallery** - Photo showcase
6. **FAQ** - Frequently asked questions
7. **Location** - Address, hours, and embedded map
8. **Footer** - Contact info and quick links

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All content is sourced from the provided JSON data
- WhatsApp button only shows if phone number is available
- Get Directions button works with or without Google Maps link
- Gallery images have fallback placeholders if images fail to load
- All components are typed with TypeScript
- Follows Next.js 16 App Router conventions




