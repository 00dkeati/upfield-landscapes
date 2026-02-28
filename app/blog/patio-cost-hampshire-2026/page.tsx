import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Patio Cost in Hampshire? (2026 Prices)',
  description: 'Complete guide to patio installation costs in Hampshire. From porcelain to sandstone, find out what you should expect to pay. Free quotes available.',
  keywords: ['patio cost hampshire', 'patio prices petersfield', 'patio installation cost', 'how much does a patio cost'],
}

export default function PatioCostPost() {
  return (
    <article className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/blog" className="text-brand-red hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-brand-silver-light">
          How Much Does a Patio Cost in Hampshire? (2026 Prices)
        </h1>
        
        <div className="text-brand-silver mb-8">28 February 2026 · 5 min read</div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-brand-silver text-lg mb-6">
            Planning a new patio for your Hampshire home? Here's our complete guide to patio installation costs in 2026, based on real projects we've completed across Petersfield and the surrounding areas.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-brand-silver-light">Average Patio Costs in Hampshire</h2>
          
          <div className="bg-brand-dark border border-brand-silver/20 p-6 mb-6">
            <ul className="space-y-3 text-brand-silver">
              <li><strong className="text-brand-silver-light">Small patio (15-20m²):</strong> £2,500 - £4,500</li>
              <li><strong className="text-brand-silver-light">Medium patio (20-35m²):</strong> £4,500 - £7,500</li>
              <li><strong className="text-brand-silver-light">Large patio (35-50m²):</strong> £7,500 - £12,000</li>
              <li><strong className="text-brand-silver-light">Premium/complex:</strong> £12,000+</li>
            </ul>
          </div>

          <p className="text-brand-silver mb-6">
            These prices include excavation, sub-base preparation, materials and labour. The final cost depends on your choice of materials, site access, and any additional features like steps or raised beds.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-brand-silver-light">Patio Material Costs Compared</h2>
          
          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-brand-silver-light">Porcelain Paving</h3>
          <p className="text-brand-silver mb-4">
            <strong>Cost:</strong> £80-£120 per m² installed<br/>
            Porcelain is now the most popular choice for Hampshire patios. It's low maintenance, frost-proof, and comes in a huge range of styles including wood-effect and stone-effect finishes.
          </p>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-brand-silver-light">Indian Sandstone</h3>
          <p className="text-brand-silver mb-4">
            <strong>Cost:</strong> £65-£95 per m² installed<br/>
            A classic choice that suits traditional Hampshire homes. Natural variation in colour and texture gives each patio a unique look. Requires occasional sealing.
          </p>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-brand-silver-light">Concrete Paving</h3>
          <p className="text-brand-silver mb-4">
            <strong>Cost:</strong> £50-£75 per m² installed<br/>
            The budget-friendly option. Modern concrete pavers can look surprisingly good and are very durable.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-brand-silver-light">What Affects the Price?</h2>
          
          <ul className="list-disc list-inside text-brand-silver space-y-2 mb-6">
            <li><strong>Site access</strong> - Difficult access means more labour time</li>
            <li><strong>Ground conditions</strong> - Slopes, drainage issues, or tree roots add complexity</li>
            <li><strong>Existing patio removal</strong> - Add £500-£1,500 for removal and disposal</li>
            <li><strong>Steps and levels</strong> - Each step adds £200-£400</li>
            <li><strong>Edging and borders</strong> - Contrasting borders add £15-£30 per linear metre</li>
            <li><strong>Drainage</strong> - Linear drainage channels from £50 per metre</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-brand-silver-light">Planning Permission</h2>
          <p className="text-brand-silver mb-6">
            Most patios don't require planning permission in Hampshire, provided they're at ground level and don't cover more than 50% of your garden. However, if you're in a conservation area or the patio is at the front of your property, you may need to check with your local council.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-brand-silver-light">Get a Free Quote</h2>
          <p className="text-brand-silver mb-6">
            Every garden is different. For an accurate quote tailored to your specific requirements, get in touch with us for a free, no-obligation site visit.
          </p>

          <div className="bg-brand-dark border border-brand-red p-8 text-center mt-8">
            <h3 className="text-xl font-heading font-bold mb-4 text-brand-silver-light">Ready to Get Started?</h3>
            <p className="text-brand-silver mb-6">Free quotes for patio installations across Petersfield and Hampshire</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:07393730595" className="bg-brand-red text-white px-8 py-4 font-semibold hover:bg-red-500 transition-colors">
                CALL 07393 730595
              </a>
              <a href="https://wa.me/447393730595" className="border-2 border-brand-silver text-brand-silver px-8 py-4 font-semibold hover:bg-brand-silver hover:text-black transition-colors">
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
