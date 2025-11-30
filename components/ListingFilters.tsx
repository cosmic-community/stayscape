'use client';

import { useState } from 'react';

export default function ListingFilters() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 flex-wrap">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:border-neutral-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Filters
        </button>

        <button className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-400 transition-colors text-sm">
          Price
        </button>
        
        <button className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-400 transition-colors text-sm">
          Type of place
        </button>
        
        <button className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-400 transition-colors text-sm">
          Bedrooms
        </button>
        
        <button className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-400 transition-colors text-sm">
          Amenities
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 p-6 bg-white border border-neutral-200 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Price range</h4>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-xs text-neutral-600 mb-1">Min</label>
                  <input
                    type="number"
                    placeholder="$0"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <span className="text-neutral-400">—</span>
                <div className="flex-1">
                  <label className="block text-xs text-neutral-600 mb-1">Max</label>
                  <input
                    type="number"
                    placeholder="$1000+"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Bedrooms</h4>
              <div className="flex items-center gap-2">
                {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                  <button
                    key={num}
                    className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors text-sm"
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Property type</h4>
              <div className="flex flex-wrap gap-2">
                {['House', 'Apartment', 'Villa', 'Cabin', 'Condo'].map((type) => (
                  <button
                    key={type}
                    className="px-4 py-2 border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors text-sm"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-200">
            <button className="text-neutral-700 underline font-medium">
              Clear all
            </button>
            <button className="btn-primary">
              Show results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}