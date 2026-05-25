import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 bg-[#0a1628]/100 backdrop-blur-2xl shadow-2xl border-b border-white/10 transition-all duration-500'
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-full px-0">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <img
              src="/images/logo.png"
              alt="Renaissance logo"
              className="h-14 sm:h-16 lg:h-20 w-auto max-w-[160px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'nav-link text-sm tracking-widest uppercase transition-colors duration-300',
                  location.pathname === link.to
                    ? 'text-[#c9a962]'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-luxury bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] px-6 py-3 text-sm tracking-widest uppercase font-medium"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 h-10 w-10 rounded-full border border-white/15 bg-white/10 shadow-md hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (ported to body to avoid stacking-context issues) */}
      {createPortal(
        <div
          className={cn(
            'lg:hidden fixed inset-0 z-[9998] transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 z-[9998] bg-black/65 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <aside
            className={cn(
              'fixed right-0 top-0 bottom-0 z-[9999] h-full w-full max-w-full sm:w-[420px] flex flex-col overflow-hidden bg-[#07101f]/95 backdrop-blur-md shadow-2xl border-l border-white/10 transition-transform duration-500',
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between gap-4 px-6 py-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Navigation</p>
                <p className="mt-2 text-lg font-semibold uppercase tracking-[0.28em] text-white">Renaissance</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative z-[10001] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg transition-colors duration-300 hover:bg-white/20"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-8">
              <nav className="flex flex-col gap-4 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block rounded-[20px] px-5 py-4 text-left text-lg font-medium tracking-[0.12em] transition duration-300 whitespace-nowrap overflow-hidden text-ellipsis',
                      location.pathname === link.to
                        ? 'bg-white/10 text-[#c9a962]'
                        : 'bg-white/5 text-white/80 hover:bg-white/15 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="border-t border-white/10 px-6 py-6">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-[20px] bg-[#c9a962] px-6 py-4 text-sm uppercase tracking-[0.28em] text-[#0a1628] transition hover:bg-[#d4b978]"
              >
                Get in Touch
              </Link>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </header>
  );
}
