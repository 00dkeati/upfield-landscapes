import Link from 'next/link'
import Image from 'next/image'
import services from '../data/services.json'
import locations from '../data/locations.json'

export default function HomePage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-black"
      >
        <div className="container mx-auto px-4 text-center relative z-10 pt-20">
          {/* Logo-style heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-2 tracking-logo">
            <span className="text-brand-silver-light">UPFIELD</span>
          </h1>
          {/* Brick accent bar */}
          <div className="flex justify-center mb-2">
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-12 md:w-16 h-6 bg-brand-red"></div>
              ))}
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-logo">
            <span className="text-brand-silver-light">LANDSCAPES</span>
          </h1>
          
          <p className="text-xl text-brand-silver mb-4 tracking-widest">
            PROFESSIONAL LANDSCAPING IN PETERSFIELD & HAMPSHIRE
          </p>
          <p className="text-2xl text-brand-silver-light mb-10 tracking-wider">
            07393 730595
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
          <div className="w-6 h-10 border-2 border-brand-silver/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-brand-red rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Brick accent */}
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-4 bg-brand-red"></div>
                ))}
              </div>
            </div>
            
            <h2 className="text-4xl font-heading font-bold mb-6 text-brand-silver-light tracking-wider">
              CRAFTING BEAUTIFUL LANDSCAPES
            </h2>
            <p className="text-brand-silver text-lg mb-8">
              We're a local landscaping team covering Petersfield and the surrounding Hampshire villages. 
              Whether it's a new patio, driveway, fencing or a complete garden renovation - we take pride in doing the job properly.
            </p>
            <p className="text-brand-silver text-lg mb-12">
              No job too big or small. We'll give you an honest quote, turn up when we say we will, 
              and leave your garden looking better than you imagined.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-heading font-bold text-brand-red">10+</div>
                <p className="text-brand-silver mt-2 tracking-wider">YEARS EXPERIENCE</p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold text-brand-red">200+</div>
                <p className="text-brand-silver mt-2 tracking-wider">PROJECTS COMPLETED</p>
              </div>
              <div>
                <div className="text-5xl font-heading font-bold text-brand-red">100%</div>
                <p className="text-brand-silver mt-2 tracking-wider">SATISFACTION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          {/* Brick accent */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-4 bg-brand-red"></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-brand-silver-light tracking-wider">
            OUR SERVICES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.services.map((service) => (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-black p-8 hover:bg-brand-red/10 border border-brand-silver/20 hover:border-brand-red transition-all group"
              >
                <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-brand-red transition-colors text-brand-silver-light tracking-wider">
                  {service.name.toUpperCase()}
                </h3>
                <p className="text-brand-silver mb-4">
                  {service.description.substring(0, 120)}...
                </p>
                <span className="text-brand-red font-semibold tracking-wider">
                  LEARN MORE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Brick accent */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-4 bg-brand-red"></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-brand-silver-light tracking-wider">
            RECENT WORK
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Garden Room & Decking', desc: 'Composite decking with turf and slate patio', image: '/images/project-1.jpg' },
              { title: 'Porcelain Patio', desc: 'Grey porcelain paving with white gravel border', image: '/images/project-2.jpg' },
              { title: 'Full Garden Transformation', desc: 'Large format paving with raised beds', image: '/images/project-3.jpg' },
              { title: 'Porcelain Patio', desc: 'Premium grey porcelain with clean lines', image: '/images/portfolio/patio-1.jpg' },
              { title: 'Indian Sandstone Patio', desc: 'Buff sandstone with sleeper raised beds', image: '/images/portfolio/patio-2.jpg' },
              { title: 'Block Paved Driveway', desc: 'Charcoal blocks with contrasting border', image: '/images/portfolio/driveway-1.jpg' },
              { title: 'Resin Bound Driveway', desc: 'Warm toffee finish, low maintenance', image: '/images/portfolio/driveway-2.jpg' },
              { title: 'Closeboard Fencing', desc: 'Timber fence with concrete posts', image: '/images/portfolio/fencing-1.jpg' },
              { title: 'Contemporary Slatted Fence', desc: 'Modern grey slatted panels', image: '/images/portfolio/fencing-2.jpg' },
              { title: 'Composite Decking', desc: 'Low-maintenance deck with garden room', image: '/images/portfolio/decking-1.jpg' },
              { title: 'New Lawn Installation', desc: 'Premium turf with timber edging', image: '/images/portfolio/turf-1.jpg' },
              { title: 'Garden Renovation', desc: 'Complete transformation with lighting', image: '/images/portfolio/garden-1.jpg' },
            ].map((project, index) => (
              <div key={index} className="bg-brand-dark border border-brand-silver/20 overflow-hidden group hover:border-brand-red transition-colors">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2 text-brand-silver-light tracking-wider">{project.title.toUpperCase()}</h3>
                  <p className="text-brand-silver text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4">
          {/* Brick accent */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-4 bg-brand-red"></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-brand-silver-light tracking-wider">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-brand-red mb-6">"</div>
            <p className="text-xl text-brand-silver mb-6 italic">
              Absolutely chuffed with our new patio and garden room area. The lads were brilliant 
              from start to finish - turned up on time every day, kept everything tidy, and the 
              quality of work is top notch. Neighbours keep popping round to have a look! 
              Would recommend to anyone.
            </p>
            <p className="text-brand-red font-semibold tracking-wider">— HAPPY CUSTOMER, LISS, HAMPSHIRE</p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Brick accent */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-4 bg-brand-red"></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-brand-silver-light tracking-wider">
            AREAS WE COVER
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Link 
              href={`/areas/${locations.primary.slug}`}
              className="px-5 py-2 bg-brand-red text-white font-semibold hover:bg-red-500 transition-colors tracking-wider"
            >
              {locations.primary.name.toUpperCase()}
            </Link>
            {locations.areas.slice(0, 11).map((area) => (
              <Link 
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="px-5 py-2 border border-brand-silver/40 text-brand-silver hover:border-brand-red hover:text-brand-red transition-colors tracking-wider"
              >
                {area.name.toUpperCase()}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/areas" className="text-brand-red font-semibold hover:underline tracking-wider">
              VIEW ALL AREAS →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 text-center">
          {/* Brick accent */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-4 bg-brand-red"></div>
              ))}
            </div>
          </div>
          
          <h2 className="text-4xl font-heading font-bold mb-4 text-brand-silver-light tracking-wider">
            READY TO TRANSFORM YOUR GARDEN?
          </h2>
          <p className="text-xl text-brand-silver mb-10 tracking-wider">
            Get in touch today for a free, no-obligation quote
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:07393730595" className="btn-primary">
              CALL 07393 730595
            </a>
            <a href="https://wa.me/447393730595" className="btn-secondary">
              WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
