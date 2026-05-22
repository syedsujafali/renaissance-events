import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'corporate', label: 'Corporate Events' },
    { id: 'brand', label: 'Brand Activations' },
    { id: 'gala', label: 'Galas & Dinners' },
    { id: 'production', label: 'Large-Scale Production' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Global Tech Summit 2025',
      category: 'corporate',
      location: 'San Francisco, CA',
      attendees: '2,500+',
      image: '/images/5.jpeg',
      description: 'A groundbreaking technology conference bringing together industry pioneers and innovators.',
    },
    {
      id: 2,
      title: 'Luxury Brand Launch',
      category: 'brand',
      location: 'New York, NY',
      attendees: '800+',
      image: '/images/6.jpeg',
      description: 'An exclusive brand reveal experience celebrating heritage and innovation.',
    },
    {
      id: 3,
      title: 'Annual Charity Gala',
      category: 'gala',
      location: 'London, UK',
      attendees: '1,200+',
      image: '/images/7.jpeg',
      description: 'An elegant evening of philanthropy and celebration supporting meaningful causes.',
    },
    {
      id: 4,
      title: 'Music Festival Production',
      category: 'production',
      location: 'Austin, TX',
      attendees: '15,000+',
      image: '/images/8.jpeg',
      description: 'A large-scale music festival spanning three days with multiple stages and experiences.',
    },
    {
      id: 5,
      title: 'Executive Retreat',
      category: 'corporate',
      location: 'Aspen, CO',
      attendees: '150',
      image: '/images/9.jpeg',
      description: 'An intimate executive gathering fostering strategic collaboration and renewal.',
    },
    {
      id: 6,
      title: 'Product Experience Center',
      category: 'brand',
      location: 'Los Angeles, CA',
      attendees: '5,000+',
      image: '/images/1.jpeg',
      description: 'An immersive installation showcasing cutting-edge product features.',
    },
    {
      id: 7,
      title: 'Awards Ceremony',
      category: 'gala',
      location: 'Paris, France',
      attendees: '900+',
      image: '/images/2.jpeg',
      description: 'A prestigious ceremony celebrating industry excellence and achievement.',
    },
    {
      id: 8,
      title: 'Networking Summit',
      category: 'corporate',
      location: 'Chicago, IL',
      attendees: '600+',
      image: '/images/3.jpeg',
      description: 'An engaging summit facilitating meaningful professional connections.',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/hero-main.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/70 to-[#0a1628]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">
            Our Work
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-white leading-tight mb-8">
            Portfolio of
            <br />
            <span className="text-[#c9a962]">Excellence</span>
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            A curated collection of experiences that have defined moments 
            and created lasting impressions.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 lg:py-16 bg-[#fffbeb] border-b border-gray-100 sticky top-20 lg:top-24 z-40">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#0a1628] text-white'
                    : 'text-gray-600 hover:text-[#0a1628]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-[#fdf4ff]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="reveal-on-scroll group cursor-pointer"
              >
                <div className="image-zoom-container relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] lg:h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
                        {filters.find((f) => f.id === project.category)?.label}
                      </p>
                      <h3 className="font-serif text-2xl text-white mb-3">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span>{project.location}</span>
                        <span className="w-1 h-1 bg-[#bfdbfe] rounded-full" />
                        <span>{project.attendees} Attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Project Detail */}
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
              Featured Experience
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          >
            <div className="image-zoom-container">
              <img
                src="/images/conference-summit.jpg"
                alt="Featured project"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>

            <div className="space-y-8 lg:py-10">
              <div>
                <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-4">
                  Corporate Events
                </p>
                <h3 className="font-serif text-4xl text-[#0a1628] mb-6">
                  Global Innovation Summit
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  A three-day immersive experience bringing together industry 
                  leaders, innovators, and visionaries from across the globe. 
                  The event featured keynote presentations, interactive workshops, 
                  and networking experiences designed to foster collaboration 
                  and spark innovation.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-serif text-3xl text-[#0a1628]">3,500+</p>
                    <p className="text-gray-500 text-sm">Attendees</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#0a1628]">50+</p>
                    <p className="text-gray-500 text-sm">Speakers</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#0a1628]">3</p>
                    <p className="text-gray-500 text-sm">Days</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#0a1628]">12</p>
                    <p className="text-gray-500 text-sm">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/outdoor-event.jpg)' }}
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
            <h2 className="font-serif text-4xl lg:text-6xl font-medium leading-tight">
              Ready to Create
              <br />
              <span className="text-[#c9a962]">Your Legacy?</span>
            </h2>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life with the same 
              excellence you see in our portfolio.
            </p>
            <a
              href="/contact"
              className="btn-luxury inline-flex items-center gap-3 bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] px-10 lg:px-12 py-5 text-sm tracking-widest uppercase font-medium"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
