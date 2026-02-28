import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Landscaping Blog | Tips & Guides',
  description: 'Expert landscaping tips, pricing guides, and inspiration for your Hampshire garden. Learn about patios, driveways, fencing and more from Upfield Landscapes.',
}

const posts = [
  {
    slug: 'patio-cost-hampshire-2026',
    title: 'How Much Does a Patio Cost in Hampshire? (2026 Prices)',
    excerpt: 'Complete guide to patio installation costs in Hampshire. From porcelain to sandstone, find out what you should expect to pay for your new patio.',
    date: '28 Feb 2026',
    readTime: '5 min read',
  },
  {
    slug: 'porcelain-vs-sandstone-patios',
    title: 'Porcelain vs Sandstone Patios: Which is Best for Your Garden?',
    excerpt: 'Comparing the two most popular patio materials. Pros, cons, costs and maintenance requirements to help you choose.',
    date: '27 Feb 2026',
    readTime: '4 min read',
  },
  {
    slug: 'driveway-ideas-hampshire',
    title: '5 Driveway Ideas for Hampshire Homes',
    excerpt: 'From block paving to resin bound, discover the best driveway options for your property. Includes costs and planning permission advice.',
    date: '26 Feb 2026',
    readTime: '6 min read',
  },
  {
    slug: 'best-fencing-options-hampshire',
    title: 'Best Fencing Options for Hampshire Gardens',
    excerpt: 'Closeboard, slatted, or picket? We break down the best fence types for privacy, durability and style in Hampshire gardens.',
    date: '25 Feb 2026',
    readTime: '4 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Brick accent */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-4 bg-brand-red"></div>
            ))}
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-brand-silver-light tracking-wider">
          LANDSCAPING BLOG
        </h1>
        <p className="text-center text-brand-silver mb-12 max-w-2xl mx-auto">
          Expert tips, pricing guides and inspiration for your Hampshire garden
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-brand-dark border border-brand-silver/20 p-8 hover:border-brand-red transition-all group"
            >
              <div className="text-sm text-brand-silver mb-2">{post.date} · {post.readTime}</div>
              <h2 className="text-xl font-heading font-bold mb-4 text-brand-silver-light group-hover:text-brand-red transition-colors">
                {post.title}
              </h2>
              <p className="text-brand-silver mb-4">{post.excerpt}</p>
              <span className="text-brand-red font-semibold tracking-wider">READ MORE →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
