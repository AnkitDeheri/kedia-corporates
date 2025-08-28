export const dynamicParams = false; // Disable dynamic rendering

export async function generateStaticParams() {
  return [
    { slug: 'microsoft' },
    { slug: 'google' },
  ];
}

export default function BusinessPage({ params }: { params: { slug: string } }) {
  return <div>Business: {params.slug}</div>;
}