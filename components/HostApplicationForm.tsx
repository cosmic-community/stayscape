'use client'

import { useState } from 'react'
import { submitHostApplication, type HostApplicationFormData } from '@/app/actions/host-application'

export default function HostApplicationForm() {
  const [formData, setFormData] = useState<HostApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyName: '',
    propertyType: 'house',
    location: '',
    description: '',
    whyHost: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    const result = await submitHostApplication(formData)

    if (result.success) {
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your application has been submitted successfully. We\'ll review it and get back to you soon.',
      })
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        propertyName: '',
        propertyType: 'house',
        location: '',
        description: '',
        whyHost: '',
      })
    } else {
      setSubmitStatus({
        type: 'error',
        message: result.error || 'Something went wrong. Please try again.',
      })
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Personal Information */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Personal Information</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>

      {/* Property Information */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Property Information</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="propertyName" className="block text-sm font-medium text-neutral-700 mb-2">
              Property Name
            </label>
            <input
              type="text"
              id="propertyName"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Sunset Beach House"
            />
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-neutral-700 mb-2">
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="cabin">Cabin</option>
              <option value="cottage">Cottage</option>
              <option value="bungalow">Bungalow</option>
              <option value="chalet">Chalet</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
              Location (City, Country)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Miami, USA"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
              Property Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Tell us about your property..."
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Tell Us More</h2>
        
        <div>
          <label htmlFor="whyHost" className="block text-sm font-medium text-neutral-700 mb-2">
            Why do you want to become a host?
          </label>
          <textarea
            id="whyHost"
            name="whyHost"
            value={formData.whyHost}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Share your motivation for hosting guests..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}