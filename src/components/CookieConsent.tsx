import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, functional: true, marketing: true });
    saveConsent({ necessary: true, functional: true, marketing: true });
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveConsent(preferences);
    setIsVisible(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#fffbeb] backdrop-blur-md border-t border-gray-200 shadow-2xl">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Message */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#0a1628]">
              Cookie Preferences
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. By continuing to use this site, you consent to 
              our use of cookies in accordance with our Privacy Policy.
            </p>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">Necessary</span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 rounded border-gray-300 text-[#0a1628] focus:ring-[#0a1628] disabled:opacity-50"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">Functional</span>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences({ ...preferences, functional: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-gray-300 text-[#0a1628] focus:ring-[#0a1628]"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-gray-700">Marketing</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-gray-300 text-[#0a1628] focus:ring-[#0a1628]"
                />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAcceptSelected}
                className="flex-1 bg-[#0a1628] hover:bg-[#152238] text-white px-6 py-3 text-sm tracking-widest uppercase font-medium transition-colors duration-300"
              >
                Accept Selected
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] px-6 py-3 text-sm tracking-widest uppercase font-medium transition-colors duration-300"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
