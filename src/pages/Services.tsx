import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Building2, Megaphone, Users, Palette, Clapperboard } from 'lucide-react';

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
      title: 'Event Planning & Production',
      description:
        'End-to-end event management from concept to execution. We handle every detail with meticulous precision, ensuring seamless experiences that exceed expectations.',
      longDescription:
        'Our comprehensive event planning and production services encompass everything from initial concept development to final execution. We manage all logistics, coordinate with premium vendors, oversee technical requirements, and ensure flawless on-site delivery. Every element is crafted to create cohesive, memorable experiences.',
      features: [
        'Strategic Event Design',
        'Venue Sourcing & Management',
        'Production & Technical Direction',
        'Vendor Curation & Management',
        'On-Site Coordination',
        'Event Technology Integration',
        'Risk Management & Contingency Planning',
      ],
      image: '/images/1.jpeg',
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description:
        'Transform corporate gatherings into memorable experiences. From executive retreats to company-wide celebrations, we create environments that inspire and engage.',
      longDescription:
        'We specialize in creating corporate experiences that strengthen relationships, celebrate achievements, and communicate brand values. From intimate executive retreats to large-scale conferences, we design events that foster connection and drive business objectives forward.',
      features: [
        'Executive Summits & Retreats',
        'Annual Meetings & Conferences',
        'Product Launches & Reveals',
        'Award Ceremonies & Galas',
        'Team Building Experiences',
        'Incentive Travel Programs',
        'Corporate Social Responsibility Events',
      ],
      image: '/images/2.jpeg',
    },
    {
      icon: Megaphone,
      title: 'Brand Activations',
      description:
        'Bring your brand to life through immersive experiences. We create interactive environments that forge emotional connections and drive meaningful engagement.',
      longDescription:
        'Transform brand narratives into tangible, interactive experiences that captivate audiences and create lasting impressions. Our activation strategies leverage innovative technology, creative design, and strategic storytelling to amplify brand presence and consumer engagement.',
      features: [
        'Experiential Marketing Campaigns',
        'Pop-Up Experiences & Installations',
        'Product Demonstrations & Launches',
        'Influencer & Media Events',
        'Brand Storytelling Experiences',
        'Immersive Brand Installations',
        'Consumer Engagement Activations',
      ],
      image: '/images/3.jpeg',
    },
    {
      icon: Users,
      title: 'Large-Scale Events',
      description:
        'Orchestrate complex productions with thousands of attendees. Our expertise in logistics and crowd management ensures flawless execution at any scale.',
      longDescription:
        'We possess the infrastructure, expertise, and network to execute large-scale events with thousands of attendees across multiple venues and time zones. Our team specializes in complex logistics, crowd management, real-time coordination, and delivering exceptional experiences at unprecedented scale.',
      features: [
        'Conferences & Conventions (1000+)',
        'Music Festivals & Concerts',
        'Sporting Events & Competitions',
        'Public Celebrations & Ceremonies',
        'Multi-Venue Productions',
        'Live Streaming & Hybrid Events',
        'Global Event Coordination',
      ],
      image: '/images/4.jpeg',
    },
  ];

  const process = [
    {
      icon: Palette,
      step: '01',
      title: 'Discovery',
      description:
        'We begin by understanding your vision, objectives, and audience. Through collaborative workshops, we define the essence of your event.',
    },
    {
      icon: Sparkles,
      step: '02',
      title: 'Design',
      description:
        'Our creative team crafts a comprehensive concept, blending aesthetics with functionality to create an experience that resonates.',
    },
    {
      icon: Building2,
      step: '03',
      title: 'Development',
      description:
        'We transform vision into reality through meticulous planning, vendor partnerships, and technical preparation.',
    },
    {
      icon: Clapperboard,
      step: '04',
      title: 'Execution',
      description:
        'On event day, our team orchestrates every moment with precision, ensuring a seamless experience for all attendees.',
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/5.jpeg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/70 to-[#0a1628]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">
            What We Do
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-white leading-tight mb-8">
            Services Designed
            <br />
            <span className="text-[#c9a962]">For Excellence</span>
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive event solutions tailored to your unique vision 
            and objectives.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-[#eff6ff]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`reveal-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="image-zoom-container relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] lg:h-[600px] object-cover"
                    />
                    <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#c9a962]/10 -z-10" />
                  </div>
                </div>

                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#c9a962]" />
                  </div>
                  <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-4 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#c9a962] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven methodology that transforms vision into extraordinary reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="reveal-on-scroll relative group"
              >
                <div className="bg-[#fff1f2] p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-500 h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#c9a962]" />
                    </div>
                    <span className="font-serif text-4xl font-medium text-[#c9a962]/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#0a1628] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-[#c9a962]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 lg:py-32 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/9.jpeg)' }}
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll space-y-8"
            >
              <div className="w-16 h-px bg-[#c9a962]" />
              <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight">
                Why Choose
                <span className="text-[#c9a962]"> Renaissance</span>
              </h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  We don't just plan events—we craft experiences that become 
                  part of your organization's story. Our team brings together 
                  creative visionaries, logistical experts, and technical 
                  specialists who share one goal: your success.
                </p>
                <p>
                  With a global network of trusted partners and an unwavering 
                  commitment to excellence, we deliver experiences that not 
                  only meet expectations but redefine them.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="font-serif text-3xl text-[#c9a962]">100%</p>
                  <p className="text-white/60 text-sm">Client Satisfaction</p>
                </div>
                <div className="space-y-2">
                  <p className="font-serif text-3xl text-[#c9a962]">0</p>
                  <p className="text-white/60 text-sm">Compromises</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll"
            >
              <div className="image-zoom-container">
                <img
                  src="/images/6.jpeg"
                  alt="Brand activation event"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#fef2f2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
              Ready to Elevate
              <br />
              <span className="text-[#c9a962]">Your Next Event?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our expertise can transform your vision into 
              an unforgettable experience.
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
