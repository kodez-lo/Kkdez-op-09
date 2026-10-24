# Krishna Collections — Luxury Saree E-commerce (Portfolio Project)

## Is update mein kya hua (Step 2)

**Rebrand — pura naam badla:**
- Logo, Navbar, Hero, Footer, About/Contact placeholders, browser title, meta tags, OG tags, favicon — sab jagah ab **Krishna Collections** hai.
- Brand naam ek hi jagah se control hota hai: `src/data/siteConfig.js`. Future mein naam badalna ho to sirf yahi file edit karo.
- Naya premium SVG logo: `src/assets/logo/logo.svg` (white / gold / soft-pink theme).

**Fixes:**
- Galat bani `{components,pages,data,context,hooks,assets}` literal folder delete kar di.
- Proper nested folder structure bana di (neeche dekho).
- Unused/broken imports check kiye — koi nahi mila.

**Naya add hua:**
- `src/data/products-1.json` and `src/data/products-2.json` — 50 realistic saree products (7 categories, price, discount, rating, review count, image paths).
- `src/data/categories.json`, `src/data/testimonials.json`, `src/data/media.js` — hero/video/instagram image paths.
- Components: `ProductCard`, `CategoryCard`, `ProductGrid`, `SearchBar`, `FilterSidebar`, `WishlistButton`, `CartDrawer`, `Newsletter`, `ReviewCard`, `Footer`, `Loader`, `ScrollToTop`.
- `CartContext` + `WishlistContext` — Local Storage backed, no backend.
- Homepage ab New Arrivals, Premium Categories, Flash Sale, Best Sellers, Brand Story, Customer Reviews, Newsletter dikhata hai — sab real product data se.
- Page transitions, scroll animations, stagger animations, skeleton loading, premium Loader — Framer Motion se.
- Route-level code splitting (`React.lazy`) Home page ke liye.

## Folder Structure

```text
public/
  images/
    hero/         <- hero-01.jpg, hero-02.jpg, hero-03.jpg
    products/     <- product-01-1.jpg, product-01-2.jpg, product-01-3.jpg, ...
    categories/   <- category-banarasi.jpg, category-silk.jpg, ...
    testimonials/ <- testimonial-01.jpg, ...
    instagram/    <- insta-01.jpg, ...
  videos/         <- hero-video.mp4, fashion-banner.mp4, festival.mp4
  favicon.svg
src/
  assets/logo/logo.svg
  data/             <- products-1.json, products-2.json, categories.json, testimonials.json, media.js, siteConfig.js
  components/
  pages/
  hooks/
  context/
  utils/
```

## ⚠️ Important: Images abhi placeholders hain

ZIP mein actual product/hero photos ya videos included nahi hain; media folders mein sirf `.gitkeep` placeholders hain. Code paths `/images/...` aur `/videos/...` use karta hai, taaki files `public/` mein rakhne par Vite production build mein bhi serve ho sakein.

Apni images/videos ko upar dikhaye gaye `public/images/...` aur `public/videos/...` folders mein exact expected names ke saath add karein. Tab tak kuch product, hero aur social images blank/broken dikh sakti hain.

## ⚠️ Important: Build verification

Is sandbox environment mein internet access disabled hai, isliye main khud `npm install` / `npm run build` run nahi kar saka
(npm registry tak connection block hai). Isliye maine jo kiya:
- Har `.jsx` file ko esbuild se syntax-check kiya — sab pass.
- Poora `src/main.jsx` entry point ko bundle karke dekha ki saare imports/paths sahi resolve ho rahe hain — koi broken import nahi mila.
- Saari `.json` data files ko JSON.parse se validate kiya — sab valid.

Ye strong signal hai ki build clean chalega, lekin please apne Windows machine par ye zaroor run karo aur agar koi error aaye to mujhe paste kar do, turant fix kar dunga:

```
npm install
npm run build
```

## Windows 10 par run karne ke liye

1. Node.js install karo (agar nahi hai): https://nodejs.org — LTS version.
2. ZIP extract karo, jaise: `C:\Projects\krishna-collections`
3. Terminal/VS Code mein ye commands run karo:
   ```
   cd C:\Projects\krishna-collections
   npm install
   npm run dev
   ```
4. Browser mein khulega: `http://localhost:5173`

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Keep the project root at the repository root.
3. Vercel detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. The included `vercel.json` sends client-side routes to `index.html`.

No environment variables or backend service are required for the current front-end demo. Cart and wishlist data are stored in the browser's local storage.

**Before launch:** add the image/video files listed above. The uploaded source archive contains only `.gitkeep` placeholders for those media folders, so product and hero images will not appear until real media is added. Also connect a real payment, inventory, and order backend before accepting live orders.
