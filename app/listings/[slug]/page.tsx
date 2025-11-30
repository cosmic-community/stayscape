// app/listings/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getListingBySlug, getListings } from '@/lib/cosmic';
import ImageGallery from '@/components/ImageGallery';
import AmenityList from '@/components/AmenityList';
import HostCard from '@/components/HostCard';

interface ListingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const listings = await getListings();
  return listings.map((listing) => ({
    slug: listing.slug,
  }));
}

export async function generateMetadata({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);
  
  if (!listing) {
    return { title: 'Listing Not Found | StayScape' };
  }
  
  return {
    title: `${listing.metadata.property_name} | StayScape`,
    description: `${listing.metadata.property_type.value} in ${listing.metadata.city}, ${listing.metadata.country}. ${listing.metadata.bedrooms} bedrooms, ${listing.metadata.bathrooms} bathrooms, sleeps ${listing.metadata.max_guests}.`,
  };
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const { metadata } = listing;
  
  // Combine featured image and gallery images
  const allImages = [
    ...(metadata.featured_image ? [metadata.featured_image] : []),
    ...(metadata.photo_gallery || []),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          {metadata.category && (
            <>
              <li className="text-neutral-400">/</li>
              <li>
                <Link 
                  href={`/categories/${metadata.category.slug}`} 
                  className="text-neutral-600 hover:text-primary"
                >
                  {metadata.category.metadata?.name || metadata.category.title}
                </Link>
              </li>
            </>
          )}
          <li className="text-neutral-400">/</li>
          <li className="text-neutral-900 font-medium truncate max-w-[200px]">
            {metadata.property_name}
          </li>
        </ol>
      </nav>

      {/* Image Gallery */}
      <ImageGallery images={allImages} title={metadata.property_name} />

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {metadata.property_name}
                </h1>
                <p className="text-lg text-neutral-600 mt-1">
                  {metadata.city}, {metadata.country}
                </p>
              </div>
              {metadata.category && (
                <Link
                  href={`/categories/${metadata.category.slug}`}
                  className="badge-primary"
                >
                  {metadata.category.metadata?.name || metadata.category.title}
                </Link>
              )}
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mt-4 text-neutral-700">
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {metadata.property_type.value}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {metadata.max_guests} guests
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                {metadata.bedrooms} bedroom{metadata.bedrooms !== 1 ? 's' : ''}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                {metadata.bathrooms} bathroom{metadata.bathrooms !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-neutral-200" />

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              About this place
            </h2>
            {metadata.description ? (
              <div 
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: metadata.description }}
              />
            ) : (
              <p className="text-neutral-600">No description available.</p>
            )}
          </div>

          {/* Amenities */}
          {metadata.amenities && metadata.amenities.length > 0 && (
            <>
              <hr className="border-neutral-200" />
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  What this place offers
                </h2>
                <AmenityList amenities={metadata.amenities} />
              </div>
            </>
          )}

          {/* Host Section */}
          {metadata.host && (
            <>
              <hr className="border-neutral-200" />
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                  Meet your host
                </h2>
                <HostCard host={metadata.host} />
              </div>
            </>
          )}
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 card p-6">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <span className="text-2xl font-bold text-neutral-900">
                  ${metadata.price_per_night}
                </span>
                <span className="text-neutral-600"> / night</span>
              </div>
            </div>

            {/* Date Selection (UI only) */}
            <div className="border border-neutral-300 rounded-lg mb-4 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-neutral-300">
                <div className="p-3">
                  <label className="block text-xs font-semibold text-neutral-700 uppercase">
                    Check-in
                  </label>
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full mt-1 text-sm border-0 p-0 focus:ring-0 placeholder-neutral-500"
                    readOnly
                  />
                </div>
                <div className="p-3">
                  <label className="block text-xs font-semibold text-neutral-700 uppercase">
                    Checkout
                  </label>
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full mt-1 text-sm border-0 p-0 focus:ring-0 placeholder-neutral-500"
                    readOnly
                  />
                </div>
              </div>
              <div className="border-t border-neutral-300 p-3">
                <label className="block text-xs font-semibold text-neutral-700 uppercase">
                  Guests
                </label>
                <select className="w-full mt-1 text-sm border-0 p-0 focus:ring-0 bg-transparent">
                  {Array.from({ length: metadata.max_guests }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} guest{num !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn-primary w-full mb-4">
              Reserve
            </button>

            <p className="text-center text-sm text-neutral-600">
              You won&apos;t be charged yet
            </p>

            {/* Price Breakdown */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-neutral-700">
                <span className="underline">${metadata.price_per_night} x 5 nights</span>
                <span>${metadata.price_per_night * 5}</span>
              </div>
              <div className="flex justify-between text-neutral-700">
                <span className="underline">Cleaning fee</span>
                <span>$75</span>
              </div>
              <div className="flex justify-between text-neutral-700">
                <span className="underline">Service fee</span>
                <span>${Math.round(metadata.price_per_night * 5 * 0.12)}</span>
              </div>
              <hr className="border-neutral-200" />
              <div className="flex justify-between font-semibold text-neutral-900">
                <span>Total before taxes</span>
                <span>${metadata.price_per_night * 5 + 75 + Math.round(metadata.price_per_night * 5 * 0.12)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}