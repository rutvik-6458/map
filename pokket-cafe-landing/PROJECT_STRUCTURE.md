# Project Structure

## Complete Folder Structure

```
pokket-cafe-landing/
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── src/
    ├── app/
    │   ├── globals.css          # Global styles with Tailwind theme
    │   ├── layout.tsx            # Root layout with SEO, JSON-LD, OpenGraph
    │   └── page.tsx             # Main landing page (single page)
    ├── components/
    │   ├── ui/
    │   │   ├── button.tsx       # shadcn/ui Button component
    │   │   └── card.tsx         # shadcn/ui Card component
    │   ├── Header.tsx           # Sticky header with nav & CTAs
    │   ├── Hero.tsx             # Hero section with tagline
    │   ├── Trust.tsx            # Ratings & reviews section
    │   ├── Features.tsx         # Features/Highlights section
    │   ├── Menu.tsx             # Menu items (supports highlighting)
    │   ├── Gallery.tsx          # Gallery with click-to-scroll ⭐
    │   ├── FAQ.tsx              # FAQ accordion section
    │   ├── Location.tsx         # Location with map embed
    │   └── Footer.tsx           # Footer with links
    ├── data.ts                  # Business data (single source of truth)
    └── lib/
        └── utils.ts             # Utility functions (cn helper)
```

## Key Features

### Gallery Click-to-Scroll Functionality ⭐

**Location**: `src/components/Gallery.tsx`

**How it works**:
1. Gallery images can have a `menuItem` property
2. When clicked, it dispatches a custom event `highlightMenuItem`
3. Menu component listens to this event
4. Page scrolls to Menu section
5. Corresponding menu item is highlighted with ring animation
6. Highlight disappears after 3 seconds

**Images with menu items**:
- Cheese Burst Pizza → scrolls to "Cheese Burst Pizza" menu item
- Pasta and French Fries → scrolls to "Pasta and French Fries" menu item
- Blue Ocean Ice Tea → scrolls to "Blue Ocean Ice Tea" menu item

**Images without menu items**:
- Cafe Interior (no action)
- Friends Dining (no action)
- Cafe Ambience (no action)

## Sections Order

1. **Header** - Sticky navigation
2. **Hero** - Main headline with CTAs
3. **Trust** - Ratings and testimonials
4. **Features** - Why choose us
5. **Menu** - Signature items
6. **Gallery** - Photo gallery
7. **FAQ** - Common questions
8. **Location** - Address and map
9. **Footer** - Contact and links

## Where to Replace Images

### Gallery Images
**File**: `src/components/Gallery.tsx`
**Array**: `GALLERY_IMAGES` (lines 5-30)
**Action**: Replace `src` URLs with actual image paths

### Hero Background
**File**: `src/components/Hero.tsx`
**Line**: ~15
**Action**: Replace Unsplash URL with actual hero image

### Menu Item Images
**File**: `src/components/Menu.tsx`
**Line**: ~45
**Action**: Replace Unsplash URLs with actual food images

### Features Section Image
**File**: `src/components/Features.tsx`
**Line**: ~46
**Action**: Replace with actual cafe interior image

## Data Source

All content comes from `src/data.ts`. This is the **single source of truth** for:
- Business name, tagline, address
- Contact information
- Menu items
- Reviews and ratings
- FAQ content
- Features

## SEO Configuration

**File**: `src/app/layout.tsx`

Includes:
- Meta title and description
- OpenGraph tags
- Twitter Card tags
- JSON-LD structured data (LocalBusiness schema)

Update these when deploying to production.

## Next Steps

1. Replace placeholder images
2. Add Google Maps link (if available)
3. Update social media links in Footer
4. Test on mobile devices
5. Deploy to production







