import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import locations from '../../../data/locations.json'

export const metadata: Metadata = {
  title: 'Patio Installation Petersfield | Porcelain Paving & Indian Sandstone | Upfield Landscapes',
  description: 'Expert patio installation in Petersfield & Hampshire. Specialists in porcelain paving, Indian sandstone & natural stone patios. Free quotes, quality workmanship. Call 07393 730595.',
  keywords: 'patio installation petersfield, porcelain paving petersfield, indian sandstone patio hampshire, natural stone patio, patio contractors petersfield, garden patio hampshire',
}

const galleryImages = [
  { src: '/images/gallery/porcelain-patio-pergola-1.jpg', alt: 'Porcelain patio with timber pergola and raised beds in Petersfield' },
  { src: '/images/gallery/sandstone-brick-steps-1.jpg', alt: 'Indian sandstone patio with brick retaining wall and steps' },
  { src: '/images/gallery/porcelain-patio-drainage-1.jpg', alt: 'Large porcelain patio with integrated drainage channel' },
  { src: '/images/gallery/sandstone-patio-views-1.jpg', alt: 'Natural sandstone patio with countryside views in Hampshire' },
  { src: '/images/gallery/porcelain-patio-aerial-1.jpg', alt: 'Aerial view of porcelain patio with sleeper raised beds' },
  { src: '/images/gallery/sandstone-steps-cottage-1.jpg', alt: 'Natural stone patio and steps at period cottage' },
]

const faqs = [
  {
    question: 'How much does a new patio cost in Petersfield?',
    answer: 'Patio costs vary depending on size, materials and complexity. As a guide, a basic porcelain patio starts from around £80-100 per square metre, while premium Indian sandstone ranges from £100-150 per square metre. This includes groundwork, materials and installation. We provide free, no-obligation quotes for all projects.'
  },
  {
    question: 'What is the best paving material for a patio?',
    answer: 'Porcelain paving is currently the most popular choice due to its durability, low maintenance and stunning appearance. Indian sandstone offers a more natural, traditional look and is excellent value. For period properties, natural limestone or slate can complement the character of your home. We\'ll help you choose the right material for your property and budget.'
  },
  {
    question: 'How long does it take to install a patio?',
    answer: 'A typical patio installation takes 3-5 days depending on size and complexity. This includes excavation, laying the sub-base, screeding and laying the paving. Larger projects or those requiring retaining walls and steps may take 1-2 weeks. We\'ll give you a clear timeline before starting work.'
  },
  {
    question: 'Do I need planning permission for a patio?',
    answer: 'Most patios don\'t require planning permission as they\'re classed as permitted development. However, if your property is listed, in a conservation area, or you\'re covering a large area that affects drainage, you may need approval. We can advise on this during your consultation.'
  },
  {
    question: 'What groundwork is needed for a patio?',
    answer: 'Proper groundwork is essential for a long-lasting patio. We excavate to the correct depth (typically 150-200mm), install a compacted MOT Type 1 sub-base, and lay the paving on a cement/sand mortar bed. We also ensure proper drainage falls away from your property. Cutting corners on groundwork leads to sinking and cracking - we do it properly.'
  },
  {
    question: 'Do you offer a guarantee on your patio work?',
    answer: 'Yes, all our patio installations come with a workmanship guarantee. We\'re confident in our work because we use quality materials and proper installation techniques. Many of the materials we use also come with manufacturer warranties.'
  },
]

