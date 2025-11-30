// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getListingsByCategory, getCategories } from '@/lib/cosmic';
import ListingCard from '@/components/ListingCard';
import CategoryNav from '@/components/CategoryNav';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  
  if (!category) {
    return { title: 'Category Not Found | StayScape' };
  }
  
  return {
    title: `${category.metadata.name} | StayScape`,
    description: category.metadata.description || `Browse ${category.metadata.name} listings on StayScape.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [category, categories] = await Promise.all([
    getCategoryBySlug(slug),
    getCategories(),
  ]);

  if (!category) {
    notFound();
  }

  const listings = await getListingsByCategory(category.id);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80">
        {category.metadata.icon ? (
          <img
            src={`${category.metadata.icon.imgix_url}?w=1920&h=640&fit=crop&auto=format,compress`}
            alt={category.metadata.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.metadata.name}
            </h1>
            {category.metadata.description && (
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                {category.metadata.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryNav categories={categories} activeSlug={slug} />
        </div>
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-neutral-600 hover:text-primary">
                Home
              </Link>
            </li>
            <li className="text-neutral-400">/</li>
            <li>
              <Link href="/listings" className="text-neutral-600 hover:text-primary">
                Listings
              </Link>
            </li>
            <li className="text-neutral-400">/</li>
            <li className="text-neutral-900 font-medium">
              {category.metadata.name}
            </li>
          </ol>
        </nav>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {category.metadata.name} stays
            </h2>
            <p className="text-neutral-600 mt-1">
              {listings.length} {listings.length === 1 ? 'property' : 'properties'} available
            </p>
          </div>
        </div>

        {listings.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No listings in this category
            </h3>
            <p className="text-neutral-600 mb-6">
              Check back soon for new {category.metadata.name.toLowerCase()} properties.
            </p>
            <Link href="/listings" className="btn-primary">
              Browse all listings
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}