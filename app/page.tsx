import Link from 'next/link';
import { getListings, getCategories } from '@/lib/cosmic';
import ListingCard from '@/components/ListingCard';
import CategoryNav from '@/components/CategoryNav';
import SearchBar from '@/components/SearchBar';

export default async function HomePage() {
  const [listings, categories] = await Promise.all([
    getListings(),
    getCategories(),
  ]);

  // Select a featured listing for the hero (using the first listing with a featured image)
  const heroListing = listings.find(listing => listing.metadata.featured_image) || listings[0];

  return (
    <div>
      {/* Hero Section with Listing Image */}
      <section className="relative h-[600px] md:h-[700px]">
        {/* Background Image */}
        {heroListing?.metadata.featured_image && (
          <img
            src={`${heroListing.metadata.featured_image.imgix_url}?w=2000&h=1400&fit=crop&auto=format,compress`}
            alt={heroListing.metadata.property_name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Black Opacity Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Find your perfect getaway
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover unique accommodations around the world. From cozy cabins to beachfront villas, your next adventure awaits.
            </p>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-neutral-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryNav categories={categories} />
        </div>
      </section>

      {/* Listings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Explore all stays
            </h2>
            <p className="text-neutral-600 mt-1">
              {listings.length} properties available
            </p>
          </div>
        </div>

        {listings.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No listings available
            </h3>
            <p className="text-neutral-600">
              Check back soon for new properties.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Browse by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                {category.metadata.icon && (
                  <img
                    src={`${category.metadata.icon.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                    alt={category.metadata.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {category.metadata.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to explore?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Start your journey today and discover amazing places to stay around the world.
          </p>
          <Link href="/listings" className="btn-primary">
            View all listings
          </Link>
        </div>
      </section>
    </div>
  );
}