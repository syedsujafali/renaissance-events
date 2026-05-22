import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    'Event Planning & Production',
    'Corporate Events',
    'Brand Activations',
    'Large-Scale Productions',
  ];

  const socialLinks = [
    { icon: Globe, label: 'Website', url: '#' },
    { icon: Share2, label: 'Discover', url: '#' },
    { icon: Star, label: 'Community', url: '#' },
  ];

  return (
    <footer className="bg-[#0a1628] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-[-4rem] w-72 h-72 rounded-full bg-[#c9a962] blur-3xl" />
        <div className="absolute bottom-10 right-[-4rem] w-72 h-72 rounded-full bg-[#c9a962] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Renaissance logo"
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#c9a962] rounded-full" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold tracking-wide">RENAISSANCE</h3>
                <p className="text-[#c9a962] text-xs tracking-widest uppercase">Events & Experiences</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We design bold, detail-driven events that connect brands and audiences with unforgettable moments.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg'].map((name) => (
                <div key={name} className="overflow-hidden rounded-sm border border-white/10">
                  <img
                    src={`/images/${name}`}
                    alt="Renaissance event highlight"
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="font-serif text-lg font-semibold text-[#c9a962] mb-6">Explore</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-gray-400 hover:text-[#c9a962] transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold text-[#c9a962] mb-6">Services</h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    className="block text-gray-400 hover:text-[#c9a962] transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="font-serif text-lg font-semibold text-[#c9a962] mb-6">Contact</h4>
              <div className="space-y-4 text-sm text-gray-400">
                <a
                  href="mailto:info@renaissanceevents.com"
                  className="block hover:text-[#c9a962] transition-colors duration-300"
                >
                  info@renaissanceevents.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="block hover:text-[#c9a962] transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
                <p>New York · London · Dubai</p>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-[#c9a962] mb-6">Follow Us</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c9a962] flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6 text-sm text-gray-400">
            <p>© {currentYear} Renaissance Events. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="#" className="hover:text-[#c9a962] transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="hidden lg:block">•</span>
              <Link to="#" className="hover:text-[#c9a962] transition-colors duration-300">
                Terms of Service
              </Link>
              <span className="hidden lg:block">•</span>
              <Link to="#" className="hover:text-[#c9a962] transition-colors duration-300">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
