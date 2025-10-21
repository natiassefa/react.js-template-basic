# SEO Implementation Guide

This template includes comprehensive SEO optimization through pre-rendering and metadata management.

## Features Implemented

### ✅ SEO Component
Location: `src/components/SEO.tsx`

A reusable component that manages all page metadata using `react-helmet-async`:
- Page titles
- Meta descriptions
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URLs
- Business contact information for rich snippets

### ✅ Dynamic Metadata on All Pages
All pages include SEO-optimized metadata:
- **Home**: Branded title and business description
- **About**: Company information and mission
- **Contact**: Contact details with email and phone
- **Privacy Policy**: Legal page metadata
- **Terms of Service**: Legal page metadata

### ✅ Pre-rendering with React-Snap
Pre-renders all pages to static HTML for search engine crawlers.

## How It Works

### 1. SEO Component Usage

Each page includes the SEO component at the top:

```tsx
import SEO from 'components/SEO'

export default function MyPage() {
  return (
    <div>
      <SEO
        title="Page Title"
        description="Page description for search engines"
        image="/custom-og-image.jpg"  // Optional
      />

      {/* Rest of page content */}
    </div>
  )
}
```

### 2. Automatic Metadata

The SEO component automatically:
- Combines your page title with business name
- Uses business description as fallback
- Includes business contact info from `src/config/contact.tsx`
- Generates Open Graph and Twitter Card tags
- Creates canonical URLs

### 3. Pre-rendering Process

When you build the site, all routes are pre-rendered to HTML:

```bash
npm run build:ssg
```

This creates static HTML files:
```
dist/
  index.html          # Home page with full content
  about/
    index.html        # About page with full content
  contact/
    index.html        # Contact page with full content
  privacy/
    index.html        # Privacy page with full content
  terms/
    index.html        # Terms page with full content
```

## Building for Production

### Standard Build (Client-Side Only)
```bash
npm run build
```
Creates a standard SPA build. Good for development.

### SEO-Optimized Build (Pre-rendered)
```bash
npm run build:ssg
```
Creates pre-rendered static HTML files for each route. **Use this for production deployment.**

**Note**: If `react-snap` fails due to Chrome/Puppeteer issues (common on some systems), the standard build still works fine. You can deploy without pre-rendering and still have good SEO thanks to the metadata.

## Customizing SEO

### Per-Page Customization

Edit the SEO component call in each page:

```tsx
<SEO
  title="Custom Title"
  description="Custom description"
  image="/custom-image.jpg"
  type="article"  // or "website", "product", etc.
/>
```

### Global Defaults

Edit `src/config/contact.tsx` to update:
- Business name (used in all titles)
- Business description (default meta description)
- Contact information (for rich snippets)

### Custom Open Graph Images

1. Add your image to `public/og-image.jpg`
2. Optionally create page-specific images:
   - `/public/og-home.jpg`
   - `/public/og-about.jpg`
   - etc.

3. Reference in SEO component:
```tsx
<SEO image="/og-about.jpg" />
```

## React-Snap Configuration

Configuration in `package.json`:

```json
"reactSnap": {
  "source": "dist",
  "minifyHtml": {
    "collapseWhitespace": true,
    "removeComments": true
  },
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
  "include": [
    "/",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ]
}
```

### Adding New Routes

When you add new pages, update the `include` array:

```json
"include": [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/new-page"  // Add your new route here
]
```

## Troubleshooting

### React-Snap Syntax Errors

**Symptoms**: `SyntaxError: Unexpected token '?'` during pre-rendering

**Solution**: The Vite build target has been configured to transpile optional chaining operators to ES2019, which is compatible with Puppeteer's Chrome version. The configuration in `vite.config.ts` handles this automatically.

If you still encounter syntax errors, ensure `vite.config.ts` includes:
```typescript
build: {
  target: 'es2019',
  minify: 'terser',
  terserOptions: {
    compress: {
      ecma: 2019
    }
  }
}
```

### React-Snap Chrome Crashes

**Symptoms**: Build completes but react-snap throws Chrome/Puppeteer errors like "Received signal 11"

