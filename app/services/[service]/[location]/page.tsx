import { Metadata } from 'next'
import Link from 'next/link'
import services from '../../../../data/services.json'
import locations from '../../../../data/locations.json'

interface ServiceLocationPageProps {
  params: { service: string; location: string }
}

export async function generateStaticParams() {
  const allAreas = [locations.primary, ...locations.areas]
  const params: { service: string; location: string }[] = []
  
  services.services.forEach((service) => {
    if (service.priority <= 2) {
      allAreas.forEach((area) => {
        if (area.priority <= 2 || area.slug === locations.primary.slug) {
          params.push({ service: service.slug, location: area.slug })
        }
      })
    }
  })
  
  return params
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const service = services.services.find((s) => s.slug === params.service)
  const allAreas = [locations.primary, ...locations.areas]
  const area = allAreas.find((a) => a.slug === params.location)
  
  if (!service || !area) return { title: 'Page Not Found' }

  return {
    title: `${service.name} in ${area.name} | Upfield Landscapes`,
    description: `Professional ${service.name.toLowerCase()} installation in ${area.name}, ${area.county}. ${service.description.substring(0, 80)}... Free quotes. Call 07393 730595.`,
  }
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = services.services.find((s) => s.slug === params.service)
  const allAreas = [locations.primary, ...locations.areas]
  const area = allAreas.find((a) => a.slug === params.location)

  if (!service || !area) return <div className="py-20 text-center">Page not found</div>

  const distanceText = area.distance_miles === 0 
    ? 'Based in Petersfield' 
    : `${area.distance_miles} miles from our base`

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 section-darker">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-brand-red">{service.name}</span>
            <span className="text-white"> in {area.name}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Professional {service.name.toLowerCase()} installation and services in {area.name}, {area.county}
          </p>
          <p className="text-gray-500 mb-8">{distanceText} • {area.postcode_prefix} area</p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:07393730595" className="btn-primary">Get Free Quote</a>
            <a href="https://wa.me/447393730595" className="btn-secondary">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6">{service.title} in {area.name}</h2>
            <p className="text-gray-300 text-lg mb-6">{service.description}</p>
            <p className="text-gray-300 text-lg">
              We're a local landscaping team serving {area.name} and the wider {area.county} area. 
              {area.distance_miles > 0 
                ? ` Located just ${area.distance_miles} miles from our Petersfield base, we regularly work in ${area.name}.`
                : ` Based right here in Petersfield, we're your local experts for ${service.name.toLowerCase()}.`
              }
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our {service.name} Services Include</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-brand-dark border border-gray-700">
                <div className="w-8 h-8 bg-brand-red text-white rounded flex items-center justify-center flex-shrink-0">✓</div>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      {service.materials && service.materials.length > 0 && (
        <section className="py-20 section-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Materials We Use</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {service.materials.map((material, index) => (
                <span key={index} className="px-6 py-3 bg-brand-red text-white font-medium">{material}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Why {area.name} Residents Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Local</div>
              <p className="text-gray-400">Petersfield Based</p>
            </div>
            <div className="text-center bg-brand-dark p-6 border border-gray-700">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">100%</div>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Get Your Free {service.name} Quote in {area.name}</h2>
          <p className="text-xl text-white/80 mb-8">No obligation - just an honest quote</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="bg-white text-brand-red px-8 py-4 font-semibold hover:bg-gray-100">Call 07393 730595</a>
            <a href="https://wa.me/447393730595" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-brand-red">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Other Services in {area.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.services.filter((s) => s.slug !== params.service).map((otherService) => (
              <Link key={otherService.slug} href={`/services/${otherService.slug}/${params.location}`}
                className="p-4 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all">
                <h3 className="font-semibold text-brand-red">{otherService.name} in {area.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same Service Other Areas */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">{service.name} in Other Areas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {allAreas.filter((a) => a.slug !== params.location).slice(0, 10).map((otherArea) => (
              <Link key={otherArea.slug} href={`/services/${params.service}/${otherArea.slug}`}
                className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-brand-red hover:text-brand-red transition-colors">
                {service.name} in {otherArea.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
