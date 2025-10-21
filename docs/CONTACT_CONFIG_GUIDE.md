# Contact Configuration Guide

This template includes a centralized contact and business information configuration system. All business details, contact information, social media links, and navigation are managed from a single source.

## Configuration File

Location: `src/config/contact.tsx`

This file contains all your business information that will be used throughout the application.

## Quick Start

### 1. Update Business Information

```typescript
export const contactInfo: ContactInfo = {
  business: {
    name: 'YourBrand',                    // Your business name
    tagline: 'Building the future...',    // Company tagline
    description: 'We provide...',         // Brief description
    logo: '/logo.svg'                     // Logo path
  },
  // ... more config
}
```

###2. Update Contact Information

```typescript
contact: {
  email: 'hello@yourbrand.com',          // Primary email
  phone: '+1 (555) 123-4567',            // Primary phone
  supportEmail: 'support@yourbrand.com', // Support email (optional)
  salesEmail: 'sales@yourbrand.com'      // Sales email (optional)
}
```

### 3. Update Address

```typescript
address: {
  street: '123 Business Street, Suite 100',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94102',
  country: 'United States'
}
```

### 4. Update Social Media Links

```typescript
social: {
  twitter: 'https://twitter.com/yourbrand',
  facebook: 'https://facebook.com/yourbrand',
  instagram: 'https://instagram.com/yourbrand',
  linkedin: 'https://linkedin.com/company/yourbrand',
  github: 'https://github.com/yourbrand',
  youtube: 'https://youtube.com/@yourbrand',
  tiktok: 'https://tiktok.com/@yourbrand'  // Optional
}
```

**Note:** Only configured social links will appear in your components. Remove or comment out any platforms you don't use.

### 5. Update Legal Information

```typescript
legal: {
  companyLegalName: 'YourBrand, Inc.',
  registrationNumber: '12-3456789',       // Optional
  taxId: 'XX-XXXXXXX'                     // Optional
}
```

### 6. Update Business Hours

```typescript
hours: {
  timezone: 'PST',
  weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
  weekends: 'Saturday - Sunday: Closed',
  note: 'Emergency support available 24/7'  // Optional
}
```

## Using Contact Info in Components

### Import the Configuration

```typescript
import { contactInfo, getSocialLinks, getFullBusinessName } from 'config'
```

### Available Imports

| Import | Description |
|--------|-------------|
| `contactInfo` | Main configuration object |
| `navigationLinks` | Pre-configured navigation menus |
| `getSocialLinks()` | Function that returns social links with icons |
| `getFormattedPhone()` | Returns formatted phone number |
| `getFormattedAddress()` | Returns formatted multi-line address |
| `getFullBusinessName()` | Returns legal name or business name |
| `getCurrentYear()` | Returns current year for copyright |

### Example Usage

#### Display Business Name

```tsx
function Header() {
  return (
    <div>
      <h1>{contactInfo.business.name}</h1>
      <p>{contactInfo.business.tagline}</p>
    </div>
  )
}
```

#### Display Contact Information

```tsx
function ContactPage() {
  return (
    <div>
      <p>Email: {contactInfo.contact.email}</p>
      <p>Phone: {getFormattedPhone()}</p>
      <p>Address: {getFormattedAddress()}</p>
    </div>
  )
}
```

#### Display Social Media Links

```tsx
function SocialLinks() {
  const socialLinks = getSocialLinks()

  return (
    <div>
      {socialLinks.map((social) => (
        <a key={social.name} href={social.href}>
          <social.icon className="w-6 h-6" />
          {social.name}
        </a>
      ))}
    </div>
  )
}
```

#### Use Navigation Links

```tsx
function Navigation() {
  return (
    <nav>
      {navigationLinks.main.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  )
}
```

## Navigation Configuration

The template includes pre-configured navigation structures:

```typescript
export const navigationLinks = {
  main: [       // Primary navigation
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    // ...
  ],
  product: [    // Product-related links (footer)
    { name: 'Features', href: '/features' },
    // ...
  ],
  company: [    // Company links (footer)
    { name: 'About', href: '/about' },
    // ...
  ],
  legal: [      // Legal links (footer)
    { name: 'Privacy', href: '/privacy' },
    // ...
  ]
}
```

### Customize Navigation

Edit `src/config/contact.tsx` and modify the `navigationLinks` object:

```typescript
export const navigationLinks = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },  // Changed
    { name: 'Services', href: '/services' },  // Added
    { name: 'Contact', href: '/contact' }
  ],
  // ... other sections
}
```

## Components Using Contact Config

The following components automatically use the centralized configuration:

### Header Component
- Business name
- Main navigation links
- Automatically responsive

### Footer Component
- Business name (legal)
- Product, company, and legal navigation
- Social media links
- Current year for copyright
- Automatically responsive

