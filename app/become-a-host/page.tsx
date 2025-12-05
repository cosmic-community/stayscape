import type { Metadata } from 'next'
import HostApplicationForm from '@/components/HostApplicationForm'

export const metadata: Metadata = {
  title: 'Become a Host - StayScape',
  description: 'List your property on StayScape and start earning income by hosting travelers from around the world.',
}

export default function BecomeAHostPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Become a Host
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Share your space and earn income by hosting travelers from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Why Host with StayScape?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Earn Extra Income
              </h3>
              <p className="text-neutral-600">
                Turn your extra space into a steady stream of income by hosting guests
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Secure & Protected
              </h3>
              <p className="text-neutral-600">
                We provide host protection and insurance coverage for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Global Community
              </h3>
              <p className="text-neutral-600">
                Connect with travelers from around the world and build lasting relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Start Your Hosting Journey
            </h2>
            <p className="text-lg text-neutral-600">
              Fill out the form below and we'll review your application
            </p>
          </div>

          <HostApplicationForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                How much can I earn as a host?
              </h3>
              <p className="text-neutral-600">
                Earnings vary based on your location, property type, and how often you host. Many hosts earn enough to cover their mortgage or rent payments.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Is my property protected?
              </h3>
              <p className="text-neutral-600">
                Yes! We provide host protection insurance and 24/7 customer support to help resolve any issues that may arise.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                How do I get paid?
              </h3>
              <p className="text-neutral-600">
                Payments are processed securely through our platform and typically arrive in your account within 24 hours after a guest checks in.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Can I cancel a reservation?
              </h3>
              <p className="text-neutral-600">
                Yes, but we encourage hosts to honor their commitments. Excessive cancellations may affect your host status and reputation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}