# Cafetrio Cafe Landing Page - Project Structure

## 📁 Folder Structure

```
cafetrio-cafe-landing/
├── public/                          # Static assets (add gallery images here)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with SEO metadata & JSON-LD
│   │   ├── page.tsx                # Main landing page (all sections)
│   │   └── globals.css             # Global Tailwind styles
│   │
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky header with Call/Directions buttons
│   │   ├── Hero.tsx                # Hero section with headline & CTAs
│   │   ├── Trust.tsx               # Ratings, reviews & testimonials
│   │   ├── Features.tsx            # Unique selling points & best-for
│   │   ├── Services.tsx           # Menu/services (signature items)
│   │   ├── Gallery.tsx             # Photo gallery (placeholder images)
│   │   ├── FAQ.tsx                 # Frequently asked questions
│   │   ├── Location.tsx            # Address, hours & Google Maps embed
│   │   └── Footer.tsx              # Footer with contact info
│   │
│   └── lib/
│       └── utils.ts                # Utility functions (cn helper)
│
├── .gitignore                      # Git ignore rules
├── GALLERY_IMAGES.md               # Guide for replacing gallery images
├── next-env.d.ts                   # Next.js TypeScript definitions
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies & scripts
├── postcss.config.mjs              # PostCSS configuration
├── PROJECT_STRUCTURE.md            # This file
├── README.md                       # Project documentation
└── tsconfig.json                   # TypeScript configuration
```

## 🎨 Design Theme

- **Primary Color**: Emerald Green (`emerald-600`, `emerald-700`)
- **Accent Colors**: Green (WhatsApp), Gray (neutral)
- **Typography**: Geist Sans (via Next.js)
- **Style**: Modern, clean, premium look with mobile-first approach

## 📋 Sections Overview

1. **Navbar** - Sticky header with:
   - Logo and business name
   - Navigation links (Features, Menu, Gallery, FAQ, Location)
   - Call button (hidden if no phone number)
   - Directions button (hidden if no Google Maps link)
   - WhatsApp button (hidden if no phone number)

2. **Hero** - Full-screen hero with:
   - Rating badge (4.8★ • 47 Reviews)
   - Main headline: "Pocket-Friendly Cafe Loved by Locals"
   - Subheadline
   - CTA buttons (WhatsApp, Call, Get Directions/Visit Cafe)
   - Feature highlights

3. **Trust** - Social proof section with:
   - Star rating display
   - Customer testimonials (3 cards)
   - Top review themes

4. **Features** - Unique selling points:
   - 3 feature cards (Pocket-Friendly Pricing, Hospitality, Ambience)
   - "Best For" highlight box

5. **Services/Menu** - Menu showcase:
   - Signature items (Burnt Garlic Rice, Oreo Shake, Comfort Food)
   - Features list
   - Hours and service options

6. **Gallery** - Photo gallery:
   - 6 placeholder images
   - Grid layout (responsive)
   - **⚠️ Replace with actual images** (see GALLERY_IMAGES.md)

7. **FAQ** - Accordion-style FAQ:
   - 3 questions with answers
   - Expandable/collapsible

8. **Location** - Location section:
   - Address card
   - Hours card
   - Action buttons (Call, WhatsApp, Get Directions)
   - Google Maps embed (fallback to address search if no link)

9. **Footer** - Footer with:
   - Business info
   - Contact details
   - Quick links
   - Copyright

## 🔧 Configuration Points

### Contact Information
Update these variables in multiple components:
- `phoneNumber` - Phone number (currently empty)
- `whatsappNumber` - Auto-generated from phoneNumber
- `googleMapsLink` - Google Maps link (currently empty)

**Files to update:**
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Location.tsx`
- `src/components/Footer.tsx`

### SEO Metadata
Update in `src/app/layout.tsx`:
- Title and description
- OpenGraph tags
- JSON-LD schema (LocalBusiness)
- URL (when domain is available)

### Gallery Images
See `GALLERY_IMAGES.md` for detailed instructions on replacing placeholder images.

## 🚀 Getting Started

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

## 📝 Next Steps

1. ✅ Project structure created
2. ✅ All components implemented
3. ✅ SEO metadata configured
4. ⏳ Add phone number and WhatsApp contact
5. ⏳ Add Google Maps link
6. ⏳ Replace gallery placeholder images
7. ⏳ Update closing time (currently only "Opens at 11 am")
8. ⏳ Add website/menu link (if available)

## 🎯 Key Features Implemented

- ✅ Next.js 16 App Router
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS 4
- ✅ Mobile-first responsive design
- ✅ SEO optimization (meta tags, JSON-LD)
- ✅ Sticky navigation header
- ✅ Smooth animations (Framer Motion)
- ✅ Google Maps integration
- ✅ WhatsApp integration (conditional)
- ✅ Accessible components
- ✅ Clean, maintainable code structure





