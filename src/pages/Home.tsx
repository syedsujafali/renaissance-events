import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    {
      title: 'Global Tech Summit 2025',
      category: 'Corporate Events',
      image: '/images/5.jpeg',
    },
    {
      title: 'Luxury Brand Launch',
      category: 'Brand Activations',
      image: '/images/6.jpeg',
    },
    {
      title: 'Annual Gala Dinner',
      category: 'Special Events',
      image: '/images/7.jpeg',
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/1.jpeg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <Star className="w-8 h-8 text-[#c9a962] mx-auto" />
          </motion.div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-medium text-white leading-tight mb-8">
            Where Vision Meets
            <br />
            <span className="text-[#c9a962]">Extraordinary</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Renaissance Events crafts immersive experiences that captivate, 
            inspire, and leave an indelible mark on the world's most discerning audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="btn-luxury bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] px-8 lg:px-10 py-4 text-sm tracking-widest uppercase font-medium inline-flex items-center justify-center gap-3"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-luxury border border-white/30 hover:border-white hover:bg-white/10 text-white px-8 lg:px-10 py-4 text-sm tracking-widest uppercase font-medium"
            >
              Start a Conversation
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#c9a962] to-transparent" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ff]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll space-y-8"
            >
              <div className="w-16 h-px bg-[#c9a962]" />
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
                Redefining the Art of
                <span className="text-[#c9a962]"> Event Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For over two decades, Renaissance Events has been the trusted partner 
                for global brands, Fortune 500 companies, and visionary leaders seeking 
                to create moments that transcend the ordinary.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From intimate executive gatherings to large-scale productions reaching 
                thousands, we bring unparalleled expertise, creativity, and precision 
                to every detail.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-[#0a1628] hover:text-[#c9a962] transition-colors duration-300 font-medium tracking-wide"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll"
            >
              <div className="image-zoom-container relative">
                <img
                  src="/images/2.jpeg"
                  alt="Professional stage production"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#c9a962]/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Highlights */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll space-y-8"
            >
              <div className="w-16 h-px bg-[#c9a962]" />
              <p className="text-[#c9a962] uppercase tracking-[0.35em] text-sm">
                Our Signature Approach
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
                Crafted for emotion,
                <br />
                delivered with precision.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Every experience is designed to connect your message with your audience, combining bold creativity, seamless logistics, and unforgettable detail.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Purpose-led concepts',
                  'Immersive production',
                  'Global expertise',
                  'Meaningful outcomes',
                ].map((item) => (
                  <div key={item} className="rounded-sm border border-gray-200 p-6">
                    <p className="text-sm text-[#c9a962] uppercase tracking-[0.35em] mb-3">{item}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item === 'Purpose-led concepts'
                        ? 'We start with a powerful idea that reflects your goals and your audience.'
                        : item === 'Immersive production'
                        ? 'Every detail is choreographed to create memorable, high-impact moments.'
                        : item === 'Global expertise'
                        ? 'Our team delivers exceptional events across continents and cultures.'
                        : 'The result is an experience that feels personal, polished, and purposeful.'}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll grid grid-cols-2 gap-4"
            >
              {['4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'].map((name, index) => (
                <div key={name} className="overflow-hidden rounded-sm bg-gray-100">
                  <img
                    src={`/images/${name}`}
                    alt={`Event highlight ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="w-16 h-px bg-[#c9a962] mx-auto mb-8" />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] mb-6">
              Curated Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into our portfolio of transformative experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="reveal-on-scroll group cursor-pointer"
              >
                <Link to="/portfolio">
                  <div className="image-zoom-container relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
                        {project.category}
                      </p>
                      <h3 className="font-serif text-2xl text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              to="/portfolio"
              className="btn-luxury inline-flex items-center gap-3 bg-[#0a1628] hover:bg-[#152238] text-white px-8 lg:px-10 py-4 text-sm tracking-widest uppercase font-medium"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/3.jpeg)' }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Star className="w-10 h-10 text-[#c9a962] mx-auto" />
            <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight">
              Ready to Create
              <br />
              <span className="text-[#c9a962]">Something Extraordinary?</span>
            </h2>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with precision, 
              creativity, and unmatched expertise.
            </p>
            <Link
              to="/contact"
              className="btn-luxury inline-flex items-center gap-3 bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] px-10 lg:px-12 py-5 text-sm tracking-widest uppercase font-medium"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
