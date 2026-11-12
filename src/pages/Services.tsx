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
      title: 'Association, Corporate and Non-Profit Events',
      description:
        'Transform gatherings into memorable experiences. From executive retreats to company-wide celebrations, we create environments that inspire and engage.',
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
      title: 'Exhibitions and Sponsorships',
      description:
        'Bring your brand to life through immersive experiences. We create interactive environments that forge emotional connections and drive meaningful engagement.',
      features: [
        'Research and Strategy ',
        'Pricing and Packages',
        'Sponsor Booths and Fulfillment',
        'Exhibit Sales and Contract Negotiations',
        'Booth Assignments',
        'General Services Contractor and Floor Plan Layout ',
        'On-Site Set-up and Execution (Load-In, Load-Out)',
        'Post-Event Evaluations',
      ],
      image: '/images/nba2.jpeg',
    },
    {
      icon: Users,
      title: 'Large-Scale Events',
      description:
        'Orchestrate complex productions with thousands of attendees. Our expertise in logistics and crowd management ensures flawless execution at any scale.',
      features: [
        'Conferences & Conventions (2000+)',
        'Receptions & After-Parties',
        'Public Celebrations & Ceremonies',
        'Multi-Venue Events',
        'Global Event Management',
        'Vendor Management (AV, Ground Transportation) and more',
      ],
      image: '/images/NBA new.jpeg',
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
              ? 'pt-36 pb-10 sm:pt-44 sm:pb-12 lg:pt-52 lg:pb-14'
              : 'py-10 sm:py-12 lg:py-14'
              }`}
          >
            <div className="max-w-screen-2xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-stretch"
              >
                {/* Image Frame */}
                <div className={`flex ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="image-zoom-container relative w-full h-[320px] sm:h-[420px] lg:h-full lg:min-h-[480px] overflow-hidden rounded-2xl border border-[#06369c]/10 shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Content Box */}
                <div className={`flex flex-col justify-center space-y-6 lg:space-y-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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
      <div className="border-t-2 border-[#06369c] max-w-[2000px] mx-auto px-6 sm:px-10 lg:px-16 my-4" />
    </main>
  );
}
