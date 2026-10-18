# Nataliia Nails

Website for **Nataliia Nails**, a nail artist in Hamilton, Ontario.
Instagram: [@nataliia.nails.ndbeauty](https://www.instagram.com/nataliia.nails.ndbeauty/) · Booking: Fresha

Built with React, Vite, TypeScript, Tailwind CSS 4, React Router and Lucide icons. It's a static
single-page app, ready for Vercel's free tier.

## Pages

| Route       | Page                                                        |
| ----------- | ----------------------------------------------------------- |
| `/`         | Home: hero, intro, featured work, services, reviews, location |
| `/work`     | Portfolio with category filters and lightbox (`?category=french` etc.) |
| `/services` | Services, with prices/durations mirrored from Fresha        |
| `/book`     | How booking works, plus a link to Fresha                    |
| `/contact`  | Instagram, location, booking                                |

## Run locally

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript only
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## What to edit

All content lives in a few files. You don't need to touch the page components.

### 1. Booking link: `src/config/site.ts`

`FRESHA_BOOKING_URL` holds Nataliia's own booking link (her employee profile at ND Beauty Space on
Fresha). If it changes, paste the new link there. Leave out any `cartId=` parameter, because that is
a one-off cart session.

You can also set it as the environment variable `VITE_FRESHA_BOOKING_URL` (see `.env.example`).
The environment variable takes priority. Only `https://*.fresha.com` links are accepted.

- Every "Book" button opens Fresha in a new tab. The site never shows a booking as confirmed.
  Fresha handles confirmation.
- If the URL is empty or invalid, the buttons fall back to `/book`, which points to Instagram.
- **No embed:** Fresha sends `frame-ancestors 'self' https://*.fresha.com`, so its booking flow
  can't be embedded in an iframe on this site. The external link is the supported option.

The studio's address and public Fresha page are under `studio` and `booking.studioUrl`.

### 2. Portfolio photos: `src/data/portfolio.ts`

1. Put photos in `public/images/portfolio/` (review screenshots go in `public/images/reviews/`).
   JPG, PNG and WebP all work. Use descriptive names, e.g. `french-almond-02.webp`.
2. Add one entry per photo:

   ```ts
   {
     id: "french-03",
     src: "/images/portfolio/french-almond-03.webp",
     category: "french",            // nude | french | summer | spring | reviews
     caption: "Almond French",
     alt: "Almond-shaped French manicure with soft white tips",  // optional
     featured: true,                // optional: show on the home page
   }
   ```
3. Set `heroImage` at the bottom of the file to the best photo for the home-page hero.

The current photos were cropped from phone screenshots of her Instagram, with the app UI and icons
removed. They're small (about 200–540px wide). When the original files are available, drop them in
with the same filenames and nothing else needs to change. A missing file shows a neutral
"Photo coming soon" tile instead of a broken image.

Rules: use only Nataliia's own work or photos she has permission to publish. No stock photos.
Don't scrape Instagram, and don't use Instagram screenshots with app UI. Crop the original photo.
Portrait 4:5, about 1200–1600px on the long edge, under about 400 KB.

### 3. Services, prices, durations: `src/data/services.ts`

Prices and durations were copied from Fresha in October 2026: classic manicure, express gel, classic
gel, builder gel short/medium, and dry pedicure. Keep them in sync with Fresha and update
`PRICES_CHECKED`. Nail extensions and French/nail art have no public price yet, so they show
"Price on Fresha". Fill them in when known. Enter a 90-minute duration only for services Fresha
lists at 90 minutes.

### 4. Reviews: `src/data/reviews.ts`

Add only real reviews, copied word-for-word from Fresha, Google or Instagram. The current entries
come from her Instagram "Reviews" highlight and her public Fresha reviews.

### 5. Text

The hero copy, intro ("Hi, I'm Nataliia…") and specialties are in `src/pages/Home.tsx`. Review the
intro paragraph with Nataliia so it is in her own words.

## Deploy to Vercel (free)

### Option A: GitHub → Vercel (recommended)

1. Create a GitHub repository and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<you>/nataliia-nails.git
   git push -u origin main
   ```
2. Sign in at [vercel.com](https://vercel.com) with GitHub (Hobby plan, free).
3. **Add New… → Project**, then import the repository.
4. Vercel detects Vite. Keep the defaults: build command `npm run build`, output directory `dist`.
5. Optional: under **Environment Variables**, add `VITE_FRESHA_BOOKING_URL`.
6. Click **Deploy**. The site goes live at `https://<project-name>.vercel.app`.
   Every push to `main` redeploys automatically, and pull requests get preview URLs.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel           # first run: log in, link the project, creates a preview deployment
vercel --prod    # publish to https://<project-name>.vercel.app
```

### Custom domain (optional)

In Vercel, go to **Project → Settings → Domains**, add your domain, and follow the DNS instructions.

### Routing

`vercel.json` rewrites every non-file URL to `index.html`, so direct visits and refreshes on `/work`,
`/services` etc. work. Missing files under `/images` still return a real 404, and the site then shows
its placeholder tile.

No secrets are needed. The booking URL is public information.

## Project structure

```
public/
  images/portfolio/      # portfolio photos (add yours here)
  images/reviews/        # optional review screenshots
src/
  config/site.ts         # name, Instagram, location, Fresha URL (single source of truth)
  data/portfolio.ts      # gallery items + categories + hero image
  data/services.ts       # services (mirror Fresha)
  data/reviews.ts        # verified reviews only
  components/            # Header, Footer, BookingButton, Gallery, Lightbox, SafeImage, …
  pages/                 # Home, Work, Services, Book, Contact, NotFound
  hooks/                 # page titles, scroll-reveal animation
vercel.json              # SPA fallback + asset caching
```