**Solutions**:
1. **Use standard build**: `npm run build` still produces a working site with SEO metadata
2. **Install Chrome dependencies** (Linux):
   ```bash
   sudo apt-get install -y \
     chromium-browser \
     libx11-xcb1 \
     libxcomposite1 \
     libxdamage1 \
     libxrandr2 \
     libnss3 \
     libatk1.0-0 \
     libcups2
   ```
3. **Use CI/CD**: Run `npm run build:ssg` in your CI/CD pipeline where Chrome is available

### Metadata Not Showing

**Check**:
1. View page source (Ctrl+U) - metadata should be in `<head>`
2. Verify `<HelmetProvider>` wraps your app in `src/index.tsx`
3. Check that SEO component is imported and used

### Pre-rendered Pages Show Blank

**Possible causes**:
1. JavaScript errors preventing render
2. Missing HelmetProvider wrapper
3. Route mismatch in `reactSnap.include`

**Debug**:
```bash
# Build and serve locally
npm run build:ssg
npm run serve
# Visit http://localhost:4173
```

## Testing SEO

### 1. Google Rich Results Test
https://search.google.com/test/rich-results

Paste your deployed URL to see how Google sees your page.

### 2. Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/

Tests Open Graph tags.

### 3. Twitter Card Validator
https://cards-dev.twitter.com/validator

Tests Twitter Card tags.

### 4. View Page Source

Right-click → "View Page Source" (or Ctrl+U)

You should see your meta tags in the HTML:
```html
<head>
  <title>About Us | YourBrand</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <!-- etc -->
</head>
```

## Deployment

### Recommended Hosts (Support SSG)

All these hosts work great with pre-rendered React apps:

1. **Vercel** ⭐ Recommended
   - Zero config
   - Automatic deployments
   - Fast CDN
   - Free SSL

2. **Netlify**
   - Drag-and-drop deployment
   - Form handling
   - Free SSL

3. **Cloudflare Pages**
   - Fast global CDN
   - Free unlimited bandwidth
   - Built-in analytics

4. **GitHub Pages**
   - Free hosting
   - Works with public repos

### Deploy Commands

**Build command**: `npm run build:ssg` (or `npm run build` if react-snap fails)

**Output directory**: `dist`

**Node version**: 18.x or higher

## Best Practices

### 1. Unique Titles and Descriptions

Every page should have unique metadata:
```tsx
// ❌ Bad - Same title on all pages
<SEO title="Home" />

// ✅ Good - Descriptive, unique titles
<SEO title="About Our Team" />
<SEO title="Contact Us - Get in Touch" />
```

### 2. Optimal Description Length

Keep descriptions between 150-160 characters for best results.

### 3. Include Keywords Naturally

Use relevant keywords in titles and descriptions, but write for humans first.

### 4. Update Contact Info

Keep `src/config/contact.tsx` updated:
- Correct business name
- Current phone and email
- Accurate address
- Active social media links

### 5. Create Custom OG Images

Open Graph images should be:
- **Size**: 1200x630px
- **Format**: JPG or PNG
- **Content**: Logo + key message
- **File size**: < 300KB

### 6. Monitor with Search Console

Add your site to Google Search Console:
https://search.google.com/search-console

Track:
- Indexing status
- Search performance
- Mobile usability
- Core Web Vitals

## Benefits of This Implementation

✅ **Search engines see full content** - Pre-rendered HTML includes all text
✅ **Fast page loads** - Static HTML loads instantly
✅ **Social media previews** - Rich cards on Facebook, Twitter, LinkedIn
✅ **Mobile-friendly** - Responsive design + metadata
✅ **Easy to maintain** - One central config file
✅ **Client-ready** - Just update contact info and deploy

## Selling Points for Clients

When presenting this template to small business clients:

1. **"Your website will show up properly on Google"**
   - Pre-rendered content is fully crawlable

2. **"Beautiful previews when shared on social media"**
   - Professional Open Graph cards

3. **"Easy to update"**
   - Just edit contact info in one file

4. **"Fast loading times"**
   - Pre-rendered pages load instantly

5. **"Mobile-optimized"**
   - Works perfectly on all devices

6. **"Production-ready"**
   - Deploy to any hosting provider

---

Need help? Check:
- React Helmet Async docs: https://github.com/staylor/react-helmet-async
- React Snap docs: https://github.com/stereobooster/react-snap
- Google SEO guide: https://developers.google.com/search/docs
