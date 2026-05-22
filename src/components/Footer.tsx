import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
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
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a1628] to-[#050a12] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a962] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a962] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
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
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Crafting extraordinary experiences that transcend expectations and 
                create lasting memories for the world's most discerning brands and clients.
              </p>
              <div className="flex items-center gap-2 text-[#c9a962] text-xs">
                <Heart className="w-3 h-3" />
                <span>Trusted by industry leaders worldwide</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#c9a962] mb-6">Navigation</h4>
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
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
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

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#c9a962] mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <a
                    href="mailto:info@renaissanceevents.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-[#c9a962] transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 flex items-center justify-center transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">info@renaissanceevents.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-gray-400 hover:text-[#c9a962] transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 group-hover:bg-[#c9a962]/20 flex items-center justify-center transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">+1 (234) 567-8900</span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-[#c9a962]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-sm">
                      <p>New York, USA</p>
                      <p>London, UK</p>
                      <p>Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/10 pt-16 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-2xl text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-400">
                  Subscribe to our newsletter for insights, trends, and exclusive event invitations.
                </p>
              </div>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-gray-500 focus:border-[#c9a962] focus:outline-none transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] font-semibold text-sm tracking-widest uppercase transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-t border-white/10 pt-12"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">Follow Us</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c9a962] flex items-center justify-center transition-colors duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-white group-hover:text-[#0a1628]" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 text-sm text-gray-500">
                <Link
                  to="#"
                  className="hover:text-[#c9a962] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <div className="hidden lg:block w-px h-4 bg-white/10" />
                <Link
                  to="#"
                  className="hover:text-[#c9a962] transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <div className="hidden lg:block w-px h-4 bg-white/10" />
                <Link
                  to="#"
                  className="hover:text-[#c9a962] transition-colors duration-300"
                >
                  Cookies Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 bg-black/30 backdrop-blur-sm">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-gray-500">
              <p>
                © {currentYear} Renaissance Events. All rights reserved. | Crafted with excellence globally.
              </p>
              <div className="flex items-center gap-2">
                <span>Design By</span>
                <span className="text-[#c9a962]">Renaissance Creative Studios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
