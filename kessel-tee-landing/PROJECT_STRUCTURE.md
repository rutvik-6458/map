# Kessel Tee Landing Page - Project Structure

## 📁 Complete Folder Structure

```
kessel-tee-landing/
├── .gitignore
├── eslint.config.mjs
├── GALLERY_IMAGES.md          # Instructions for adding gallery images
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── PROJECT_STRUCTURE.md       # This file
├── README.md                  # Setup and usage instructions
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css        # Global Tailwind styles
    │   ├── layout.tsx          # Root layout with SEO, JSON-LD, OpenGraph
    │   └── page.tsx            # Main landing page (one-page)
    ├── components/
    │   ├── Navbar.tsx          # Sticky header with Call + Directions
    │   ├── Hero.tsx            # Hero section with CTA buttons
    │   ├── Trust.tsx           # Rating & testimonials section
    │   ├── Features.tsx        # Key features/benefits
    │   ├── Services.tsx        # Menu highlights
    │   ├── Gallery.tsx         # Image gallery (placeholder - needs images)
    │   ├── FAQ.tsx             # Accordion FAQ section
    │   ├── Location.tsx         # Address + Google Maps embed
    │   └── Footer.tsx          # Footer with links & contact info
    ├── data.ts                 # Single source of truth - all cafe data
    └── lib/
        └── utils.ts            # Utility functions (cn helper for className merging)
```

## 🎯 Key Files Explained

### Configuration Files
- **package.json**: Dependencies (Next.js 16, React 19, Tailwind CSS 4, Framer Motion)
- **tsconfig.json**: TypeScript configuration with path aliases
- **next.config.ts**: Next.js configuration
- **postcss.config.mjs**: Tailwind CSS PostCSS configuration
- **eslint.config.mjs**: ESLint configuration

### Core Application Files
- **src/app/layout.tsx**:
  - SEO meta tags (title, description, keywords)
  - OpenGraph tags for social sharing
  - Twitter Card metadata
  - JSON-LD structured data (LocalBusiness schema)

- **src/app/page.tsx**:
  - Single-page landing page
  - Imports and renders all sections in order

- **src/data.ts**:
  - All cafe information from the provided JSON
  - Single source of truth for all content
  - Easy to update and maintain

### Component Files
All components are:
- Client components (use "use client")
- Use Framer Motion for animations
- Responsive and mobile-first
- Use amber/orange color scheme (tea/chai theme)
- Follow consistent design patterns

## 🎨 Design System

### Color Scheme
- **Primary**: Amber/Orange (tea/chai theme)
- **Accent**: Green (for WhatsApp buttons)
- **Background**: White with gray-50 sections
- **Text**: Gray-900 for headings, Gray-600 for body

### Typography
- Font: Geist Sans (via Next.js)
- Headings: Bold, large, tracking-tight
- Body: Medium weight, leading-relaxed

### Spacing
- Sections: py-24 (96px vertical padding)
- Container: max-w-7xl mx-auto px-4
- Gaps: Consistent 8px grid system

## 📱 Sections Order

1. **Navbar** - Sticky header
2. **Hero** - Main CTA section
3. **Trust** - Ratings and testimonials
4. **Features** - Key benefits
5. **Services** - Menu highlights
6. **Gallery** - Image showcase (placeholder)
7. **FAQ** - Common questions
8. **Location** - Address and map
9. **Footer** - Links and contact

## 🔧 Next Steps

1. **Add Gallery Images**: See `GALLERY_IMAGES.md`
2. **Update Google Maps Link**: Add actual link in `src/data.ts` when available
3. **Add Hero Image** (optional): Replace gradient with actual image
4. **Test on Devices**: Verify responsive design
5. **Deploy**: Ready for Vercel/Netlify deployment

## ✅ Features Implemented

- ✅ Next.js 16 App Router
- ✅ Tailwind CSS 4
- ✅ TypeScript with strict mode
- ✅ Framer Motion animations
- ✅ Mobile-first responsive design
- ✅ SEO optimization (meta, OpenGraph, JSON-LD)
- ✅ Sticky header with CTAs
- ✅ WhatsApp integration
- ✅ Google Maps embed
- ✅ All sections from requirements
- ✅ Clean, reusable components
- ✅ Single source of truth (data.ts)



