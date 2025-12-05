'use client';

import { useState } from 'react';
import { submitHostApplication } from '@/app/actions/host-application';

export default function HostApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);

    try {
      const result = await submitHostApplication(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit application. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Application submitted successfully!</h3>
              <p className="text-sm text-green-700 mt-1">
                Thank you for your interest in becoming a host. We'll review your application and get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Submission failed</h3>
              <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-neutral-900">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-neutral-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-neutral-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Property Information */}
      <div className="space-y-4 pt-6 border-t border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-900">Property Information</h3>
        
        <div>
          <label htmlFor="property_name" className="block text-sm font-medium text-neutral-700 mb-1">
            Property Name *
          </label>
          <input
            type="text"
            id="property_name"
            name="property_name"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Cozy Downtown Apartment"
          />
        </div>

        <div>
          <label htmlFor="property_type" className="block text-sm font-medium text-neutral-700 mb-1">
            Property Type *
          </label>
          <select
            id="property_type"
            name="property_type"
            required
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a property type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Cabin">Cabin</option>
            <option value="Condo">Condo</option>
            <option value="Cottage">Cottage</option>
            <option value="Loft">Loft</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="San Francisco"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="United States"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-neutral-700 mb-1">
              Bedrooms *
            </label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              required
              min="0"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="2"
            />
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-neutral-700 mb-1">
              Bathrooms *
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              required
              min="0"
              step="0.5"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="1.5"
            />
          </div>

          <div>
            <label htmlFor="max_guests" className="block text-sm font-medium text-neutral-700 mb-1">
              Max Guests *
            </label>
            <input
              type="number"
              id="max_guests"
              name="max_guests"
              required
              min="1"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="4"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">
            Property Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tell us about your property, its unique features, and what makes it special..."
          />
        </div>

        <div>
          <label htmlFor="price_per_night" className="block text-sm font-medium text-neutral-700 mb-1">
            Desired Price Per Night (USD) *
          </label>
          <input
            type="number"
            id="price_per_night"
            name="price_per_night"
            required
            min="0"
            step="1"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="150"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4 pt-6 border-t border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-900">Additional Information</h3>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-1">
            Have you hosted before?
          </label>
          <select
            id="experience"
            name="experience"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="No">No, this is my first time</option>
            <option value="Yes, on StayScape">Yes, on StayScape</option>
            <option value="Yes, on other platforms">Yes, on other platforms</option>
          </select>
        </div>

        <div>
          <label htmlFor="additional_notes" className="block text-sm font-medium text-neutral-700 mb-1">
            Additional Notes
          </label>
          <textarea
            id="additional_notes"
            name="additional_notes"
            rows={3}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Any additional information you'd like to share..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  );
}