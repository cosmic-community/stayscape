import Link from 'next/link';
import { Category } from '@/types';

interface CategoryNavProps {
  categories: Category[];
  activeSlug?: string;
}

export default function CategoryNav({ categories, activeSlug }: CategoryNavProps) {
  return (
    <nav className="py-4 overflow-x-auto">
      <div className="flex items-center gap-8 min-w-max">
        <Link
          href="/listings"
          className={`flex flex-col items-center gap-2 pb-2 border-b-2 transition-colors ${
            !activeSlug 
              ? 'border-neutral-900 text-neutral-900' 
              : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="text-xs font-medium whitespace-nowrap">All</span>
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className={`flex flex-col items-center gap-2 pb-2 border-b-2 transition-colors ${
              activeSlug === category.slug 
                ? 'border-neutral-900 text-neutral-900' 
                : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'
            }`}
          >
            {category.metadata.icon ? (
              <img
                src={`${category.metadata.icon.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                alt={category.metadata.name}
                className="w-6 h-6 object-cover rounded"
              />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            )}
            <span className="text-xs font-medium whitespace-nowrap">
              {category.metadata.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}