import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building2, Megaphone, Users } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: Sparkles,
      title: 'Event Planning and Production',
      description:
        'End-to-end event management from concept to execution. We handle every detail with meticulous precision, ensuring seamless experiences that exceed expectations.',
      features: [
        'Strategic Event Design',
        'Venue Sourcing & Management',
        'Production & Technical Direction',
        'Vendor Curation & Management',
        'On-Site Coordination',
        'Event Technology Integration',
        'Risk Management & Contingency Planning',
      ],
      image: '/images/clemente.png',
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description:
        'Transform corporate gatherings into memorable experiences. From executive retreats to company-wide celebrations, we create environments that inspire and engage.',
      features: [
        'Executive Summits & Retreats',
        'Annual Meetings & Conferences',
        'Product Launches & Reveals',
        'Award Ceremonies & Galas',
        'Team Building Experiences',
        'Incentive Travel Programs',
        'Corporate Social Responsibility Events',
      ],
      image: '/images/almanac1.jpeg',
    },
    {
      icon: Megaphone,
      title: 'Brand Activations',
      description:
        'Bring your brand to life through immersive experiences. We create interactive environments that forge emotional connections and drive meaningful engagement.',
      features: [
        'Experiential Marketing Campaigns',
        'Pop-Up Experiences & Installations',
        'Product Demonstrations & Launches',
        'Influencer & Media Events',
        'Brand Storytelling Experiences',
        'Immersive Brand Installations',
        'Consumer Engagement Activations',
      ],
      image: '/images/clemente-marquee.png',
    },
    {
      icon: Users,
      title: 'Large-Scale Events',
      description:
        'Orchestrate complex productions with thousands of attendees. Our expertise in logistics and crowd management ensures flawless execution at any scale.',
      features: [
        'Conferences & Conventions (1000+)',
        'Music Festivals & Concerts',
        'Sporting Events & Competitions',
        'Public Celebrations & Ceremonies',
        'Multi-Venue Productions',
        'Live Streaming & Hybrid Events',
        'Global Event Coordination',
      ],
      image: '/images/nba2.jpeg',
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#06369c]">
      {services.map((service, index) => {
        const isFirst = index === 0;

        return (
          <section
            key={service.title}
            className={`relative bg-white text-[#06369c] ${isFirst
              ? 'pt-44 pb-24 sm:pt-52 lg:pt-60 lg:pb-32'
              : 'py-24 lg:py-32'
              }`}
          >
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`reveal-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image Frame */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="image-zoom-container relative overflow-hidden rounded-2xl border border-[#06369c]/10 shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[16/10] sm:h-[450px] lg:h-[500px] object-cover object-center"
                    />
                  </div>
                </div>

                {/* Content Box */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#06369c] text-white shadow-md">
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight text-[#06369c]">
                    {service.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-[#06369c]/80">
                    {service.description}
                  </p>

                  <ul className="space-y-3.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3.5 text-[#06369c]">
                        <div className="w-2 h-2 rounded-full bg-[#06369c]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
      {/* Bottom Separator Line before Footer */}
      <div className="border-t-2 border-[#06369c] max-w-[2000px] mx-auto px-6 sm:px-10 lg:px-16 my-8" />
    </main>
  );
}
