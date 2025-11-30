'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/listings');
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-full shadow-lg p-2 max-w-2xl">
      <div className="flex items-center">
        <div className="flex-1 px-4">
          <label className="block text-xs font-semibold text-neutral-900">Where</label>
          <input
            type="text"
            placeholder="Search destinations"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full text-sm text-neutral-600 placeholder-neutral-400 border-0 p-0 focus:ring-0"
          />
        </div>
        
        <div className="hidden md:block border-l border-neutral-200 px-4">
          <label className="block text-xs font-semibold text-neutral-900">Check in</label>
          <span className="text-sm text-neutral-400">Add dates</span>
        </div>
        
        <div className="hidden md:block border-l border-neutral-200 px-4">
          <label className="block text-xs font-semibold text-neutral-900">Check out</label>
          <span className="text-sm text-neutral-400">Add dates</span>
        </div>
        
        <div className="hidden md:block border-l border-neutral-200 px-4">
          <label className="block text-xs font-semibold text-neutral-900">Who</label>
          <span className="text-sm text-neutral-400">Add guests</span>
        </div>
        
        <button
          type="submit"
          className="bg-primary hover:bg-primary-600 text-white p-3 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}