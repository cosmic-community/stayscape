import { Metadata } from 'next';
import HostApplicationForm from '@/components/HostApplicationForm';

export const metadata: Metadata = {
  title: 'Become a Host | StayScape',
  description: 'List your property on StayScape and start earning money by hosting travelers from around the world.',
};

export default function BecomeAHostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Share your space, earn extra income
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Join thousands of hosts welcoming guests to their properties. It's free to get started and we'll guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Why host on StayScape?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Earn extra income</h3>
              <p className="text-neutral-600">
                Set your own price and earn money by sharing your space with travelers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Host protection</h3>
              <p className="text-neutral-600">
                You're covered by our Host Guarantee and 24/7 customer support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Full control</h3>
              <p className="text-neutral-600">
                You decide when to host, who to accept, and how much to charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Start your hosting journey
            </h2>
            <p className="text-lg text-neutral-600">
              Fill out the form below and we'll get back to you within 24 hours to discuss your listing.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <HostApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Is it free to list my property?
              </h3>
              <p className="text-neutral-600">
                Yes! It's completely free to list your property on StayScape. We only charge a small service fee when you receive a booking.
              </p>
            </div>

            <div className="border-b border-neutral-200 pb-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                How do I get paid?
              </h3>
              <p className="text-neutral-600">
                We transfer your earnings directly to your bank account 24 hours after your guest checks in. You can track all your earnings in your host dashboard.
              </p>
            </div>

            <div className="border-b border-neutral-200 pb-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                What if I need to cancel a booking?
              </h3>
              <p className="text-neutral-600">
                While we encourage hosts to honor their commitments, we understand that emergencies happen. You can cancel bookings through your dashboard, though frequent cancellations may affect your host rating.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Do I need insurance?
              </h3>
              <p className="text-neutral-600">
                All bookings are covered by our Host Guarantee, which provides up to $1 million in property damage protection. However, we recommend reviewing your homeowners insurance policy as well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}