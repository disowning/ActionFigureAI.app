'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  dictionary: any;
}

export default function NewsletterSignup({ dictionary }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the email to your API
      // For demo purposes, we'll just simulate an API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-light rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with ActionFigureAI
              </h2>
              <p className="text-tech">
                Subscribe to our newsletter for the latest updates, promotions, and AI figure design tips.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center text-white py-4">
                <svg
                  className="w-16 h-16 text-secondary mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
                <p className="text-tech">We will send you the latest updates and exclusive offers.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-grow">
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-md focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-secondary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {error && <p className="mt-2 text-red-300 text-sm">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 