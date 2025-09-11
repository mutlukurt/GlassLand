import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API', href: '#api' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' },
      { name: 'Security', href: '#security' }
    ],
    legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'License', href: '#license' },
      { name: 'Cookies', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#github' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@glassland.com' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-green-800">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Company info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  GlassLand
                </h3>
                <p className="text-emerald-100 text-lg leading-relaxed max-w-lg">
                  Creating beautiful, modern web experiences with cutting-edge glassmorphism design. 
                  Transform your digital presence with our premium design system.
                </p>
              </div>
              
              {/* Social links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Connect with us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="glass-button p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-emerald-100 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="glass-element bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <p className="text-emerald-100 mb-4 text-sm">Get the latest updates and design inspiration.</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  />
                  <button className="glass-button px-6 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 backdrop-blur-sm border border-emerald-400/20 text-white rounded-lg font-medium transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-3">
                  {links.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {links.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-3">
                  {links.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  {links.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-emerald-100 text-sm flex items-center gap-2">
                © {currentYear} Mutlu Kurt. Made with{' '}
                <Heart className="w-4 h-4 text-red-400 fill-current" />{' '}
                for the web.
              </p>
              <p className="text-emerald-100 text-sm">
                MIT License • Glassmorphism Design System
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;