export default function PatiosPage() {
  const allAreas = [locations.primary, ...locations.areas]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-darker relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-brand-red font-semibold mb-4 tracking-wider">PATIO INSTALLATION SPECIALISTS</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-white">Beautiful </span>
              <span className="text-brand-red">Patios</span>
              <span className="text-white"> in Petersfield & Hampshire</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your garden with a stunning new patio. We specialise in <strong className="text-white">porcelain paving</strong>, <strong className="text-white">Indian sandstone</strong> and <strong className="text-white">natural stone patios</strong> - professionally installed with proper groundwork to last for years.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="tel:07393730595" className="btn-primary">Get Free Quote</a>
              <a href="https://wa.me/447393730595" className="btn-secondary">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Expert Patio Installation in Petersfield</h2>
            <div className="prose prose-lg prose-invert mx-auto text-gray-300">
              <p>
                Looking for a professional patio installer in Petersfield or the surrounding Hampshire area? At Upfield Landscapes, we create beautiful outdoor spaces that you'll enjoy for years to come.
              </p>
              <p>
                Whether you're dreaming of a sleek <strong className="text-white">porcelain patio</strong> for entertaining, a warm <strong className="text-white">Indian sandstone</strong> terrace that complements your garden, or a traditional <strong className="text-white">natural stone</strong> patio for a period property - we have the skills and experience to bring your vision to life.
              </p>
              <p>
                Based in Petersfield, we cover all of Hampshire including Liss, Liphook, Horndean, Waterlooville, Alton and the surrounding villages. Every patio we install is built on proper foundations with correct drainage - no shortcuts, just quality workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4 text-center">Recent Patio Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Take a look at some of our recent patio installations across Hampshire. From contemporary porcelain to traditional sandstone - we deliver quality results every time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-72 overflow-hidden rounded-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paving Types */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Patio Materials We Install</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Porcelain */}
            <div className="bg-brand-darker border border-gray-700 p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-red mb-4">Porcelain Paving</h3>
              <p className="text-gray-300 mb-4">
                The most popular choice for modern gardens. Porcelain paving offers incredible durability, virtually zero maintenance and a stunning contemporary look.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Frost-proof and non-porous</li>
                <li>✓ Doesn't stain or harbour algae</li>
                <li>✓ Wide range of colours and styles</li>
                <li>✓ Consistent sizing for clean lines</li>
                <li>✓ 20mm thick for strength</li>
              </ul>
            </div>

            {/* Indian Sandstone */}
            <div className="bg-brand-darker border border-gray-700 p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-red mb-4">Indian Sandstone</h3>
              <p className="text-gray-300 mb-4">
                A natural stone with beautiful colour variations. Indian sandstone creates a warm, traditional feel and mellows beautifully over time.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Natural colour variations</li>
                <li>✓ Available in multiple shades</li>
                <li>✓ Excellent value for money</li>
                <li>✓ Suits traditional properties</li>
                <li>✓ Riven or smooth finishes</li>
              </ul>
            </div>

            {/* Natural Stone */}
            <div className="bg-brand-darker border border-gray-700 p-8">
              <h3 className="text-2xl font-heading font-bold text-brand-red mb-4">Natural Stone</h3>
              <p className="text-gray-300 mb-4">
                Limestone, slate and other natural stones for a premium finish. Perfect for period properties or those wanting a unique, high-end look.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Limestone for elegance</li>
                <li>✓ Slate for contemporary style</li>
                <li>✓ Granite for durability</li>
                <li>✓ Each piece unique</li>
                <li>✓ Timeless appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Patio Installation Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {[
                { step: '1', title: 'Free Consultation', desc: 'We visit your property to discuss your ideas, measure up and provide expert advice on materials and design. You\'ll receive a detailed, no-obligation quote.' },
                { step: '2', title: 'Design & Planning', desc: 'We help you choose the right paving, plan the layout and work out levels and drainage. If needed, we\'ll handle any planning requirements.' },
                { step: '3', title: 'Excavation & Groundwork', desc: 'We excavate to the correct depth, remove spoil, and install a properly compacted MOT Type 1 sub-base. This is crucial for a patio that won\'t sink or crack.' },
                { step: '4', title: 'Laying & Finishing', desc: 'Your paving is laid on a cement/sand bed with precise cuts and proper spacing. We point with quality jointing compound and install any edging or borders.' },
                { step: '5', title: 'Final Touches', desc: 'We clean down the finished patio, remove all waste and leave your garden tidy. We\'ll walk you through the finished job and provide aftercare advice.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Why Choose Upfield Landscapes?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Local & Reliable', desc: 'Based in Petersfield, we\'re a local team you can trust. We turn up when we say we will.' },
              { title: 'Quality Workmanship', desc: 'Proper groundwork, quality materials and attention to detail on every project.' },
              { title: 'Fair Pricing', desc: 'Honest quotes with no hidden extras. We price fairly for quality work.' },
              { title: 'Fully Insured', desc: 'Full public liability insurance for your peace of mind.' },
            ].map((item, index) => (
              <div key={index} className="bg-brand-darker border border-gray-700 p-6 text-center">
                <h3 className="text-lg font-bold text-brand-red mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Patio Installation FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-brand-dark border border-gray-700 p-6">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4 text-center">Patio Installation Across Hampshire</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We install patios throughout Petersfield and the surrounding Hampshire villages. Click your area for local information.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/services/patios/${area.slug}`}
                className="p-4 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all text-center"
              >
                <h3 className="font-semibold text-brand-red">Patios in {area.name}</h3>
                <p className="text-sm text-gray-500">{area.postcode_prefix}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free patio quote. We'll visit your property, discuss your ideas and provide a detailed, no-obligation price.
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
            {[
              { name: 'Driveways', slug: 'driveways' },
              { name: 'Fencing', slug: 'fencing' },
              { name: 'Decking', slug: 'decking' },
              { name: 'Turfing & Lawns', slug: 'turfing' },
              { name: 'Garden Renovations', slug: 'garden-renovations' },
              { name: 'Walls & Brickwork', slug: 'walls-brickwork' },
              { name: 'Drainage', slug: 'drainage' },
            ].map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-4 bg-brand-darker border border-gray-700 hover:border-brand-red transition-all"
              >
                <h3 className="font-semibold text-brand-red">{service.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
