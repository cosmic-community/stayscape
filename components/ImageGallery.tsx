'use client';

import { useState } from 'react';
import { CosmicImage } from '@/types';

interface ImageGalleryProps {
  images: CosmicImage[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-[2/1] bg-neutral-200 rounded-xl flex items-center justify-center">
        <svg className="w-16 h-16 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  const mainImage = images[0];
  const gridImages = images.slice(1, 5);

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
          {/* Main Image */}
          <div className="col-span-4 md:col-span-2 md:row-span-2">
            <button
              onClick={() => { setCurrentIndex(0); setShowModal(true); }}
              className="w-full h-64 md:h-full"
            >
              <img
                src={`${mainImage.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt={title}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </button>
          </div>

          {/* Grid Images */}
          {gridImages.map((image, index) => (
            <div key={index} className="hidden md:block">
              <button
                onClick={() => { setCurrentIndex(index + 1); setShowModal(true); }}
                className="w-full h-full"
              >
                <img
                  src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={`${title} - Image ${index + 2}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Show All Photos Button */}
        {images.length > 5 && (
          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-4 right-4 bg-white text-neutral-900 px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Show all photos
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Current Image */}
          <img
            src={`${images[currentIndex]?.imgix_url}?w=1600&h=1000&fit=contain&auto=format,compress`}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
          />

          {/* Next Button */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}