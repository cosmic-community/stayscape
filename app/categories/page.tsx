import Link from 'next/link';
import { getCategories, getListings } from '@/lib/cosmic';

export const metadata = {
  title: 'Browse by Category | StayScape',
  description: 'Explore vacation rentals by category. Find cabins, beachfront properties, city apartments, and more.',
};

export default async function CategoriesPage() {
  const [categories, listings] = await Promise.all([
    getCategories(),
    getListings(),
  ]);

  // Count listings per category
  const categoryListingCounts = categories.map((category) => ({
    ...category,
    listingCount: listings.filter(
      (listing) => listing.metadata.category?.id === category.id
    ).length,
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse by Category
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Find your perfect stay by exploring our curated categories. From mountain retreats to beachfront villas, discover unique accommodations that match your style.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            All Categories
          </h2>
          <p className="text-neutral-600">
            {categories.length} categories with {listings.length} total properties
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏷️</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No categories available
            </h3>
            <p className="text-neutral-600 mb-6">
              Check back soon for new categories.
            </p>
            <Link href="/" className="btn-primary">
              Back to home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryListingCounts.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group card overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Category Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {category.metadata.icon ? (
                    <img
                      src={`${category.metadata.icon.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={category.metadata.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Listing Count Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-neutral-900 text-sm font-semibold px-3 py-1 rounded-full">
                      {category.listingCount} {category.listingCount === 1 ? 'property' : 'properties'}
                    </span>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {category.metadata.name}
                  </h3>
                  {category.metadata.description && (
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      {category.metadata.description}
                    </p>
                  )}
                  
                  {/* View Listings Link */}
                  <div className="mt-4 flex items-center text-primary font-medium text-sm">
                    <span>Explore {category.metadata.name.toLowerCase()}</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
            Browse all available properties or use our search to find your perfect vacation rental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings" className="btn-primary">
              View all listings
            </Link>
            <Link href="/" className="btn-secondary">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}