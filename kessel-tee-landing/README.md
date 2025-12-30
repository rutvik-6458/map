# Kessel Tee Landing Page

A modern, mobile-first landing page for Kessel Tee cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Premium, mobile-first design with smooth animations
- **SEO Optimized**: Complete meta tags, OpenGraph, and JSON-LD structured data
- **Fast Performance**: Optimized images, lazy loading, and efficient rendering
- **Sticky Header**: Navigation bar with Call and Directions buttons
- **Sections**: Hero, Trust (ratings/reviews), Features, Menu Highlights, Gallery, FAQ, Location (with map), Footer
- **WhatsApp Integration**: Direct WhatsApp CTA button
- **Google Maps**: Embedded map with directions link

## 📁 Project Structure

```
kessel-tee-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO & JSON-LD
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation header
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── Trust.tsx            # Ratings and testimonials
│   │   ├── Features.tsx         # Key features/benefits
│   │   ├── Services.tsx         # Menu highlights
│   │   ├── Gallery.tsx          # Image gallery (placeholder)
│   │   ├── FAQ.tsx              # Frequently asked questions
│   │   ├── Location.tsx         # Address and map embed
│   │   └── Footer.tsx           # Footer with links
│   ├── data.ts                  # All cafe data (single source of truth)
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📸 Gallery Images

The Gallery component currently uses placeholder divs. To add actual images:

1. Create an `assets` folder in `src/`:
   ```
   src/assets/
   ```

2. Add your gallery images (recommended: 6 images):
   - `gallery1.jpg` - Different chai varieties served
   - `gallery2.jpg` - Tea being prepared
   - `gallery3.jpg` - Snacks like dosa and pizza
   - `gallery4.jpg` - Cafe interior and seating
   - `gallery5.jpg` - Evening crowd and ambience
   - `gallery6.jpg` - Specialty chai varieties

3. Update `src/components/Gallery.tsx`:
   - Import the images at the top
   - Replace the placeholder divs with Next.js Image components
   - See example from other cafe landing pages for reference

## 🎨 Customization

All content is managed in `src/data.ts`. Update this file to change:
- Business information
- Contact details
- Menu items
- Features
- FAQ content
- Testimonials

## 📱 Responsive Design

The page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🔍 SEO Features

- Meta title and description
- OpenGraph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data (LocalBusiness schema)
- Semantic HTML structure

## 📝 Notes

- **Google Maps Link**: Currently uses address-based fallback. Update `google_maps_link` in `data.ts` when available.
- **WhatsApp**: Automatically formats phone number for WhatsApp links.
- **Color Scheme**: Uses amber/orange theme to match tea/chai branding.
- **Hero Image**: Currently uses gradient background. Add actual hero image if available.

## 🚀 Deployment

This project is ready to deploy on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📄 License

Private project for Kessel Tee cafe.




