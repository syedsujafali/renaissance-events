import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Play, Pause } from 'lucide-react';
import GlobalContactSection from '../components/GlobalContactSection';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textSectionRef, { once: true, amount: 0.15 });

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPaused(false)).catch(() => { });
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playVideo = () => {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            const handleFirstInteraction = () => {
              video.play().catch(() => { });
              window.removeEventListener('click', handleFirstInteraction);
              window.removeEventListener('touchstart', handleFirstInteraction);
              window.removeEventListener('scroll', handleFirstInteraction);
            };
            window.addEventListener('click', handleFirstInteraction, { once: true });
            window.addEventListener('touchstart', handleFirstInteraction, { once: true });
            window.addEventListener('scroll', handleFirstInteraction, { once: true });
          });
        }
      };

      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo, { once: true });
        playVideo();
      }
    }
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroDim = useTransform(scrollY, [0, 600], [1, 0.7]);

  const headlineText = "Who We Are";
  const words = headlineText.split(" ");

  const paragraph1Text = "With over 30 years of experience, Renaissance Meetings & Special Events is a full-service event management and marketing firm creating memorable brand experiences. From conferences and special events to fundraising and sponsorships, we combine creativity, strategy, and expertise to deliver unique experiences that connect people, elevate brands, and bring our client's visions to life.";
  const paragraph1Words = paragraph1Text.split(" ");

  const paragraph2Text = "";
  const paragraph2Words = paragraph2Text.split(" ");

  // Framer Motion Animation Variants
  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const p1ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
        delayChildren: 0.2,
      },
    },
  };

  const p2ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.95,
      },
    },
  };

  const headlineWordVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: 'blur(10px)',
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  const bodyWordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background Video with Parallax */}
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroDim }}
          className="absolute inset-0 bg-black overflow-hidden"
        >
          {/* Video Player */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/0911/0911-Cover.jpg"
            onPlaying={() => {
              setIsVideoPlaying(true);
              setIsPaused(false);
            }}
            onPlay={() => setIsPaused(false)}
            onPause={() => setIsPaused(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/0911/0911.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Instant Background Poster (smoothly crossfades out once video is playing) */}
          <img
            src="/0911/0911-Cover.jpg"
            alt="Renaissance Events"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${isVideoPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Video Play / Pause Toggle Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={togglePlayPause}
          className="absolute bottom-10 right-5 sm:bottom-12 sm:right-10 lg:right-16 z-20 group flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 text-white text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          aria-label={isPaused ? 'Play background video' : 'Pause background video'}
          title={isPaused ? 'Play video' : 'Pause video'}
        >
          {isPaused ? (
            <>
              <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline text-[11px] font-semibold tracking-widest">Play</span>
            </>
          ) : (
            <>
              <Pause className="w-3.5 h-3.5 fill-white text-white transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline text-[11px] font-semibold tracking-widest">Pause</span>
            </>
          )}
        </motion.button>

        {/* Scroll Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.85,
              behavior: 'smooth',
            });
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-white/40 group-hover:border-white flex items-center justify-center p-1 backdrop-blur-sm bg-white/10 transition-all duration-300 shadow-lg">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.button>
      </section>

      {/* Unique Scroll Reveal Text Section */}
      <section
        ref={textSectionRef}
        className="relative py-12 sm:py-14 lg:py-16 bg-white text-[#06369c]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-12">
          {/* Headline Word-by-Word Scroll Reveal */}
          <motion.h1
            variants={headlineContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] text-[#06369c] tracking-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-2"
          >
            {words.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden py-1">
                <motion.span
                  variants={headlineWordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Decorative Animated Line Accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-24 h-[2px] bg-[#06369c] mx-auto origin-center rounded-full"
          />

          {/* Paragraph 1 Word-by-Word Scroll Reveal */}
          <motion.p
            variants={p1ContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#06369c] text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium flex flex-wrap justify-center gap-x-[0.25em] gap-y-1.5"
          >
            {paragraph1Words.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden py-0.5">
                <motion.span
                  variants={bodyWordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.p>

          {/* Paragraph 2 Word-by-Word Scroll Reveal */}
          {paragraph2Text.trim().length > 0 && (
            <motion.p
              variants={p2ContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-[#06369c] text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium flex flex-wrap justify-center gap-x-[0.25em] gap-y-1.5"
            >
              {paragraph2Words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden py-0.5">
                  <motion.span
                    variants={bodyWordVariants}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.p>
          )}
        </div>
      </section>

      {/* Reusable Architectural Editorial Contact Section */}
      <GlobalContactSection />
    </main>
  );
}
