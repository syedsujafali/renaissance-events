import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Calendar } from 'lucide-react';

export default function About() {
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

  const stats = [
    { icon: Calendar, value: '20+', label: 'Years of Excellence' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Users, value: '500+', label: 'Events Produced' },
    { icon: Award, value: '35+', label: 'Industry Awards' },
  ];

  const team = [
    {
      name: 'Alexandra Sterling',
      role: 'Founder & CEO',
      image: '/images/gala-dinner.jpg',
    },
    {
      name: 'Marcus Chen',
      role: 'Creative Director',
      image: '/images/conference-summit.jpg',
    },
    {
      name: 'Isabella Romano',
      role: 'Head of Production',
      image: '/images/brand-activation.jpg',
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/stage-production.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/70 to-[#0a1628]" />
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">
            Our Story
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-white leading-tight mb-8">
            Crafting Legacy
            <br />
            Through Experience
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Two decades of transforming visions into unforgettable moments 
            that resonate across the globe.
          </p>
        </motion.div>
      </section>

      {/* Editorial Story Section */}
      <section className="py-24 lg:py-32 bg-[#eff6ff]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll space-y-8"
            >
              <div className="w-16 h-px bg-[#c9a962]" />
              <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
                A Legacy of
                <span className="text-[#c9a962]"> Innovation</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2005, Renaissance Events emerged from a simple yet 
                  powerful belief: that every event holds the potential to become 
                  a defining moment—a story that lives on long after the final 
                  curtain falls.
                </p>
                <p>
                  What began as a boutique agency serving discerning clients in 
                  New York has evolved into a global force, orchestrating 
                  experiences across five continents for the world's most 
                  prestigious brands and institutions.
                </p>
                <p>
                  Our name reflects our philosophy: each event is a renaissance—
                  a rebirth of possibility, where creativity meets precision, 
                  and imagination transforms into reality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll"
            >
              <div className="image-zoom-container relative">
                <img
                  src="/images/gala-dinner.jpg"
                  alt="Elegant event setting"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#c9a962]/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-[#c9a962] mx-auto mb-8" />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] mb-6">
              By The Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="reveal-on-scroll text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto bg-[#0a1628] flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#c9a962]" />
                </div>
                <p className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628]">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm tracking-widest uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/conference-summit.jpg)' }}
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll"
            >
              <div className="image-zoom-container">
                <img
                  src="/images/outdoor-event.jpg"
                  alt="Event production"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll space-y-8"
            >
              <div className="w-16 h-px bg-[#c9a962]" />
              <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  We believe that exceptional events are born from the seamless 
                  fusion of artistry and logistics. Every detail matters—from 
                  the ambient lighting to the flow of guest movement, from the 
                  texture of linens to the precision of timing.
                </p>
                <p>
                  Our approach is deeply collaborative. We don't just execute 
                  your vision; we elevate it, challenge it, and bring dimensions 
                  you hadn't imagined possible.
                </p>
                <p>
                  At Renaissance Events, we're not in the business of planning 
                  parties. We're in the business of creating moments that become 
                  part of your organization's legacy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-[#fff1f2]">
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
              Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visionaries who bring decades of expertise to every experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="reveal-on-scroll group"
              >
                <div className="image-zoom-container relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#c9a962] text-sm tracking-widest uppercase">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
              Let's Create Something
              <br />
              <span className="text-[#c9a962]">Remarkable Together</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about 
              your next extraordinary event.
            </p>
            <Link
              to="/contact"
              className="btn-luxury inline-flex items-center gap-3 bg-[#0a1628] hover:bg-[#152238] text-white px-10 lg:px-12 py-5 text-sm tracking-widest uppercase font-medium"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
