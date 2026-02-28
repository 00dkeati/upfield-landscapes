import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Porcelain vs Sandstone Patios: Which is Best? | Hampshire Guide',
  description: 'Comparing porcelain and sandstone patios for Hampshire gardens. Pros, cons, costs, maintenance and which material suits your home best.',
  keywords: ['porcelain patio', 'sandstone patio', 'patio materials', 'porcelain vs sandstone', 'patio hampshire'],
}

export default function PorcelainVsSandstonePost() {
  return (
    <article className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/blog" className="text-brand-red hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
          Porcelain vs Sandstone Patios: Which is Best for Your Garden?
        </h1>
        
        <div className="text-gray-400 mb-8">27 February 2026 · 6 min read</div>
        
        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="text-lg mb-6">
            Choosing between porcelain and sandstone for your new patio? Both are excellent choices for Hampshire gardens, but they have distinct characteristics that might make one better suited to your needs. Here's our comprehensive comparison based on hundreds of installations across Petersfield and the surrounding areas.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Porcelain Paving: The Modern Choice</h2>
          
          <p className="mb-4">
            Porcelain paving has exploded in popularity over the last decade, and for good reason. Made from highly refined clay fired at extreme temperatures, porcelain offers exceptional durability and a contemporary aesthetic.
          </p>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Pros of Porcelain</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Virtually zero maintenance</strong> - No sealing required, ever</li>
            <li><strong>Frost-proof</strong> - Won't crack in Hampshire winters</li>
            <li><strong>Stain resistant</strong> - BBQ grease, wine, oil - nothing penetrates</li>
            <li><strong>Consistent colour</strong> - Every slab looks the same</li>
            <li><strong>Huge range of styles</strong> - Wood-effect, stone-effect, concrete-effect</li>
            <li><strong>Slip resistant</strong> - Most have textured surfaces rated R11+</li>
            <li><strong>Long lifespan</strong> - 30+ years with minimal fading</li>
          </ul>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Cons of Porcelain</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Higher cost</strong> - Typically 20-30% more than sandstone</li>
            <li><strong>Can look artificial</strong> - Some prefer natural stone character</li>
            <li><strong>Harder to cut</strong> - Requires specialist diamond blades</li>
            <li><strong>Thinner slabs</strong> - Usually 20mm vs 22mm+ for sandstone</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Indian Sandstone: The Classic Choice</h2>
          
          <p className="mb-4">
            Indian sandstone has been a staple of British gardens for decades. Quarried naturally and hand-finished, each slab has unique character and warmth that's hard to replicate.
          </p>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Pros of Sandstone</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Natural beauty</strong> - Unique colour variations in every slab</li>
            <li><strong>Traditional aesthetic</strong> - Perfect for period properties</li>
            <li><strong>Lower initial cost</strong> - More affordable per m²</li>
            <li><strong>Easier to cut</strong> - Standard masonry tools work fine</li>
            <li><strong>Proven durability</strong> - Centuries of use in the UK</li>
            <li><strong>Warmer underfoot</strong> - Natural stone retains heat</li>
          </ul>

          <h3 className="text-xl font-heading font-bold mt-6 mb-3 text-white">Cons of Sandstone</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Requires sealing</strong> - Every 2-3 years for best results</li>
            <li><strong>More porous</strong> - Can stain if not sealed properly</li>
            <li><strong>Colour variation</strong> - Some see this as a negative</li>
            <li><strong>Algae growth</strong> - More prone to green growth in shaded areas</li>
            <li><strong>Quality varies</strong> - Cheap imports can be poor quality</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Cost Comparison</h2>
          
          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-3 text-white">Material</th>
                  <th className="pb-3 text-white">Cost per m² (installed)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Budget Sandstone</td>
                  <td className="py-3">£65-£80</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Premium Sandstone</td>
                  <td className="py-3">£80-£100</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Standard Porcelain</td>
                  <td className="py-3">£85-£110</td>
                </tr>
                <tr>
                  <td className="py-3">Premium Porcelain</td>
                  <td className="py-3">£110-£140</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Which Should You Choose?</h2>
          
          <p className="mb-4"><strong>Choose Porcelain if:</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>You want minimal maintenance</li>
            <li>You have a modern or contemporary home</li>
            <li>You want consistent colour throughout</li>
            <li>The patio is in a shaded area prone to algae</li>
            <li>You do a lot of outdoor cooking/entertaining</li>
          </ul>

          <p className="mb-4"><strong>Choose Sandstone if:</strong></p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>You have a traditional or period property</li>
            <li>You prefer natural, characterful materials</li>
            <li>Budget is a primary concern</li>
            <li>You don't mind occasional maintenance</li>
            <li>You want that classic English garden look</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Our Recommendation</h2>
          
          <p className="mb-6">
            For most Hampshire gardens, we now recommend porcelain paving. The zero-maintenance benefits and long-term durability outweigh the slightly higher initial cost. However, for properties where character and tradition matter, premium Indian sandstone (properly sealed) remains a beautiful choice.
          </p>

          <div className="bg-gray-900 border border-brand-red p-8 text-center mt-10">
            <h3 className="text-xl font-heading font-bold mb-4 text-white">Need Help Deciding?</h3>
            <p className="text-gray-300 mb-6">We'll visit your property with samples and help you choose the perfect material for your garden.</p>
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
