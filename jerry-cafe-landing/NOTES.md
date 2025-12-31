# Jerry Cafe Landing Page

## ⚠️ Important Note
**Installation failed due to insufficient disk space.**
The system reported `ENOSPC: no space left on device` during `npm install`. 
Please free up some disk space and run:
```bash
npm install
npm install lucide-react clsx tailwind-merge
```

## Setup (After freeing space)
1. Run `npm install icons dependencies` (as above).
2. Run `npm run dev`.

## Image Replacement
- **Gallery Images**: Open `src/components/Gallery.tsx` and replace the URLs in the `images` array with your local images.
- **Hero Background**: Open `src/components/Hero.tsx` and change the `backgroundImage` URL style.
- **Service Images**: Open `src/components/Services.tsx` and update the `image` property for each service.

## Configuration
- **Google Maps**: Update `src/components/Location.tsx` with your specific map embed URL.
- **Project Structure**:
  - `src/app/page.tsx`: Main entry point.
  - `src/components/`: Individual sections (Hero, Trust, etc.).
  - `src/app/globals.css`: Styling and theme variables.
