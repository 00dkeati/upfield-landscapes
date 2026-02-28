import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Composite Decking Guide | Is It Worth It? Hampshire 2026',
  description: 'Everything you need to know about composite decking. Costs, brands, installation, pros and cons. Is composite decking worth the investment?',
  keywords: ['composite decking', 'decking hampshire', 'composite vs timber decking', 'decking petersfield', 'trex decking'],
}

export default function CompositeDeckingPost() {
  return (
    <article className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/blog" className="text-brand-red hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
          Composite Decking: The Complete Guide for Hampshire Homeowners
        </h1>
        
        <div className="text-gray-400 mb-8">24 February 2026 · 8 min read</div>
        
        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="text-lg mb-6">
            Composite decking has revolutionised outdoor living spaces. But with prices significantly higher than timber, is it really worth the investment? Here's everything you need to know, based on our experience installing hundreds of composite decks across Hampshire.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">What is Composite Decking?</h2>
          
          <p className="mb-6">
            Composite decking is made from a mixture of wood fibres (or wood flour) and plastic polymers. This combination creates boards that look like wood but don't suffer from the same maintenance issues - no rotting, no splinters, no annual treatments.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Composite vs Timber: The Key Differences</h2>
          
          <div className="bg-gray-900 border border-gray-700 p-6 mb-6 overflow-x-auto">
            <table className="w-full text-left min-w-[400px]">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-3 text-white">Factor</th>
                  <th className="pb-3 text-white">Composite</th>
                  <th className="pb-3 text-white">Timber</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Initial Cost</td>
                  <td className="py-3">£120-£200/m²</td>
                  <td className="py-3">£80-£130/m²</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Maintenance</td>
                  <td className="py-3">Occasional wash</td>
                  <td className="py-3">Annual oil/stain</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Lifespan</td>
                  <td className="py-3">25-30 years</td>
                  <td className="py-3">15-20 years</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Splinters</td>
                  <td className="py-3">Never</td>
                  <td className="py-3">Possible</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Colour fade</td>
                  <td className="py-3">Minimal</td>
                  <td className="py-3">Greys without treatment</td>
                </tr>
                <tr>
                  <td className="py-3">Feel underfoot</td>
                  <td className="py-3">Slightly plastic</td>
                  <td className="py-3">Natural warmth</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">The Best Composite Decking Brands</h2>
          
          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Premium Tier</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Trex</strong> - The original and still one of the best. American-made, 25-year warranty.</li>
            <li><strong>Millboard</strong> - Looks incredibly realistic. Premium price but stunning results.</li>
            <li><strong>TimberTech</strong> - Excellent durability and range of colours.</li>
          </ul>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Mid-Range</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Cladco</strong> - Good UK brand, solid performance, reasonable prices.</li>
            <li><strong>Hyperion</strong> - Capped composite with good reviews.</li>
            <li><strong>Eva-Last</strong> - South African brand, excellent value.</li>
          </ul>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Budget</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Various Chinese imports</strong> - Be cautious. Quality varies wildly. Check warranties carefully.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Honest Pros and Cons</h2>
          
          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">The Good</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Zero annual maintenance (just occasional cleaning)</li>
            <li>Won't rot, warp, or crack</li>
            <li>Splinter-free - safe for bare feet and kids</li>
            <li>Consistent colour throughout</li>
            <li>Eco-friendly (many brands use recycled materials)</li>
            <li>25+ year warranties from premium brands</li>
          </ul>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">The Not-So-Good</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Higher upfront cost than timber</li>
            <li>Can get very hot in direct sunlight (especially darker colours)</li>
            <li>Doesn't feel quite like real wood</li>
            <li>Scratches can be difficult to repair</li>
            <li>Limited colour choice compared to paintable timber</li>
            <li>Thermal expansion means careful installation is crucial</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Cost Breakdown</h2>
          
          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <p className="mb-4 text-white font-bold">Typical 20m² composite deck in Hampshire:</p>
            <ul className="space-y-2">
              <li>Budget composite: £2,400 - £3,200</li>
              <li>Mid-range composite: £3,200 - £4,500</li>
              <li>Premium composite: £4,500 - £6,000+</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">Prices include materials, subframe, and installation. Steps, balustrades, and complex designs cost extra.</p>
          </div>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Is Composite Worth It?</h2>
          
          <p className="mb-4">
            <strong className="text-white">Yes, if:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>You hate maintenance and won't keep up with timber oiling</li>
            <li>You're planning to stay in your home long-term</li>
            <li>You have kids who'll be using the deck barefoot</li>
            <li>The deck is in a visible, high-use area</li>
          </ul>

          <p className="mb-4">
            <strong className="text-white">Maybe not, if:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Budget is very tight</li>
            <li>You love the natural look and don't mind maintenance</li>
            <li>The deck gets intense direct sunlight (composite can get very hot)</li>
            <li>You're selling soon and need to recoup costs quickly</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Our Recommendation</h2>
          
          <p className="mb-6">
            For most Hampshire homeowners, mid-range composite decking offers the best balance of quality, durability, and value. The maintenance savings over 20 years easily offset the higher initial cost, and you'll actually enjoy your deck rather than dreading the annual staining ritual.
          </p>

          <div className="bg-gray-900 border border-brand-red p-8 text-center mt-10">
            <h3 className="text-xl font-heading font-bold mb-4 text-white">Thinking About Composite Decking?</h3>
            <p className="text-gray-300 mb-6">We'll help you choose the right material and design for your garden. Free quotes across Hampshire.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:07393730595" className="bg-brand-red text-white px-8 py-4 font-semibold hover:bg-red-500 transition-colors">
                CALL 07393 730595
              </a>
              <a href="https://wa.me/447393730595" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-colors">
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
