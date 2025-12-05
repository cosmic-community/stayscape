'use client';

import { useState } from 'react';
import { submitHostApplication } from '@/app/actions/host-application';

export default function HostApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);

    try {
      await submitHostApplication(formData);
      setSubmitSuccess(true);
      // Reset form
      event.currentTarget.reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          Application Submitted!
        </h3>
        <p className="text-neutral-600 mb-6">
          Thank you for your interest in becoming a StayScape host. We'll review your application and get back to you within 2-3 business days.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="btn-primary"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {submitError}
        </div>
      )}

      {/* Personal Information */}
      <div>
        <label htmlFor="full_name" className="block text-sm font-medium text-neutral-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="John Doe"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Property Information */}
      <div className="pt-6 border-t border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Property Information
        </h3>

        <div className="space-y-6">
          <div>
            <label htmlFor="property_address" className="block text-sm font-medium text-neutral-700 mb-2">
              Property Address *
            </label>
            <input
              type="text"
              id="property_address"
              name="property_address"
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="123 Main St, City, State, ZIP"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="property_type" className="block text-sm font-medium text-neutral-700 mb-2">
                Property Type *
              </label>
              <select
                id="property_type"
                name="property_type"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a property type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Cabin">Cabin</option>
                <option value="Condo">Condo</option>
                <option value="Cottage">Cottage</option>
                <option value="Loft">Loft</option>
              </select>
            </div>

            <div>
              <label htmlFor="number_of_rooms" className="block text-sm font-medium text-neutral-700 mb-2">
                Number of Bedrooms *
              </label>
              <input
                type="number"
                id="number_of_rooms"
                name="number_of_rooms"
                required
                min="1"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
              Property Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Describe your property, its features, and what makes it special..."
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 mb-2">
              Hosting Experience
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={3}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Tell us about any previous hosting experience (optional)"
            />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
        <p className="text-sm text-neutral-500 text-center mt-3">
          By submitting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </form>
  );
}