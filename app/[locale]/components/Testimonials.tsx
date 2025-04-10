'use client';

interface TestimonialsProps {
  dictionary: any;
}

export default function Testimonials({ dictionary }: TestimonialsProps) {
  // Sample testimonials - in a real app, these would come from a database or API
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Toy Collector',
      quote:
        'The AI-generated action figure of me is incredible! The detail and likeness are spot on. My kids love it!',
      avatar: '/placeholder-avatar.jpg',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Comic Book Fan',
      quote:
        'I got action figures made of my entire family for the holidays. The quality exceeded my expectations!',
      avatar: '/placeholder-avatar.jpg',
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Gaming Enthusiast',
      quote:
        'The superhero version of my action figure is amazing. It is like seeing myself in the Marvel universe!',
      avatar: '/placeholder-avatar.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.testimonials.title}</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-tech-dark rounded-full flex items-center justify-center mr-4">
                  {/* Placeholder for avatar */}
                  <svg
                    className="w-6 h-6 text-tech"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-tech text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-tech-dark italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">{dictionary.testimonials.viewAll}</button>
        </div>
      </div>
    </section>
  );
} 