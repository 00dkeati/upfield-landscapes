export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://upfieldlandscapes.com/#business",
    "name": "Upfield Landscapes",
    "description": "Professional landscaping services in Petersfield and Hampshire. Specialists in patios, driveways, fencing, decking, and complete garden renovations.",
    "url": "https://upfieldlandscapes.com",
    "telephone": "+447393730595",
    "email": "info@upfieldlandscapes.com",
    "image": "https://upfieldlandscapes.com/images/logo.png",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Petersfield",
      "addressRegion": "Hampshire",
      "postalCode": "GU31",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.0038",
      "longitude": "-0.9385"
    },
    "areaServed": [
      { "@type": "City", "name": "Petersfield" },
      { "@type": "City", "name": "Waterlooville" },
      { "@type": "City", "name": "Horndean" },
      { "@type": "City", "name": "Liss" },
      { "@type": "City", "name": "Liphook" },
      { "@type": "City", "name": "Alton" },
      { "@type": "City", "name": "Midhurst" },
      { "@type": "City", "name": "Havant" },
      { "@type": "City", "name": "Bordon" },
      { "@type": "City", "name": "Haslemere" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landscaping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patio Installation",
            "description": "Professional patio installation using Indian sandstone, porcelain paving, and natural stone."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Driveway Installation",
            "description": "Block paving, resin bound, and gravel driveways."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fencing Installation",
            "description": "Closeboard fencing, fence panels, and garden gates."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garden Renovations",
            "description": "Complete garden makeovers and landscaping projects."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/upfieldlandscapes"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  serviceName: string
  serviceDescription: string
  location?: string
  slug: string
}

export function ServiceSchema({ serviceName, serviceDescription, location, slug }: ServiceSchemaProps) {
  const baseUrl = 'https://upfieldlandscapes.com'
  const url = location 
    ? `${baseUrl}/services/${slug}/${location.toLowerCase().replace(/\s+/g, '-')}`
    : `${baseUrl}/services/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": location ? `${serviceName} in ${location}` : serviceName,
    "description": serviceDescription,
    "url": url,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://upfieldlandscapes.com/#business"
    },
    "areaServed": location ? {
      "@type": "City",
      "name": location
    } : {
      "@type": "State",
      "name": "Hampshire"
    },
    "serviceType": serviceName
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
