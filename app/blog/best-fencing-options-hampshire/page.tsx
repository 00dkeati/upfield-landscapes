import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Fencing Options for Hampshire Gardens | Complete Guide',
  description: 'Compare closeboard, slatted, picket and panel fencing for Hampshire gardens. Costs, pros, cons, and which fence type suits your property.',
  keywords: ['garden fencing', 'fence types', 'closeboard fencing', 'slatted fence', 'fencing petersfield', 'fence hampshire'],
}

export default function FencingOptionsPost() {
  return (
    <article className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/blog" className="text-brand-red hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
          Best Fencing Options for Hampshire Gardens
        </h1>
        
        <div className="text-gray-400 mb-8">25 February 2026 · 5 min read</div>
        
        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="text-lg mb-6">
            The right fence transforms your garden - providing privacy, security, and a beautiful backdrop for your outdoor space. Here's our guide to the best fencing options for Hampshire properties, based on years of installations across Petersfield and the surrounding villages.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Closeboard Fencing (Featheredge)</h2>
          
          <p className="mb-4">
            The classic British garden fence. Vertical featheredge boards overlap to create a solid, secure barrier. When built properly with concrete posts and gravel boards, closeboard fencing lasts 20+ years.
          </p>

          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <p className="mb-2"><strong className="text-white">Cost:</strong> £85-£120 per metre (6ft height)</p>
            <p className="mb-2"><strong className="text-white">Lifespan:</strong> 20-25 years</p>
            <p className="mb-2"><strong className="text-white">Privacy:</strong> ★★★★★</p>
            <p><strong className="text-white">Wind resistance:</strong> ★★★★☆</p>
          </div>

          <p className="mb-6"><strong className="text-white">Best for:</strong> Maximum privacy, exposed locations, traditional properties, back gardens.</p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Contemporary Slatted Fencing</h2>
          
          <p className="mb-4">
            Horizontal slats with gaps between create a modern, architectural look. Available in treated softwood, hardwood, or composite materials. Very popular in contemporary Hampshire gardens.
          </p>

          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <p className="mb-2"><strong className="text-white">Cost:</strong> £120-£200 per metre</p>
            <p className="mb-2"><strong className="text-white">Lifespan:</strong> 15-25 years (depending on material)</p>
            <p className="mb-2"><strong className="text-white">Privacy:</strong> ★★★☆☆</p>
            <p><strong className="text-white">Wind resistance:</strong> ★★★★★</p>
          </div>

          <p className="mb-6"><strong className="text-white">Best for:</strong> Modern gardens, design-led projects, areas where you want filtered light/views.</p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Lap Panel Fencing</h2>
          
          <p className="mb-4">
            The budget-friendly option found in gardens across the UK. Horizontal waney-edge boards create overlapping panels. Quick to install but less durable than closeboard.
          </p>

          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <p className="mb-2"><strong className="text-white">Cost:</strong> £50-£75 per metre</p>
            <p className="mb-2"><strong className="text-white">Lifespan:</strong> 10-15 years</p>
            <p className="mb-2"><strong className="text-white">Privacy:</strong> ★★★★☆</p>
            <p><strong className="text-white">Wind resistance:</strong> ★★☆☆☆</p>
          </div>

          <p className="mb-6"><strong className="text-white">Best for:</strong> Budget-conscious projects, sheltered gardens, rental properties.</p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Picket Fencing</h2>
          
          <p className="mb-4">
            Classic pointed-top pickets create a charming cottage-garden aesthetic. Not for privacy, but perfect for defining boundaries while maintaining an open feel.
          </p>

          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <p className="mb-2"><strong className="text-white">Cost:</strong> £60-£100 per metre (3-4ft height)</p>
            <p className="mb-2"><strong className="text-white">Lifespan:</strong> 15-20 years</p>
            <p className="mb-2"><strong className="text-white">Privacy:</strong> ★☆☆☆☆</p>
            <p><strong className="text-white">Wind resistance:</strong> ★★★★★</p>
          </div>

          <p className="mb-6"><strong className="text-white">Best for:</strong> Front gardens, cottage properties, boundary definition without blocking light.</p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Composite Fencing</h2>
          
          <p className="mb-4">
            Made from recycled wood and plastic, composite fencing is the low-maintenance choice. Won't rot, warp, or need painting. Available in various colours and styles.
          </p>

          <div className="bg-gray-900 border border-gray-700 p-6 mb-6">
            <p className="mb-2"><strong className="text-white">Cost:</strong> £150-£250 per metre</p>
            <p className="mb-2"><strong className="text-white">Lifespan:</strong> 25-30+ years</p>
            <p className="mb-2"><strong className="text-white">Privacy:</strong> ★★★★★</p>
            <p><strong className="text-white">Wind resistance:</strong> ★★★★☆</p>
          </div>

          <p className="mb-6"><strong className="text-white">Best for:</strong> Those wanting zero maintenance, modern properties, eco-conscious homeowners.</p>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Our Top Tips</h2>
          
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Always use concrete posts</strong> - Timber posts rot at ground level, even treated ones</li>
            <li><strong>Add gravel boards</strong> - Sacrificial boards at the bottom extend fence life by years</li>
            <li><strong>Check boundary ownership</strong> - Make sure you're building on your side</li>
            <li><strong>Consider your neighbours</strong> - The "good side" traditionally faces outward</li>
            <li><strong>Plan for gates</strong> - Match your gate style to your fence for a cohesive look</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-10 mb-4 text-white">Planning Permission</h2>
          
          <p className="mb-6">
            Most garden fences don't need planning permission if they're under 2 metres high (1 metre if next to a highway). However, if you're in a conservation area or at a listed property, always check first.
          </p>

          <div className="bg-gray-900 border border-brand-red p-8 text-center mt-10">
            <h3 className="text-xl font-heading font-bold mb-4 text-white">Need New Fencing?</h3>
            <p className="text-gray-300 mb-6">Free quotes for all fence types. We cover Petersfield, Liss, Horndean and all Hampshire areas.</p>
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
