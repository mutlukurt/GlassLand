import React from 'react';
import { Layers, Smartphone, Zap, Shield, Palette, Code } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Layered Design',
      description: 'Beautiful depth and hierarchy with carefully crafted glass layers and transparency effects.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly across all devices, from mobile to desktop.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with smooth animations and efficient rendering.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Built with security in mind and tested for reliability across all platforms.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Customizable',
      description: 'Easy to customize colors, effects, and layouts to match your brand identity.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Developer Friendly',
      description: 'Clean, semantic code with comprehensive documentation and examples.'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 glass-element bg-emerald-500/10 backdrop-blur-sm border border-emerald-200/30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-emerald-700">Premium Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              GlassLand
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of aesthetics and functionality with our carefully crafted 
            glassmorphism design system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card group bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 lg:mt-32">
          <div className="glass-element bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-mint-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Advanced Glassmorphism Effects
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Our advanced implementation of glassmorphism includes sophisticated backdrop filters, 
                  layered transparency, and smooth animations that create a truly immersive user experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Cross-browser compatibility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Performance optimized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700">Accessibility focused</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glass-element bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      <div className="h-2 bg-emerald-200/50 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="h-2 bg-green-200/50 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-mint-500 rounded-full"></div>
                      <div className="h-2 bg-mint-200/50 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;