# Upfield Landscapes - Programmatic SEO Plan

## Current State

**Live Pages:** ~175 pages
- Homepage
- 8 service pages (`/services/[service]`)
- 21 area pages (`/areas/[location]`)
- 147 service+location pages (`/services/[service]/[location]`)

**Services:** Patios, Driveways, Fencing, Decking, Turfing, Garden Renovations, Walls & Brickwork, Drainage

**Locations:** Petersfield (HQ) + 20 surrounding areas across Hampshire, West Sussex, and Surrey

---

## Phase 1: Quick Wins (Week 1-2)

### 1.1 Technical SEO Fixes
- [ ] Add XML sitemap generation (`/sitemap.xml`)
- [ ] Add robots.txt
- [ ] Add canonical URLs to all pages
- [ ] Implement proper meta descriptions (unique per page)
- [ ] Add Open Graph / social meta tags
- [ ] Add structured data (LocalBusiness, Service schemas)
- [ ] Ensure mobile-first responsive design
- [ ] Page speed optimisation (image compression, lazy loading)

### 1.2 Content Improvements
- [ ] Expand service+location page content from ~200 words to 500+ words
- [ ] Add unique local details per area (landmarks, neighbourhoods, property types)
- [ ] Include "areas nearby" internal links on each page
- [ ] Add FAQ sections (3-5 per page) for featured snippets

### 1.3 Google Business Profile
- [ ] Verify/create GBP listing
- [ ] Add all service categories
- [ ] Upload project photos
- [ ] Set service areas for all 21 locations

---

## Phase 2: Content Expansion (Week 3-6)

### 2.1 New Page Types

#### Material-Specific Pages (High Value)
Create pages for popular search terms:
```
/services/patios/indian-sandstone
/services/patios/porcelain-paving
/services/driveways/block-paving
/services/driveways/resin-bound
/services/fencing/closeboard
```
**Estimated new pages:** 20-30

#### Material + Location Pages (Long-tail Gold)
```
/services/patios/indian-sandstone/petersfield
/services/driveways/block-paving/waterlooville
```
**Estimated new pages:** 100-150 (top materials × priority locations)

#### Problem/Solution Pages
```
/services/drainage/waterlogged-garden
/services/patios/uneven-patio-repair
/services/fencing/storm-damage-repair
```
**Estimated new pages:** 15-20

### 2.2 Blog/Resource Content
- [ ] "Cost of [service] in [location] 2024/2025" guides
- [ ] "Best [material] for [area type] gardens"
- [ ] Before/after case studies by location
- [ ] Seasonal maintenance guides

---

## Phase 3: Advanced Expansion (Month 2-3)

### 3.1 Postcode-Level Pages
Target specific postcode areas for hyper-local SEO:
```
/areas/gu31 (Petersfield postcodes)
/areas/gu32 (Sheet, Steep postcodes)
/areas/po8 (Horndean, Clanfield)
```
**Estimated new pages:** 15-20

### 3.2 Neighbourhood Pages (Large Towns Only)
For Waterlooville, Havant, Alton:
```
/areas/waterlooville/stakes
/areas/waterlooville/cowplain
/areas/havant/leigh-park
```
**Estimated new pages:** 20-30

### 3.3 Additional Services
Consider adding:
- Artificial grass installation
- Garden clearance
- Pressure washing/cleaning
- Pergolas & garden structures
- Outdoor lighting

**Each new service = 22 new pages** (service + 21 location variants)

---

## Keyword Targeting Strategy

### Primary Keywords (Homepage + Main Service Pages)
- landscaper petersfield
- landscape gardener petersfield
- garden landscaping petersfield
- patio installers petersfield

### Service + Location (Bread & Butter)
- [service] [location] → "patio installers waterlooville"
- [service] near [location] → "fencing near liphook"
- [service] company [location] → "driveway company alton"

### Long-tail Material Keywords
- indian sandstone patio petersfield
- block paving driveway horndean
- composite decking liss
- closeboard fencing midhurst

### Problem-Based Keywords
- waterlogged garden petersfield
- sloping garden landscaping
- small garden makeover
- new build garden landscaping

### Cost/Price Keywords (High Intent)
- patio cost petersfield
- how much does a new driveway cost
- fencing prices per metre hampshire

---

## Technical Implementation

### Data Structure Updates
```json
// Add to services.json
{
  "materials": [
    {
      "slug": "indian-sandstone",
      "name": "Indian Sandstone",
      "keywords": ["indian sandstone", "sandstone paving"],
      "priceRange": "£80-120 per m²"
    }
  ]
}
```

### New Page Templates Needed
1. `/services/[service]/[material]/page.tsx`
2. `/services/[service]/[material]/[location]/page.tsx`
3. `/guides/[slug]/page.tsx` (blog/resources)
4. `/areas/[postcode]/page.tsx`

### Schema Markup (Priority)
```json
{
  "@type": "LocalBusiness",
  "name": "Upfield Landscapes",
  "areaServed": ["Petersfield", "Waterlooville", ...],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [...]
  }
}
```

---

## Link Building Strategy

### Local Citations (Week 1-2)
- [ ] Yell.com
- [ ] Thomson Local
- [ ] Checkatrade
- [ ] MyBuilder
- [ ] Bark
- [ ] TrustATrader
- [ ] FreeIndex
- [ ] Yelp UK

### Local Directories
- [ ] Petersfield Town Council business directory
- [ ] East Hampshire District Council
- [ ] Hampshire Chamber of Commerce
- [ ] Federation of Small Businesses

### Content-Based Links
- [ ] Guest posts on local news sites
- [ ] Garden/home improvement blogs
- [ ] Local Facebook groups (not links, but awareness)

---

## Measurement & KPIs

### Track Weekly
- Indexed pages (Google Search Console)
- Impressions by page type
- Click-through rates
- Average position for target keywords

### Track Monthly
- Organic traffic (total + by page type)
- Conversions (calls, form submissions)
- New keyword rankings
- Local pack appearances

### Target Keywords to Monitor
| Keyword | Current Position | Target |
|---------|-----------------|--------|
| landscaper petersfield | ? | Top 3 |
| patio installers petersfield | ? | Top 3 |
| driveway company waterlooville | ? | Top 5 |
| fencing petersfield | ? | Top 3 |
| garden landscaping hampshire | ? | Top 10 |

---

## Content Calendar

### Week 1-2
- Implement technical SEO fixes
- Expand 10 highest-priority service+location pages
- Set up Google Search Console & Analytics

### Week 3-4
- Create material-specific pages (top 10)
- Add FAQ sections to all service pages
- Begin local citation building

### Month 2
- Launch material+location pages (50+)
- Create first 5 cost guides
- Add case study pages

### Month 3
- Neighbourhood/postcode expansion
- Evaluate and add new services
- Review rankings and adjust strategy

---

## Priority Actions (Start Now)

1. **Add sitemap.xml** - Critical for indexing
2. **Expand page content** - Currently too thin
3. **Add structured data** - LocalBusiness + Service schemas
4. **Create material pages** - "block paving [location]" = money keywords
5. **Set up tracking** - Can't improve what you don't measure

---

*Plan created: 28 Feb 2025*
*Review scheduled: Monthly*
