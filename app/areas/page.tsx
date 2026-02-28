import { Metadata } from 'next'
import Link from 'next/link'
import locations from '../../data/locations.json'

export const metadata: Metadata = {
  title: 'Areas We Cover | Upfield Landscapes',
  description: 'Upfield Landscapes covers Petersfield and surrounding Hampshire villages including Liss, Horndean, Waterlooville, Alton, Midhurst, and more.',
}

export default function AreasPage() {
  const allAreas = [locations.primary, ...locations.areas]

  return (
    <div>
      <section className="pt-32 pb-20 section-darker">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            <span className="text-white">Areas </span>
            <span className="text-brand-red">We Cover</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Based in Petersfield, we serve the surrounding Hampshire and West Sussex villages. Quality landscaping services delivered locally.
          </p>
        </div>
      </section>

      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our Home Base</h2>
          <Link href={`/areas/${locations.primary.slug}`}
            className="block max-w-lg mx-auto p-8 bg-brand-red text-white hover:bg-red-600 transition-colors text-center">
            <h3 className="text-2xl font-heading font-bold mb-2">{locations.primary.name}</h3>
            <p className="text-white/80 mb-4">{locations.primary.description}</p>
            <span className="font-semibold">View services in {locations.primary.name} →</span>
          </Link>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Areas We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.areas.sort((a, b) => a.distance_miles - b.distance_miles).map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`}
                className="p-6 bg-brand-dark border border-gray-700 hover:border-brand-red transition-all">
                <h3 className="text-xl font-heading font-bold text-brand-red mb-2">{area.name}</h3>
                <p className="text-gray-400 mb-2">{area.description}</p>
                <p className="text-sm text-gray-500">{area.distance_miles} miles from Petersfield • {area.postcode_prefix}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-xl text-white/80 mb-8">Give us a call - we may still be able to help!</p>
          <a href="tel:07393730595" className="bg-white text-brand-red px-8 py-4 font-semibold hover:bg-gray-100 inline-block">
            Call 07393 730595
          </a>
        </div>
      </section>
    </div>
  )
}
