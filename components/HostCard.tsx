import Link from 'next/link';
import { Host } from '@/types';

interface HostCardProps {
  host: Host;
}

export default function HostCard({ host }: HostCardProps) {
  const { metadata } = host;

  return (
    <div className="flex items-start gap-6">
      {/* Host Avatar */}
      <div className="relative flex-shrink-0">
        {metadata.photo ? (
          <img
            src={`${metadata.photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
            alt={metadata.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center">
            <span className="text-2xl font-semibold text-neutral-600">
              {metadata.name.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Superhost Badge */}
        {metadata.superhost && (
          <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Host Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-neutral-900">
            Hosted by {metadata.name}
          </h3>
          {metadata.superhost && (
            <span className="badge-secondary text-xs">Superhost</span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            248 reviews
          </span>
          {metadata.response_rate && (
            <span>{metadata.response_rate}% response rate</span>
          )}
        </div>

        {/* Bio */}
        {metadata.bio && (
          <p className="text-neutral-700 line-clamp-3">
            {metadata.bio}
          </p>
        )}

        {/* Contact Button */}
        <button className="mt-4 btn-secondary text-sm py-2">
          Contact host
        </button>
      </div>
    </div>
  );
}