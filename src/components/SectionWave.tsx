interface SectionWaveProps {
  position?: 'top' | 'bottom';
  fillColor?: string; // e.g. "text-white" or "text-[#06369c]"
  flipX?: boolean;
  className?: string;
  waveHeight?: string;
}

export default function SectionWave({
  position = 'top',
  fillColor = 'text-[#06369c]',
  flipX = false,
  className = '',
  waveHeight = 'h-16 sm:h-24 md:h-32 lg:h-40 xl:h-48',
}: SectionWaveProps) {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none z-10 pointer-events-none ${
        isTop ? 'relative top-0 -mb-1' : 'relative bottom-0 -mt-1'
      } ${className}`}
    >
      <svg
        className={`w-full ${waveHeight} block ${fillColor} ${
          flipX ? 'scale-x-[-1]' : ''
        }`}
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        {isTop ? (
          /* Fills the region from y=0 down to wave curve */
          <path d="M0,36 C360,72 720,8 1080,52 C1260,74 1380,28 1440,40 L1440,0 L0,0 Z" />
        ) : (
          /* Fills the region from wave curve down to y=96 - steep right rise */
          <path d="M0,52 C280,36 540,82 860,84 C1120,86 1300,16 1440,8 L1440,96 L0,96 Z" />
        )}
      </svg>
    </div>
  );
}
