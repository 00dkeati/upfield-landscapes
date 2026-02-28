import { Metadata } from 'next'
import Link from 'next/link'
import services from '../../../../data/services.json'
import locations from '../../../../data/locations.json'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '../../../../components/StructuredData'

interface ServiceLocationPageProps {
  params: { service: string; location: string }
}

export async function generateStaticParams() {
  const allAreas = [locations.primary, ...locations.areas]
  const params: { service: string; location: string }[] = []
  
  services.services.forEach((service) => {
    allAreas.forEach((area) => {
      params.push({ service: service.slug, location: area.slug })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const service = services.services.find((s) => s.slug === params.service)
  const allAreas = [locations.primary, ...locations.areas]
  const area = allAreas.find((a) => a.slug === params.location)
  
  if (!service || !area) return { title: 'Page Not Found' }

  const title = `${service.name} ${area.name} | ${service.title} ${area.county}`
  const description = `Looking for ${service.name.toLowerCase()} in ${area.name}? Local ${area.county} landscapers with 10+ years experience. ${service.materials?.slice(0, 3).join(', ') || 'Quality materials'}. Free quotes. Call 07393 730595.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://upfieldlandscapes.com/services/${params.service}/${params.location}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://upfieldlandscapes.com/services/${params.service}/${params.location}`,
    },
  }
}

// Generate FAQs dynamically based on service and location
function generateFAQs(service: typeof services.services[0], area: { name: string; county: string; distance_miles: number }) {
  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${area.name}?`,
      answer: `${service.name} costs in ${area.name} vary depending on size and materials. For ${service.materials?.[0] || 'standard'} options, expect to pay from £80-150 per square metre including labour. We provide free, no-obligation quotes for all ${area.name} residents.`
    },
    {
      question: `Do you offer free quotes for ${service.name.toLowerCase()} in ${area.name}?`,
      answer: `Yes! We offer completely free, no-obligation quotes for all ${service.name.toLowerCase()} work in ${area.name} and the surrounding ${area.county} area. We'll visit your property, discuss your requirements, and provide a detailed written quote.`
    },
    {
      question: `How long does ${service.name.toLowerCase()} installation take in ${area.name}?`,
      answer: `Most ${service.name.toLowerCase()} projects in ${area.name} take between 3-7 days depending on size and complexity. We'll give you an accurate timeline when we quote. We always aim to minimise disruption to your daily routine.`
    },
    {
      question: `Are you local to ${area.name}?`,
      answer: area.distance_miles === 0 
        ? `Yes, we're based right here in ${area.name}! As your local landscapers, we understand the area and can respond quickly to enquiries.`
        : `We're based in Petersfield, just ${area.distance_miles} miles from ${area.name}. We regularly work in ${area.name} and throughout ${area.county}, so we know the area well.`
    },
    {
      question: `What materials do you use for ${service.name.toLowerCase()}?`,
      answer: service.materials && service.materials.length > 0
        ? `We use premium quality materials including ${service.materials.join(', ')}. We can discuss the best options for your project and budget during your free consultation.`
        : `We only use high-quality, durable materials from trusted suppliers. During your free consultation, we'll discuss the best options for your specific project.`
    }
  ]
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = services.services.find((s) => s.slug === params.service)
  const allAreas = [locations.primary, ...locations.areas]
  const area = allAreas.find((a) => a.slug === params.location)

  if (!service || !area) return <div className="py-20 text-center">Page not found</div>

  const distanceText = area.distance_miles === 0 
    ? 'Based in Petersfield' 
    : `${area.distance_miles} miles from our base`

  const faqs = generateFAQs(service, area)

  // Get nearby areas for internal linking
  const nearbyAreas = allAreas
    .filter(a => a.slug !== params.location)
    .sort((a, b) => a.distance_miles - b.distance_miles)
    .slice(0, 6)

  const breadcrumbs = [
    { name: 'Home', url: 'https://upfieldlandscapes.com' },
    { name: 'Services', url: 'https://upfieldlandscapes.com/services' },
    { name: service.name, url: `https://upfieldlandscapes.com/services/${service.slug}` },
    { name: area.name, url: `https://upfieldlandscapes.com/services/${service.slug}/${area.slug}` },
  ]

  return (
    <div>
      <ServiceSchema 
        serviceName={service.name}
        serviceDescription={service.description}
        location={area.name}
        slug={service.slug}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="pt-32 pb-20 section-darker">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-brand-red">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-brand-red">Services</Link></li>
              <li>/</li>
              <li><Link href={`/services/${service.slug}`} className="hover:text-brand-red">{service.name}</Link></li>
              <li>/</li>
              <li className="text-white">{area.name}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-brand-red">{service.name}</span>
            <span className="text-white"> in {area.name}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Professional {service.name.toLowerCase()} installation in {area.name}, {area.county}. Local experts with 10+ years experience.
          </p>
          <p className="text-gray-500 mb-8">{distanceText} • {area.postcode_prefix} postcodes • Free quotes</p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:07393730595" className="btn-primary">
              <span className="mr-2">📞</span> Get Free Quote
            </a>
            <a href="https://wa.me/447393730595" className="btn-secondary">
              <span className="mr-2">💬</span> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <h2 className="text-3xl font-heading font-bold mb-6 text-white">Professional {service.title} in {area.name}</h2>
            
            <p className="text-gray-300 text-lg mb-6">
              {service.description}
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              {area.distance_miles === 0 
                ? `As Petersfield's local landscaping experts, we've been transforming gardens across ${area.name} for over a decade. We understand the local area, local property types, and what works best for gardens in ${area.county}.`
                : `Serving ${area.name} from our Petersfield base (just ${area.distance_miles} miles away), we're your local choice for quality ${service.name.toLowerCase()}. We regularly work throughout ${area.name} and the wider ${area.county} area.`
              }
            </p>

            <p className="text-gray-300 text-lg">
              Whether you have a small courtyard or a large garden, we tailor our {service.name.toLowerCase()} services to suit your space, style, and budget. Every project starts with a free site visit where we discuss your ideas and provide an honest, detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">What's Included in Our {service.name} Service</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-brand-dark border border-gray-700 hover:border-brand-red transition-colors">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                <div>
                  <p className="text-white font-medium text-lg">{feature}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4 p-6 bg-brand-dark border border-gray-700 hover:border-brand-red transition-colors">
              <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
              <div>
                <p className="text-white font-medium text-lg">Free site visit & detailed quote</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-brand-dark border border-gray-700 hover:border-brand-red transition-colors">
              <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</div>
              <div>
                <p className="text-white font-medium text-lg">Full site clearance & waste removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      {service.materials && service.materials.length > 0 && (
        <section className="py-20 section-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-4 text-center">{service.name} Materials in {area.name}</h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              We use only premium quality materials from trusted suppliers. Here are some of our most popular options:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {service.materials.map((material, index) => (
                <span key={index} className="px-6 py-3 bg-brand-red text-white font-medium text-lg">{material}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Why {area.name} Residents Choose Upfield Landscapes</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">10+</div>
              <p className="text-white font-medium">Years Experience</p>
              <p className="text-gray-500 text-sm mt-1">Established local experts</p>
            </div>
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Local</div>
              <p className="text-white font-medium">Petersfield Based</p>
              <p className="text-gray-500 text-sm mt-1">{area.distance_miles} miles from {area.name}</p>
            </div>
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Free</div>
              <p className="text-white font-medium">No-Obligation Quotes</p>
              <p className="text-gray-500 text-sm mt-1">Honest, upfront pricing</p>
            </div>
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">5★</div>
              <p className="text-white font-medium">Customer Reviews</p>
              <p className="text-gray-500 text-sm mt-1">Trusted by {area.county} homeowners</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">{service.name} in {area.name} - FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-brand-darker border border-gray-700 hover:border-brand-red transition-colors">
                <summary className="p-6 cursor-pointer font-medium text-lg text-white flex justify-between items-center">
                  {faq.question}
                  <span className="text-brand-red group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready for Your New {service.name} in {area.name}?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. We'll visit your property, discuss your ideas, and provide an honest price.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="bg-white text-brand-red px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors">
              📞 Call 07393 730595
            </a>
            <a href="https://wa.me/447393730595" className="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-brand-red transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other Services in This Area */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Other Services in {area.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.services.filter((s) => s.slug !== params.service).map((otherService) => (
              <Link key={otherService.slug} href={`/services/${otherService.slug}/${params.location}`}
                className="p-5 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all group">
                <h3 className="font-semibold text-white group-hover:text-brand-red transition-colors">{otherService.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{otherService.name} in {area.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same Service Nearby Areas */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">{service.name} in Nearby Areas</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {nearbyAreas.map((otherArea) => (
              <Link key={otherArea.slug} href={`/services/${params.service}/${otherArea.slug}`}
                className="px-5 py-3 border border-gray-600 text-gray-300 hover:border-brand-red hover:text-white hover:bg-brand-red transition-all">
                {service.name} in {otherArea.name}
              </Link>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href={`/services/${service.slug}`} className="text-brand-red hover:underline">
              View all {service.name} locations →
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
