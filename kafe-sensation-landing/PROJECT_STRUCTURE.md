# Kafe Sensation Landing Page - Project Structure

## Complete Folder Structure

```
kafe-sensation-landing/
├── .gitignore
├── README.md
├── PROJECT_STRUCTURE.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── public/                          # Static assets (empty - add images here if needed)
└── src/
    ├── app/
    │   ├── layout.tsx              # Root layout with SEO, JSON-LD, OpenGraph
    │   ├── page.tsx                # Main landing page (single page)
    │   └── globals.css             # Global styles with Tailwind theme
    ├── components/
    │   ├── ui/
    │   │   └── button.tsx          # shadcn/ui Button component
    │   ├── Header.tsx              # Sticky header with navigation & CTAs
    │   ├── Hero.tsx                # Hero section with tagline & CTAs
    │   ├── Trust.tsx               # Ratings & reviews section
    │   ├── Features.tsx            # Features/Highlights section
    │   ├── Menu.tsx                 # Menu items showcase
    │   ├── Gallery.tsx             # Gallery section (placeholder images)
    │   ├── FAQ.tsx                 # FAQ accordion section
    │   ├── Location.tsx            # Location with map embed
    │   └── Footer.tsx              # Footer with contact info
    ├── lib/
    │   └── utils.ts                # Utility functions (cn helper)
    └── data.ts                     # Business data (source of truth)
```

## File Descriptions

### Configuration Files

- **package.json**: Dependencies and scripts
- **tsconfig.json**: TypeScript configuration
- **next.config.ts**: Next.js configuration
- **postcss.config.mjs**: PostCSS configuration for Tailwind
- **.gitignore**: Git ignore rules

### Core App Files

- **src/app/layout.tsx**:
  - Root layout with fonts (Inter, Playfair Display)
  - SEO metadata (title, description, keywords)
  - OpenGraph tags for social sharing
  - JSON-LD structured data (LocalBusiness schema)

- **src/app/page.tsx**:
  - Single-page landing page
  - Imports and renders all sections in order

- **src/app/globals.css**:
  - Tailwind CSS setup
  - Custom color theme (warm coffee brown)
  - CSS variables for theming

### Data File

- **src/data.ts**:
  - Complete business data from JSON
  - Single source of truth for all content
  - Easy to update and maintain

### Components

#### UI Components
- **src/components/ui/button.tsx**:
  - Reusable button component with variants
  - Uses Radix UI Slot for composition

#### Page Components
- **Header.tsx**:
  - Sticky navigation header
  - Smooth scroll to sections
  - Call, Directions, WhatsApp buttons
  - Mobile-responsive menu

- **Hero.tsx**:
  - Hero section with headline
  - Background image with overlay
  - Primary CTAs (WhatsApp, Call, Directions)

- **Trust.tsx**:
  - 5-star rating display
  - Customer testimonials
  - Review themes badges

- **Features.tsx**:
  - About paragraph
  - Feature bullets with icons
  - Image with unique selling points overlay

- **Menu.tsx**:
  - Signature items showcase
  - Card-based layout
  - "Best for" tags

- **Gallery.tsx**:
  - Image gallery grid
  - Placeholder images (replace with actual photos)
  - Error handling with colored placeholders

- **FAQ.tsx**:
  - Accordion-style FAQ
  - Expandable questions/answers
  - Smooth animations

- **Location.tsx**:
  - Address and hours display
  - Google Maps embed
  - Contact buttons (Call, WhatsApp, Directions)

- **Footer.tsx**:
  - Business info
  - Quick links navigation
  - Social media icons
  - Copyright

### Utilities

- **src/lib/utils.ts**:
  - `cn()` function for className merging
  - Combines clsx and tailwind-merge

## Gallery Images - Replacement Guide

### Current Status
Gallery uses placeholder images from Unsplash. Replace with actual cafe photos.

### Recommended Images (from photo_shotlist):
1. Cafe interior and seating
2. Pizza and pasta dishes
3. Frappe and coffee drinks
4. Birthday celebration setup
5. Exterior view at Aagam Viviana

### How to Replace

**Option 1: Local Images**
1. Add images to `src/assets/` folder:
   ```
   src/assets/
     ├── gallery1.jpg
     ├── gallery2.jpg
     ├── gallery3.jpg
     ├── gallery4.jpg
     └── gallery5.jpg
   ```

2. Update `src/components/Gallery.tsx`:
   ```typescript
   import gallery1 from "@/assets/gallery1.jpg";
   import gallery2 from "@/assets/gallery2.jpg";
   // ... etc

   const galleryImages = [
     { src: gallery1, alt: "Cafe interior and seating", placeholder: "bg-amber-100" },
     // ... etc
   ];
   ```

**Option 2: External URLs**
- Update the `src` URLs in the `galleryImages` array in `Gallery.tsx`
- Use your image hosting service URLs

## Missing Information to Add

From the JSON data, these fields are empty and should be updated:

1. **Google Maps Link**:
   - Add to `google_maps_link` in `src/data.ts`
   - Currently generates directions from address

2. **WhatsApp Number**:
   - Uses phone number if available
   - Add dedicated WhatsApp number if different

3. **Official Website**:
   - Update in `src/app/layout.tsx` JSON-LD `url` field
   - Currently placeholder: `https://kafesensation.com`

4. **Hero Image**:
   - Update in `src/app/layout.tsx` JSON-LD `image` field
   - Currently placeholder: `https://kafesensation.com/hero.jpg`

## Color Theme

The site uses a warm coffee brown theme:
- Primary: `hsl(25 95% 53%)` - Warm coffee brown
- Secondary: `hsl(30 20% 96%)` - Creamy background
- Accent: `hsl(25 95% 97%)` - Light coffee tint

## SEO Features

✅ Meta title and description
✅ Keywords meta tag
✅ OpenGraph tags (Facebook, LinkedIn)
✅ Twitter Card tags
✅ JSON-LD structured data (LocalBusiness schema)
✅ Semantic HTML structure
✅ Alt text for images

## Performance Optimizations

✅ Next.js App Router for optimal performance
✅ Image optimization (when using Next.js Image component)
✅ Lazy loading for maps
✅ Smooth scroll behavior
✅ Mobile-first responsive design
✅ Optimized font loading (next/font)




