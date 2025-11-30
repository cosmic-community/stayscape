import { getListings, getCategories } from '@/lib/cosmic';
import ListingCard from '@/components/ListingCard';
import CategoryNav from '@/components/CategoryNav';
import ListingFilters from '@/components/ListingFilters';

export const metadata = {
  title: 'All Listings | StayScape',
  description: 'Browse all vacation rental listings on StayScape.',
};

export default async function ListingsPage() {
  const [listings, categories] = await Promise.all([
    getListings(),
    getCategories(),
  ]);

  return (
    <div>
      {/* Category Navigation */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryNav categories={categories} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">All Listings</h1>
          <p className="text-neutral-600 mt-2">
            {listings.length} properties available for your next adventure
          </p>
        </div>

        {/* Filters */}
        <ListingFilters />

        {/* Listings Grid */}
        {listings.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No listings found
            </h3>
            <p className="text-neutral-600">
              Try adjusting your filters or check back later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}