## Helper Functions

### `getSocialLinks()`

Returns an array of configured social links with icons:

```typescript
const socialLinks = getSocialLinks()
// Returns: [{ name: 'Twitter', href: '...', icon: Component }, ...]
```

**Icons Included:**
- Twitter
- Facebook
- Instagram
- LinkedIn
- GitHub
- YouTube
- TikTok

### `getFormattedPhone()`

Returns the formatted phone number from config:

```typescript
const phone = getFormattedPhone()
// Returns: "+1 (555) 123-4567"
```

### `getFormattedAddress()`

Returns a formatted multi-line address:

```typescript
const address = getFormattedAddress()
// Returns:
// "123 Business Street, Suite 100
//  San Francisco, CA 94102
//  United States"
```

### `getFullBusinessName()`

Returns the legal company name, fallback to business name:

```typescript
const name = getFullBusinessName()
// Returns: "YourBrand, Inc."
```

### `getCurrentYear()`

Returns the current year (useful for copyright):

```typescript
const year = getCurrentYear()
// Returns: 2025
```

## TypeScript Types

### `ContactInfo` Interface

Full type definition for the contact configuration:

```typescript
interface ContactInfo {
  business: {
    name: string
    tagline: string
    description: string
    logo?: string
  }
  contact: {
    email: string
    phone: string
    supportEmail?: string
    salesEmail?: string
  }
  address: {
    street?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
  }
  social: {
    twitter?: string
    facebook?: string
    instagram?: string
    linkedin?: string
    github?: string
    youtube?: string
    tiktok?: string
  }
  legal: {
    companyLegalName?: string
    registrationNumber?: string
    taxId?: string
  }
  hours?: {
    timezone: string
    weekdays?: string
    weekends?: string
    note?: string
  }
}
```

## Best Practices

### 1. Single Source of Truth
Always update contact information in `src/config/contact.tsx`, never hardcode values in components.

### 2. Use Helper Functions
Use provided helper functions instead of accessing nested properties directly:

```typescript
// Good
const name = getFullBusinessName()

// Avoid
const name = contactInfo.legal.companyLegalName || contactInfo.business.name
```

### 3. Remove Unused Social Media
Comment out or remove social media platforms you don't use:

```typescript
social: {
  twitter: 'https://twitter.com/yourbrand',
  // facebook: 'https://facebook.com/yourbrand',  // Not using Facebook
  instagram: 'https://instagram.com/yourbrand'
}
```

### 4. Keep Navigation Consistent
Ensure navigation links are consistent across different sections (main, footer, mobile menu).

### 5. Update for Each Client
When selling this template to small businesses, only update `src/config/contact.tsx` with their information. All components will automatically reflect the changes.

## Selling Points for Small Businesses

When presenting this template to clients, highlight:

1. **Easy Updates**: All business information in one file
2. **No Code Required**: Simple configuration format
3. **Consistent Branding**: Changes apply everywhere automatically
4. **Social Media Ready**: Just add links, icons included
5. **Mobile Responsive**: All components adapt to screen size
6. **Professional**: Proper footer with legal information
7. **SEO Friendly**: Structured contact information

## Troubleshooting

### Social links not appearing?
- Check that the URL is configured in `contactInfo.social`
- Verify the social platform name is spelled correctly
- Only platforms with URLs will be displayed

### Business name not updating?
- Clear browser cache and rebuild (`npm run build`)
- Check that you're importing from `'config'` not hardcoding values
- Verify the file was saved after making changes

### Navigation links broken?
- Ensure `href` values start with `/` for internal routes
- Check that routes match your routing configuration
- Verify navigation structure in `navigationLinks` object

## Example: Complete Setup for a Client

```typescript
// src/config/contact.tsx

export const contactInfo: ContactInfo = {
  business: {
    name: 'Acme Coffee Shop',
    tagline: 'Brewing Excellence Since 2020',
    description: 'Artisanal coffee and fresh pastries in downtown.',
    logo: '/acme-logo.svg'
  },
  contact: {
    email: 'hello@acmecoffee.com',
    phone: '+1 (415) 555-0123',
    supportEmail: 'support@acmecoffee.com'
  },
  address: {
    street: '456 Market Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    country: 'United States'
  },
  social: {
    instagram: 'https://instagram.com/acmecoffee',
    facebook: 'https://facebook.com/acmecoffee'
  },
  legal: {
    companyLegalName: 'Acme Coffee Shop, LLC'
  },
  hours: {
    timezone: 'PST',
    weekdays: 'Monday - Friday: 7:00 AM - 7:00 PM',
    weekends: 'Saturday - Sunday: 8:00 AM - 6:00 PM'
  }
}
```

That's it! The entire application will now display Acme Coffee Shop's information consistently across all pages.
