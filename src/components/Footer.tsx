import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#06369c] py-12 px-6 sm:px-10 lg:px-16 font-sans">
      <div className="max-w-screen-2xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto space-y-10">
        
        {/* Top Header Row: NAVIGATE (Left) and INQUIRES (Right) */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          {/* NAVIGATE Links */}
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#06369c]/60 font-bold">
              NAVIGATE
            </p>
            <nav className="flex flex-col space-y-1 text-xs sm:text-sm font-medium text-[#06369c]">
              <Link to="/" className="hover:opacity-75 transition-opacity">Home</Link>
              <Link to="/about" className="hover:opacity-75 transition-opacity">About</Link>
              <Link to="/portfolio" className="hover:opacity-75 transition-opacity">Portfolio</Link>
              <Link to="/contact" className="hover:opacity-75 transition-opacity">Get in Touch</Link>
            </nav>
          </div>

          {/* INQUIRIES Email Links */}
          <div className="space-y-2 sm:text-right">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#06369c]/60 font-bold">
              INQUIRIES
            </p>
            <div className="flex flex-col space-y-1 text-xs sm:text-sm font-medium text-[#06369c]">
              <a href="mailto:info@renaissanceevents.com" className="hover:opacity-75 transition-opacity">
                info@renaissanceevents.com
              </a>
              <a href="mailto:info@specialeventschannel.com" className="hover:opacity-75 transition-opacity">
                info@specialeventschannel.com
              </a>
            </div>
          </div>
        </div>

        {/* Middle Centerpiece: Framed Serif Brand Logo Block (Constrained to text width) */}
        <div className="py-2 text-center">
          <div className="inline-block max-w-full mx-auto space-y-3">
            {/* Top Line Framing RENAISSANCE */}
            <div className="border-t border-[#06369c]/30 pt-6 pb-2">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.12em] text-[#06369c] uppercase leading-none">
                RENAISSANCE
              </h1>
            </div>
            
            {/* Middle Line Framing subtext & Bottom Line */}
            <div className="border-t border-b border-[#06369c]/30 py-4 space-y-1">
              <p className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-[#06369c]">
                MEETINGS
              </p>
              <p className="font-serif text-[10px] sm:text-xs tracking-[0.3em] text-[#06369c]/80">
                &
              </p>
              <p className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-[#06369c]">
                SPECIAL EVENTS, INC.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright (Left) & Privacy Policy (Right) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#06369c]/60 pt-2">
          <p>© {currentYear} RENAISSANCE MEETINGS & SPECIAL EVENTS. ALL RIGHTS RESERVED.</p>
          <Link to="/contact" className="hover:text-[#06369c] transition-colors">
            PRIVACY POLICY
          </Link>
        </div>

      </div>
    </footer>
  );
}
