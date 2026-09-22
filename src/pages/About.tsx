import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="overflow-hidden bg-[#06369c] text-white min-h-screen font-sans relative">
      {/* Ambient Lighting Background Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Editorial Showcase Section */}
      <section className="relative pt-44 pb-36 sm:pt-52 lg:pt-60 lg:pb-44 bg-[#06369c]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="space-y-10 lg:space-y-12">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl text-xs uppercase tracking-[0.35em] font-semibold text-white shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                <span>ABOUT RENAISSANCE</span>
              </div>
            </motion.div>

            {/* Luxury Editorial Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant font-bold uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.98] text-white"
            >
              THREE DECADES OF
              <br />
              EXTRAORDINARY
              <br />
              MOMENTS.
            </motion.h1>

            {/* Elegant Horizontal Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-[2px] bg-gradient-to-r from-white/60 via-white/30 to-transparent origin-left"
            />

            {/* Core Narrative Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 max-w-4xl text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light pl-6 border-l-2 border-white/30"
            >
              <p>
                For three decades, Renaissance Meetings & Special Events has been a trusted partner for global brands, Fortune 500 companies, associations, Sports, non-profits, and visionary leaders seeking to create moments that transcend the ordinary.
              </p>
              <p className="text-white/85 text-base sm:text-lg lg:text-xl pt-1">
                From intimate executive gatherings to large-scale productions reaching thousands, we bring expertise, creativity, and precision to every event.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#06369c] font-semibold text-base tracking-wide hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Plan Your Next Event</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>

        </div>
      </section>
    </main>
  );
}



