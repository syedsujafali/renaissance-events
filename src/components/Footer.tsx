import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#06369c] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 px-6 sm:px-10 lg:px-16 font-sans">
      <div className="max-w-screen-2xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto space-y-7 lg:space-y-9">

        {/* Centered Navigation Row & Brand Centerpiece */}
        <div className="flex flex-col items-center text-center space-y-10 sm:space-y-12">
          {/* Top Navigation Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-3">
            <span className="bg-[#06369c] text-white px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
              NAVIGATE :-
            </span>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-2 text-base sm:text-lg lg:text-xl font-medium text-[#06369c]">
              <Link to="/" className="hover:opacity-75 transition-opacity">Home</Link>
              <Link to="/about" className="hover:opacity-75 transition-opacity">About</Link>
              <Link to="/services" className="hover:opacity-75 transition-opacity">Services</Link>
              <Link to="/contact" className="hover:opacity-75 transition-opacity">Get in Touch</Link>
            </nav>
          </div>

          {/* Centerpiece: Framed Serif Brand Logo Block */}
          <div className="w-full flex justify-center">
            <div className="inline-block max-w-full text-center space-y-4">
              {/* Top Line Framing RENAISSANCE */}
              <div className="border-t border-[#06369c]/30 pt-8 pb-3">
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-[0.12em] text-[#06369c] uppercase leading-none">
                  RENAISSANCE
                </h1>
              </div>

              {/* Middle Line Framing subtext & Bottom Line */}
              <div className="border-t border-b border-[#06369c]/30 py-5 space-y-1.5">
                <p className="font-serif text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase text-[#06369c]">
                  MEETINGS
                </p>
                <p className="font-serif text-[10px] sm:text-xs lg:text-sm tracking-[0.3em] text-[#06369c]/80">
                  &amp;
                </p>
                <p className="font-serif text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase text-[#06369c]">
                  SPECIAL EVENTS, INC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="flex justify-center items-center text-center text-xs font-medium uppercase tracking-[0.25em] text-[#06369c]/90 pt-4 border-t border-[#06369c]/20">
          <p>© {currentYear} RENAISSANCE MEETINGS &amp; SPECIAL EVENTS. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}
