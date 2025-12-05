import { Metadata } from 'next';
import HostApplicationForm from '@/components/HostApplicationForm';

export const metadata: Metadata = {
  title: 'Become a Host - StayScape',
  description: 'Join StayScape as a host and start earning by sharing your property with travelers around the world.',
};

export default function BecomeAHostPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Become a StayScape Host
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Share your space, earn extra income, and welcome travelers from around the world. Join our community of hosts today.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Extra Income</h3>
              <p className="text-neutral-600">
                Set your own price and availability. Earn money by sharing your space when you're not using it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Host Protection</h3>
              <p className="text-neutral-600">
                Enjoy peace of mind with our Host Guarantee program protecting your property up to $1M.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-neutral-600">
                Get help whenever you need it with our dedicated host support team available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">
              Apply to Become a Host
            </h2>
            <p className="text-neutral-600 mb-8">
              Fill out the form below and we'll review your application. We typically respond within 2-3 business days.
            </p>
            
            <HostApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                How much can I earn as a host?
              </h3>
              <p className="text-neutral-600">
                Your earnings depend on your location, property type, amenities, and availability. Many hosts earn enough to cover their mortgage or rent payments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Is my property protected?
              </h3>
              <p className="text-neutral-600">
                Yes! Our Host Guarantee provides up to $1M in property damage protection at no additional cost to you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                How do I set my price?
              </h3>
              <p className="text-neutral-600">
                You have complete control over your pricing. We provide recommendations based on similar properties in your area, but the final decision is always yours.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Can I block off dates when I don't want to host?
              </h3>
              <p className="text-neutral-600">
                Absolutely! You control your calendar completely. Block off any dates when your property isn't available or when you need personal time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}