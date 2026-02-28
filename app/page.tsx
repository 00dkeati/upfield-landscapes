import Link from 'next/link'
import services from '../data/services.json'
import locations from '../data/locations.json'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="text-white">TRANSFORMING </span>
            <span className="text-brand-red">OUTDOOR</span>
            <br />
            <span className="text-brand-red">SPACES</span>
            <span className="text-white"> IN PETERSFIELD</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 tracking-widest">
            QUALITY LANDSCAPING IN PETERSFIELD & HAMPSHIRE
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#contact" className="btn-primary">
              GET FREE QUOTE
            </Link>
            <Link href="#portfolio" className="btn-secondary">
              VIEW OUR WORK
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-brand-red rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Crafting Beautiful Landscapes
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're a local landscaping team covering Petersfield and the surrounding Hampshire villages. 
              Whether it's a new patio, driveway, fencing or a complete garden renovation - we take pride in doing the job properly.
            </p>
            <p className="text-gray-300 text-lg mb-12">
              No job too big or small. We'll give you an honest quote, turn up when we say we will, 
              and leave your garden looking better than you imagined.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-heading font-bold text-brand-red">10+</div>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold text-brand-red">200+</div>
                <p className="text-gray-400 mt-2">Projects Completed</p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold text-brand-red">100%</div>
                <p className="text-gray-400 mt-2">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.services.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-brand-darker p-8 hover:bg-brand-red/10 border border-gray-700 hover:border-brand-red transition-all group"
              >
                <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-brand-red transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description.substring(0, 120)}...
                </p>
                <span className="text-brand-red font-semibold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Recent Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Porcelain Patio & Garden Room', desc: 'Grey porcelain paving with white gravel border' },
              { title: 'Porcelain Patio', desc: 'Large format porcelain with drainage channel' },
              { title: 'Block Paved Driveway', desc: 'Premium block paving with borders' },
              { title: 'Composite Decking', desc: 'Low-maintenance deck with pergola' },
              { title: 'Cottage Garden', desc: 'Traditional design with modern touches' },
            ].map((project, index) => (
              <div key={index} className="bg-brand-dark border border-gray-700 overflow-hidden group">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-600">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-brand-red mb-6">"</div>
            <p className="text-xl text-gray-300 mb-6 italic">
              Absolutely chuffed with our new patio and garden room area. The lads were brilliant 
              from start to finish - turned up on time every day, kept everything tidy, and the 
              quality of work is top notch. Neighbours keep popping round to have a look! 
              Would recommend to anyone.
            </p>
            <p className="text-brand-red font-semibold">— Happy Customer, Liss, Hampshire</p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 section-darker">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Areas We Cover
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link 
              href={`/areas/${locations.primary.slug}`}
              className="px-5 py-2 bg-brand-red text-white font-semibold hover:bg-red-600 transition-colors"
            >
              {locations.primary.name}
            </Link>
            {locations.areas.slice(0, 11).map((area) => (
              <Link 
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="px-5 py-2 border border-gray-600 text-gray-300 hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas" className="text-brand-red font-semibold hover:underline">
              View all areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get in touch today for a free, no-obligation quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="btn-primary">
              Call 07393 730595
            </a>
            <a href="https://wa.me/447393730595" className="btn-secondary">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
