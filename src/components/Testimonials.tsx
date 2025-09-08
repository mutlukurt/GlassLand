import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      company: 'DesignCo',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The glassmorphism effects are absolutely stunning! This has completely transformed how we approach modern web design. The attention to detail is remarkable.'
    },
    {
      name: 'Michael Chen',
      role: 'Frontend Developer',
      company: 'TechStart',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Clean, efficient code with beautiful results. The mobile responsiveness is flawless and the performance is excellent. Highly recommend for any project.'
    },
    {
      name: 'Emily Davis',
      role: 'Creative Director',
      company: 'BrandLabs',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'This design system elevated our brand presence significantly. Clients are constantly complimenting the modern, sophisticated look and feel.'
    },
    {
      name: 'David Rodriguez',
      role: 'Product Manager',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The user engagement has increased dramatically since implementing this design. The glassmorphism effects create such an engaging, premium experience.'
    },
    {
      name: 'Lisa Wang',
      role: 'Web Developer',
      company: 'DevStudio',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Easy to implement and customize. The documentation is comprehensive and the results speak for themselves. Perfect for modern web applications.'
    },
    {
      name: 'James Thompson',
      role: 'Agency Owner',
      company: 'CreativeFlow',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Our clients love the sophisticated look. This has become our go-to design system for premium projects. Exceptional quality and attention to detail.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50/30"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 glass-element bg-green-500/10 backdrop-blur-sm border border-green-200/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-green-700">Customer Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Professionals
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what industry professionals are saying about our glassmorphism design system.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card group bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-emerald-500/60" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 lg:mt-32 text-center">
          <div className="glass-element bg-gradient-to-r from-white/30 to-emerald-50/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-700">500+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-700">50k+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-700">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-700">4.9/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;