import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Layers, Compass } from 'lucide-react';

const galleryImages = [
  '9-new.jpg',
  '10.jpg',
  '10-1.jpg',
  '11.jpg',
  '11-1.jpg',
  '12.jpg',
  '12-1.jpg',
  '12-2.jpg',
  '13.jpg',
  '13-1.jpg',
  '14.jpg',
  '15.jpg',
  '15-1.jpg',
  '16.jpg',
  '17.jpg',
  '17-1.jpg',
];

export default function Gallery() {
  return (
    <main className="overflow-hidden">
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/10-1.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28 lg:pt-32"
        >
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">
            Visual Portfolio
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Gallery of
            <br />
            <span className="text-[#c9a962]">Premium Moments</span>
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover a curated collection of our newest event imagery, crafted spaces, and immersive activations designed to inspire and elevate every brand moment.
          </p>
        </motion.div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: 'Immersive Experiences',
                description:
                  'Scenes that capture the emotion, energy, and unforgettable details of each event.',
              },
              {
                icon: Camera,
                title: 'Signature Imagery',
                description:
                  'Beautifully composed visuals that reflect the premium craft behind every production.',
              },
              {
                icon: Compass,
                title: 'Strategic Storytelling',
                description:
                  'Gallery moments curated to communicate brand purpose, atmosphere, and audience connection.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="reveal-on-scroll rounded-sm border border-gray-200 p-10 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center mb-6 rounded-full">
                  <item.icon className="w-7 h-7 text-[#c9a962]" />
                </div>
                <h2 className="font-serif text-2xl text-[#0a1628] mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="w-16 h-px bg-[#c9a962] mx-auto mb-8" />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] mb-4">
              Gallery Highlights
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              A wide view of premium events, branded activations, elegant gathering spaces, and design-led moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {galleryImages.map((image) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="reveal-on-scroll image-zoom-container overflow-hidden rounded-sm bg-white shadow-sm"
              >
                <img
                  src={`/images/${image}`}
                  alt={`Gallery image ${image}`}
                  className="w-full h-72 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/17.jpg)' }}
          />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight">
              Inspire Your Next Event
            </h2>
            <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Browse our curated visuals to see how premium event storytelling brings every brand activation to life.
            </p>
            <Link
              to="/portfolio"
              className="btn-luxury inline-flex items-center gap-3 bg-[#c9a962] hover:bg-[#d4b978] text-[#0a1628] px-10 lg:px-12 py-5 text-sm tracking-widest uppercase font-medium"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
