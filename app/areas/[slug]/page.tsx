import { Metadata } from 'next'
import Link from 'next/link'
import locations from '../../../data/locations.json'
import services from '../../../data/services.json'

interface AreaPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const allAreas = [locations.primary, ...locations.areas]
  return allAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const allAreas = [locations.primary, ...locations.areas]
  const area = allAreas.find((a) => a.slug === params.slug)
  
  if (!area) return { title: 'Area Not Found' }

  return {
    title: `Landscaping in ${area.name} | Upfield Landscapes`,
    description: `Professional landscaping services in ${area.name}, ${area.county}. Patios, driveways, fencing, decking & garden renovations. Free quotes. Call 07393 730595.`,
  }
}

export default function AreaPage({ params }: AreaPageProps) {
  const allAreas = [locations.primary, ...locations.areas]
  const area = allAreas.find((a) => a.slug === params.slug)

  if (!area) return <div className="py-20 text-center">Area not found</div>

  const distanceText = area.distance_miles === 0 
    ? 'Our home base' 
    : `${area.distance_miles} miles from Petersfield`

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-darker">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            <span className="text-white">Landscaping in </span>
            <span className="text-brand-red">{area.name}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">{area.description}</p>
          <p className="text-gray-500 mb-8">{distanceText} • {area.postcode_prefix} postcode area</p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:07393730595" className="btn-primary">Get Free Quote</a>
            <a href="https://wa.me/447393730595" className="btn-secondary">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Our Services in {area.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.services.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}/${params.slug}`}
                className="bg-brand-darker p-6 border border-gray-700 hover:border-brand-red transition-all group"
              >
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-brand-red">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {service.description.substring(0, 100)}...
                </p>
                <span className="text-brand-red font-semibold text-sm">
                  {service.name} in {area.name} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Why Choose Upfield Landscapes in {area.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">200+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">100%</div>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-lg">
              We're a local landscaping team based in Petersfield, covering {area.name} and the surrounding {area.county} villages. 
              Whether you need a new patio, driveway, fencing or a complete garden renovation - we take pride in doing the job properly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Garden in {area.name}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch today for a free, no-obligation quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="bg-white text-brand-red px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
              Call 07393 730595
            </a>
            <a href="https://wa.me/447393730595" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-brand-red transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Other Areas We Cover
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {locations.areas
              .filter((a) => a.slug !== params.slug)
              .slice(0, 12)
              .map((otherArea) => (
                <Link 
                  key={otherArea.slug}
                  href={`/areas/${otherArea.slug}`}
                  className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  {otherArea.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
