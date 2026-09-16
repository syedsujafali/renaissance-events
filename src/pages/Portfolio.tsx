import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
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

  const projects = [
    {
      id: 2,
      title: '97th Annual Convention Stage',
      category: 'Convention & Production',
      location: 'Memphis, TN',
      image: '/images/portfolio-2.jpg',
      description: 'Broadcast-quality stage design, red drape backdrops, and technical direction for the National Bar Association.',
    },
    {
      id: 5,
      title: 'Corporate Leadership Forum',
      category: 'Corporate Summit',
      location: 'Grand Conference Center',
      image: '/images/portfolio-5.jpg',
      description: 'Full-service conference staging, boardroom layout, and AV integration under crystal chandeliers.',
    },
    {
      id: 6,
      title: 'National Bar Association Convention Stage',
      category: 'Stage Production',
      location: 'Memphis, TN',
      image: '/images/portfolio-6.jpg',
      description: 'Stage design with custom red drape backdrops and technical lighting.',
    },
    {
      id: 7,
      title: 'Roberto Clemente Foundation Annual Gala',
      category: 'Annual Gala & Production',
      location: 'Convention Center Ballroom',
      image: '/images/portfolio-10.jpg',
      description: 'Dual projection staging, round table banquet setup, and warm ambient lighting for the 2023 Annual Gala.',
    },
    {
      id: 8,
      title: 'Luxe Banquet & Dining Room',
      category: 'Galas & Dinners',
      location: 'Executive Suite',
      image: '/images/portfolio-8.jpg',
      description: 'Curated floral arrangements, gold drapery, and high-end dining ambiance.',
    },
    {
      id: 9,
      title: 'Boardroom Staging & Conference Setup',
      category: 'Executive Meetings',
      location: 'Corporate HQ',
      image: '/images/portfolio-9.jpg',
      description: 'Custom U-shaped boardroom conference table configuration under grand chandelier lighting.',
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#06369c] min-h-screen">
      {/* Simple Header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#06369c]">
            PORTFOLIO
          </h1>
        </motion.div>
      </section>

      {/* Editorial Gallery Grid */}
      <section className="relative pb-28 lg:pb-36 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1650px] 3xl:max-w-[1900px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16">
            {projects.map((project, index) => {
              const itemNumber = (index + 1).toString().padStart(2, '0');

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                  className="reveal-on-scroll group flex flex-col"
                >
                  {/* Image Container */}
                  <div className="overflow-hidden bg-gray-100 mb-5 rounded-lg border border-[#06369c]/10 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[320px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[540px] 2xl:h-[600px] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Text Details below image */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#06369c] tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-sans text-xs sm:text-sm font-medium text-[#06369c]/50">
                      {itemNumber}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#06369c]/70">
                    {project.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Bottom Separator Line before Footer */}
      <div className="border-t-2 border-[#06369c] max-w-[2000px] mx-auto px-6 sm:px-10 lg:px-16 my-8" />
    </main>
  );
}
