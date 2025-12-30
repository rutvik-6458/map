# SaladO Cafe Landing Page

A modern, mobile-first landing page for SaladO Cafe in Vesu, Surat. Built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, premium UI with green/healthy color scheme
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Optimized with Next.js App Router
- **SEO Optimized**: Includes meta tags, OpenGraph, and JSON-LD structured data
- **Sections**:
  - Sticky Header with navigation and CTAs
  - Hero section with headline and call-to-action buttons
  - Social Proof (ratings and testimonials)
  - Features highlighting unique selling points
  - Menu showcasing signature items
  - Gallery (with placeholders for images)
  - FAQ accordion
  - Location with map embed
  - Footer with contact information

## 📁 Project Structure

```
salado-cafe-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── card.tsx
│   │   ├── Header.tsx          # Sticky navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── SocialProof.tsx     # Ratings and reviews
│   │   ├── Features.tsx        # Unique selling points
│   │   ├── Menu.tsx            # Signature items
│   │   ├── Gallery.tsx         # Image gallery
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── Location.tsx        # Address and map
│   │   └── Footer.tsx           # Footer section
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                      # Static assets (create this folder)
│   └── gallery/                # Gallery images (add your images here)
├── package.json
├── tsconfig.json
├── next.config.ts
└── components.json             # shadcn/ui configuration
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

## 📸 Image Integration

### Gallery Images

Replace placeholder images in the Gallery component. Recommended images:

1. **Fresh salads and healthy bowls** - `public/gallery/salad-bowl.jpg`
2. **Wraps and light meals** - `public/gallery/wraps.jpg`
3. **Cafe interior and seating** - `public/gallery/interior.jpg`
4. **Food preparation with fresh ingredients** - `public/gallery/preparation.jpg`
5. **Exterior view near Aagam Shopping Center** - `public/gallery/exterior.jpg`
6. **Healthy food display** - `public/gallery/display.jpg`

### How to Add Images

1. Create a `public/gallery/` directory
2. Add your images with the names listed above
3. Uncomment the `<img>` tags in `src/components/Gallery.tsx`
4. Remove or hide the placeholder divs

## 🗺️ Google Maps Integration

### Option 1: Using Google Maps Embed (Recommended)

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address: "G5, Ground Floor, Cannon Street, opposite Aagam Shopping Center, near Jolly Residency, Vesu, Surat"
3. Click "Share" → "Embed a map"
4. Copy the embed URL
5. Update `google_maps_link` in the JSON data or directly in `src/components/Location.tsx`

### Option 2: Using Google Maps API

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update the `mapsEmbedUrl` in `src/components/Location.tsx` with your API key

## 📱 Contact Information

- **Phone**: 083475 52200
- **Address**: G5, Ground Floor, Cannon Street, opposite Aagam Shopping Center, near Jolly Residency, Vesu, Surat, Gujarat 395007
- **Hours**: Open daily, closes at 12 am

## 🎨 Customization

### Colors

The design uses a green/healthy color scheme. To customize:

1. Update Tailwind classes in components (search for `green-` and `emerald-`)
2. Or update CSS variables in `src/app/globals.css`

### Content

All content is sourced from the provided JSON data. To update:

- Business information: Update `src/app/layout.tsx` (JSON-LD)
- Section content: Update individual component files
- Contact info: Update phone numbers and addresses in components

## 📝 Missing Information

The following information was not provided in the JSON data and may need to be added:

- Official website link
- WhatsApp contact number (currently using phone number)
- Exact opening time in the morning

## 🔧 Technologies Used

- **Next.js 16.1.0** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI components
- **TypeScript** - Type safety
- **Lucide React** - Icons

## 📄 License

Private project for SaladO Cafe.






