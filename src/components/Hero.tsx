import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-mint-50 to-green-100"></div>
      
      {/* Floating glass elements */}
      <div className="absolute inset-0">
        <div className="glass-orb glass-orb-1"></div>
        <div className="glass-orb glass-orb-2"></div>
        <div className="glass-orb glass-orb-3"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Spacer for better positioning */}
          <div className="h-16 sm:h-20 lg:h-24"></div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-element bg-white/30 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800">Modern Design Solutions</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Beautiful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Glassmorphism
            </span>
            <br />
            Experiences
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create stunning, modern interfaces with our premium glassmorphism design system. 
            Perfect for building elegant, professional web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#features"
              className="glass-button-primary group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Explore Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#testimonials"
              className="glass-button bg-white/30 hover:bg-white/40 backdrop-blur-md border border-white/20 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              View Examples
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-element bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">50k+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Users</div>
            </div>
            <div className="glass-element bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">99.9%</div>
              <div className="text-sm text-gray-600 mt-1">Uptime</div>
            </div>
            <div className="glass-element bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;