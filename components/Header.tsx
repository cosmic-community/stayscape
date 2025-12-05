import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg 
              className="w-8 h-8 text-primary" 
              viewBox="0 0 32 32" 
              fill="currentColor"
            >
              <path d="M16 1c-8.3 0-15 6.7-15 15 0 8.3 6.7 15 15 15s15-6.7 15-15c0-8.3-6.7-15-15-15zm0 27c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm0-20c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
            </svg>
            <span className="text-xl font-bold text-primary">
              StayScape
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/listings" 
              className="text-neutral-700 hover:text-primary font-medium transition-colors"
            >
              Explore
            </Link>
            <Link 
              href="/categories" 
              className="text-neutral-700 hover:text-primary font-medium transition-colors"
            >
              Categories
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-neutral-700 hover:text-primary font-medium transition-colors">
              Become a host
            </button>
            
            {/* User Menu */}
            <button className="flex items-center gap-2 border border-neutral-300 rounded-full py-2 px-4 hover:shadow-md transition-shadow">
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="w-6 h-6 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}