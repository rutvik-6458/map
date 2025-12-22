# Setup Guide - Kenny's Kitchen Landing Page

## Quick Start

1. **Navigate to project directory**:
   ```bash
   cd kennys-kitchen-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add required images** (see below)

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open browser**: http://localhost:3000

## Required Images

Before running the project, you need to add images to `src/assets/`:

### Create the images directory:
```bash
mkdir -p public/images
```

### Required images:
1. `public/images/hero.jpg` - Hero section background (exterior or interior shot)
2. `public/images/gallery1.jpg` - Pavbhaji Pie close-up
3. `public/images/gallery2.jpg` - Cafe interior and seating
4. `public/images/gallery3.jpg` - Coffee and beverages
5. `public/images/gallery4.jpg` - Burgers and fries
6. `public/images/gallery5.jpg` - Exterior view on VIP Road

### Temporary Solution (if images not ready):
The components now include placeholder backgrounds that will show if images are missing:
- Hero section will show a gradient background
- Gallery items will show colored placeholders with text labels
- You can add images later and they will automatically appear

## Configuration Updates Needed

### 1. Google Maps Link (Optional)
When the Google Maps link is available, update it in:
- `src/components/Navbar.tsx` (line 11)
- `src/components/Location.tsx` (line 11)

### 2. Website URL (Optional)
Update the website URL in `src/app/layout.tsx`:
- Line 25: `url: "https://kennyskitchen.com"` (update to actual domain)

### 3. WhatsApp Number (Optional)
If there's a separate WhatsApp number (different from phone), update:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Location.tsx`
- `src/components/Footer.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### Image Import Errors
If you see errors about missing images:
1. Ensure all images are in `src/assets/` directory
2. Check image file names match exactly (case-sensitive)
3. Use JPG or WebP format

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Project Structure

See `PROJECT_SUMMARY.md` for complete project structure and details.

