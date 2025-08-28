import BusinessClient from '@/components/business/BusinessClient'

// ✅ Pre-generate some slugs at build time
export async function generateStaticParams() {
  // Return all possible slugs you want to pre-generate
  return [
    { slug: 'microsoft' },
    { slug: 'google' },
  ]
}

// ✅ This enables fallback for *other* slugs dynamically
export const dynamicParams = true

export default function BusinessPage({ params }: { params: { slug: string } }) {
  return <BusinessClient slug={params.slug} />
}
