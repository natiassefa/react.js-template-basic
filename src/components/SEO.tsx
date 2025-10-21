import { Helmet } from 'react-helmet-async'
import { contactInfo } from 'config'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

/**
 * SEO Component for managing page metadata
 * Uses React Helmet for dynamic meta tags that work with SSG
 */
export default function SEO({
  title,
  description,
  image = '/og-image.jpg',
  url,
  type = 'website'
}: SEOProps) {
  const siteTitle = contactInfo.business.name
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const siteDescription = description || contactInfo.business.description
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={siteTitle} />

      {/* Contact Information for Rich Snippets */}
      <meta property="og:email" content={contactInfo.contact.email} />
      <meta property="og:phone_number" content={contactInfo.contact.phone} />
      {contactInfo.address.street && (
        <>
          <meta property="og:street_address" content={contactInfo.address.street} />
          <meta property="og:locality" content={contactInfo.address.city} />
          <meta property="og:region" content={contactInfo.address.state} />
          <meta property="og:postal_code" content={contactInfo.address.zipCode} />
          <meta property="og:country_name" content={contactInfo.address.country} />
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}
