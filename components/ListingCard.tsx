import Link from 'next/link';
import { Listing } from '@/types';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { metadata } = listing;
  
  return (
    <Link href={`/listings/${listing.slug}`} className="group">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        {metadata.featured_image ? (
          <img
            src={`${metadata.featured_image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={metadata.property_name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        )}
        
        {/* Category Badge */}
        {metadata.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-medium px-2.5 py-1 rounded-full">
              {metadata.category.metadata?.name || metadata.category.title}
            </span>
          </div>
        )}
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors">
          <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Superhost Badge */}
        {metadata.host?.metadata?.superhost && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-white text-neutral-900 text-xs font-semibold px-2 py-1 rounded shadow-sm">
              Superhost
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-neutral-900 truncate">
            {metadata.city}, {metadata.country}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <svg className="w-4 h-4 text-neutral-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">4.9</span>
          </div>
        </div>
        
        <p className="text-neutral-600 text-sm mt-1 truncate">
          {metadata.property_name}
        </p>
        
        <p className="text-neutral-600 text-sm">
          {metadata.bedrooms} bed{metadata.bedrooms !== 1 ? 's' : ''} · {metadata.bathrooms} bath{metadata.bathrooms !== 1 ? 's' : ''} · {metadata.max_guests} guest{metadata.max_guests !== 1 ? 's' : ''}
        </p>
        
        <p className="mt-2">
          <span className="font-semibold text-neutral-900">${metadata.price_per_night}</span>
          <span className="text-neutral-600"> night</span>
        </p>
      </div>
    </Link>
  );
}