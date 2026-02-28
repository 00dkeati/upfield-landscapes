import { MetadataRoute } from 'next'
import servicesData from '../data/services.json'
import locationsData from '../data/locations.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://upfieldlandscapes.com'
  
  const services = servicesData.services
  const allLocations = [locationsData.primary, ...locationsData.areas]
  
  // Blog posts
  const blogPosts = [
    'patio-cost-hampshire-2026',
    'porcelain-vs-sandstone-patios',
    'driveway-ideas-hampshire',
    'best-fencing-options-hampshire',
    'composite-decking-guide',
  ]

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Blog posts
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })
  
  // Service pages
  services.forEach((service) => {
    routes.push({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })
  
  // Area pages
  allLocations.forEach((location) => {
    routes.push({
      url: `${baseUrl}/areas/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })
  
  // Service + Location pages
  services.forEach((service) => {
    allLocations.forEach((location) => {
      routes.push({
        url: `${baseUrl}/services/${service.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })
  
  return routes
}
