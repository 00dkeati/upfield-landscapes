import { Metadata } from 'next'
import Link from 'next/link'
import services from '../../../data/services.json'
import locations from '../../../data/locations.json'

interface ServicePageProps {
  params: { service: string }
}

export async function generateStaticParams() {
  return services.services.map((service) => ({ service: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.services.find((s) => s.slug === params.service)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.title} in Petersfield & Hampshire | Upfield Landscapes`,
    description: `Professional ${service.name.toLowerCase()} services in Petersfield and Hampshire. ${service.description.substring(0, 100)}... Free quotes. Call 07393 730595.`,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.services.find((s) => s.slug === params.service)
  if (!service) return <div className="py-20 text-center">Service not found</div>

  const allAreas = [locations.primary, ...locations.areas]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-darker">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            <span className="text-brand-red">{service.name}</span>
            <span className="text-white"> in Petersfield & Hampshire</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">{service.description}</p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:07393730595" className="btn-primary">Get Free Quote</a>
            <a href="https://wa.me/447393730595" className="btn-secondary">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-brand-darker border border-gray-700">
                <div className="w-8 h-8 bg-brand-red text-white rounded flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      {service.materials && service.materials.length > 0 && (
        <section className="py-20 section-darker">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Materials We Work With</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {service.materials.map((material, index) => (
                <span key={index} className="px-6 py-3 bg-brand-red text-white font-medium">
                  {material}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas We Cover */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">{service.name} in Your Area</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allAreas.slice(0, 12).map((area) => (
              <Link 
                key={area.slug}
                href={`/services/${params.service}/${area.slug}`}
                className="p-4 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all text-center"
              >
                <h3 className="font-semibold text-brand-red">{service.name} in {area.name}</h3>
                <p className="text-sm text-gray-500">{area.postcode_prefix}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/areas" className="text-brand-red font-semibold hover:underline">
              View all areas we cover →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8">
            Get in touch today for a free {service.name.toLowerCase()} quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="bg-white text-brand-red px-8 py-4 font-semibold hover:bg-gray-100">
              Call 07393 730595
            </a>
            <a href="https://wa.me/447393730595" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-brand-red">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Other Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.services
              .filter((s) => s.slug !== params.service)
              .map((otherService) => (
                <Link 
                  key={otherService.slug}
                  href={`/services/${otherService.slug}`}
                  className="p-4 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all"
                >
                  <h3 className="font-semibold text-brand-red">{otherService.name}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
