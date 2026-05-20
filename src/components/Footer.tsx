import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Renaissance logo"
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
              />
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-wide">RENAISSANCE</h3>
                <p className="text-gray-400 text-xs tracking-widest uppercase">Events</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Crafting extraordinary experiences that transcend expectations. 
              Global event planning and production for the world's most discerning brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-[#c9a962]">Navigation</h4>
            <nav className="space-y-4">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                About
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-[#c9a962]">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@renaissanceevents.com"
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                info@renaissanceevents.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-500 text-xs">
              © {currentYear} Renaissance Events. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-xs">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
