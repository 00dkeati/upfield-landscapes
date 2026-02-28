import { Metadata } from 'next'
import Link from 'next/link'
import services from '../../data/services.json'

export const metadata: Metadata = {
  title: 'Our Services | Upfield Landscapes',
  description: 'Professional landscaping services in Petersfield & Hampshire. Patios, driveways, fencing, decking, turfing, garden renovations, walls & drainage.',
}

export default function ServicesPage() {
  return (
    <div>
      <section className="pt-32 pb-20 section-darker">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-brand-red">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            From patios and driveways to complete garden renovations, we deliver quality landscaping services across Petersfield and Hampshire.
          </p>
        </div>
      </section>

      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="p-8 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all group">
                <h2 className="text-2xl font-heading font-bold mb-4 group-hover:text-brand-red transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="text-brand-red">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                {service.materials && service.materials.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.materials.slice(0, 4).map((material, index) => (
                      <span key={index} className="px-3 py-1 bg-brand-dark text-sm text-gray-400">{material}</span>
                    ))}
                  </div>
                )}
                <span className="text-brand-red font-semibold group-hover:underline">
                  Learn more about {service.name.toLowerCase()} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Why Choose Upfield Landscapes</h2>
          <div className="grid md:grid-cols-4 gap-8">
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
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-brand-red mb-2">Local</div>
              <p className="text-gray-400">Petersfield Based</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/80 mb-8">Get in touch today for a free, no-obligation quote</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="bg-white text-brand-red px-8 py-4 font-semibold hover:bg-gray-100">Call 07393 730595</a>
            <a href="https://wa.me/447393730595" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-brand-red">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
