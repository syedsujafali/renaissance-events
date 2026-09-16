import { useState } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 max-w-sm z-[9999] bg-[#06369c] text-white p-6 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl animate-fade-in-up">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2.5">
          <Cookie className="w-5 h-5 text-white shrink-0" />
          <h3 className="font-serif text-lg font-semibold tracking-wide text-white">
            Cookie Settings
          </h3>
        </div>
        <button
          onClick={handleDismiss}
          className="text-white/70 hover:text-white transition-colors p-1 cursor-pointer"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-white/85 leading-relaxed font-sans mb-5">
        We use cookies to ensure you get the best experience on our website, analyze site traffic, and optimize performance.
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={handleDismiss}
          className="flex-1 bg-white hover:bg-white/90 text-[#06369c] py-2.5 px-5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
        >
          Accept All
        </button>
        <button
          onClick={handleDismiss}
          className="py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white border border-white/30 hover:border-white rounded-lg transition-all cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
