# React.js Template for Small Businesses

A production-ready React.js template designed for small business websites. Built with modern tools and optimized for SEO, mobile responsiveness, and easy customization.

## Features

### Core Technologies
- **[React 18](https://reactjs.org)** - Modern React with hooks
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Vite](https://vitejs.dev)** - Lightning-fast build tool
- **[TailwindCSS 3](https://tailwindcss.com)** - Utility-first CSS framework
- **[React Router](https://reactrouter.com)** - Client-side routing

### Business-Ready Features
- **SEO Optimized** - Pre-rendering with react-snap for search engines
- **Mobile Responsive** - Custom `useMobile` hook for adaptive layouts
- **Centralized Configuration** - Single config file for all business information
- **Professional Pages** - Home, About, Contact, Privacy Policy, Terms of Service
- **Social Media Integration** - Open Graph and Twitter Card support
- **Contact Forms** - Ready-to-use contact forms with validation

### Developer Experience
- **[Vitest](https://vitest.dev)** - Fast unit testing
- **[Testing Library](https://testing-library.com)** - React component testing
- **[ESLint](https://eslint.org)** - Code quality enforcement
- **[Prettier](https://prettier.io)** - Consistent code formatting

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/natiassefa/react.js-template-basic.git my-business-site
   cd my-business-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize business information**
   Edit `src/config/contact.tsx` with your business details:
   ```typescript
   export const contactInfo: ContactInfo = {
     business: {
       name: 'Your Business Name',
       tagline: 'Your tagline here',
       description: 'Your business description',
       logo: '/logo.svg'
     },
     contact: {
       email: 'hello@yourbusiness.com',
       phone: '+1 (555) 123-4567',
       // ... more fields
     }
     // ... social media, address, hours
   }
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Visit [http://localhost:5173](http://localhost:5173)

## Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
```

### Building
```bash
npm run build        # Standard production build
npm run build:ssg    # SEO-optimized build with pre-rendering (recommended)
```

### Testing & Quality
```bash
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI interface
npm run lint         # Check code quality with ESLint
npm run typecheck    # Check TypeScript types
```

### Preview
```bash
npm run serve        # Preview production build locally
```

## Project Structure

```
src/
├── components/
│   ├── App/           # Main app component
│   ├── Header/        # Responsive navigation header
│   ├── Footer/        # Footer with links and social media
│   └── SEO/           # SEO metadata component
├── pages/
│   ├── Home.tsx       # Landing page
│   ├── About.tsx      # About page
│   ├── Contact.tsx    # Contact page with form
│   ├── Privacy.tsx    # Privacy policy
│   └── Terms.tsx      # Terms of service
├── config/
│   └── contact.tsx    # Centralized business configuration
├── hooks/
│   └── useMobile.ts   # Responsive design hook
├── Routes.tsx         # React Router configuration
└── index.tsx          # App entry point
```

## Customization Guide

### 1. Update Business Information
Edit `src/config/contact.tsx` to update:
- Business name, tagline, and description
- Contact email, phone, and support email
- Physical address and business hours
- Social media links (Twitter, Facebook, LinkedIn, etc.)

### 2. Add Your Logo
Replace `public/logo.svg` with your business logo.

### 3. Customize Open Graph Image
Add `public/og-image.jpg` (1200x630px) for social media previews.

### 4. Update Colors and Styling
The template uses TailwindCSS. Edit `tailwind.config.js` to customize:
- Brand colors
- Fonts
- Spacing
- Breakpoints

### 5. Add New Pages
1. Create page component in `src/pages/`
2. Add route in `src/Routes.tsx`
3. Update navigation in `src/config/contact.tsx`
4. Add route to pre-rendering in `package.json` under `reactSnap.include`

## SEO Optimization

This template includes comprehensive SEO features:

### Pre-rendering
Pages are pre-rendered to static HTML using react-snap, ensuring search engines can crawl all content.

### Meta Tags
Every page includes:
- Title tags with business name
- Meta descriptions
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URLs
- Structured business data

### Configuration
See [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) for detailed SEO documentation.

## Mobile Responsiveness

The template includes a custom `useMobile` hook for adaptive layouts:

```typescript
import { useMobile } from 'hooks'

export default function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useMobile()

  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
      {/* Your content */}
    </div>
  )
}
```

### Breakpoints
- `isMobile`: < 768px
- `isTablet`: 768px - 1024px
- `isDesktop`: > 1024px

## Deployment

### Recommended Hosting Providers

1. **[Vercel](https://vercel.com)** (Recommended)
   - Zero configuration
   - Automatic deployments from Git
   - Free SSL and CDN
   - Build command: `npm run build:ssg`
   - Output directory: `dist`

2. **[Netlify](https://netlify.com)**
   - Drag-and-drop deployment
   - Automatic deployments from Git
   - Form handling built-in
   - Build command: `npm run build:ssg`
   - Output directory: `dist`

3. **[Cloudflare Pages](https://pages.cloudflare.com)**
   - Fast global CDN
   - Free unlimited bandwidth
   - Build command: `npm run build:ssg`
   - Output directory: `dist`

### Deployment Settings
- **Build command**: `npm run build:ssg`
- **Output directory**: `dist`
- **Node version**: 18.x or higher

## Testing

### Unit Tests
```bash
npm run test
```

### Interactive Testing
```bash
npm run test:ui
```

Visit [http://localhost:51204/__vitest__/](http://localhost:51204/__vitest__/) to interact with tests.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions:
- Create an issue on [GitHub](https://github.com/natiassefa/react.js-template-basic/issues)
- Email: natnael.w.assefa@gmail.com

## Documentation

- [SEO Implementation Guide](./SEO_IMPLEMENTATION.md) - Comprehensive SEO documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Nati Assefa**
- GitHub: [@natiassefa](https://github.com/natiassefa)
- Email: natnael.w.assefa@gmail.com

## Acknowledgments

Built on top of [reactjs-vite-tailwindcss-boilerplate](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate) by João Paulo Moraes.
