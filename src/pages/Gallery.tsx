import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Compass } from 'lucide-react';

const galleryImages = [
  { file: 'clemente.png', title: 'Roberto Clemente Foundation Gala Ballroom' },
  { file: 'clemente-marquee.png', title: '50th Anniversary Marquee Activation' },
  { file: 'nba3.jpeg', title: 'NBA 97th Annual Convention Stage' },
  { file: 'almanac1.jpeg', title: 'Almanac Realty Investors Plenary' },
  { file: 'clemente1.jpeg', title: 'Clemente Foundation Keynote Address' },
  { file: 'nba2.jpeg', title: 'NBA Convention & Exhibits Entrance' },
  { file: 'clemente2.jpeg', title: 'Gala VIP Banquet Table Setting' },
  { file: 'clemente3.jpeg', title: 'Gala Stage & Dais Production' },
  { file: 'nba1.jpeg', title: 'NBA Executive Head Table' },
  { file: 'nba4.jpeg', title: 'Luxe Confectionery & Dessert Bar' },
  { file: 'nba5.jpeg', title: 'Lordina Foundation Plated Dessert' },
  { file: 'almanac.jpeg', title: 'Almanac Investor Hospitality Suite' },
  { file: 'a.jpeg', title: 'VIP Silent Auction Showcase' },
  { file: 'b.jpeg', title: 'Historic Ballroom Dining & Dais' },
  { file: 'c.jpeg', title: 'Judicial Friends Step & Repeat' },
  { file: 'd.jpeg', title: 'Executive Registration Concourse' },
];

export default function Gallery() {
  return (
    <main className="overflow-hidden">
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-[#06369c]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/clemente.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06369c]/70 via-[#06369c]/50 to-[#06369c]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-28 lg:pt-32"
        >
          <p className="text-white/80 text-sm tracking-widest uppercase mb-6">
            Visual Portfolio
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            Gallery of
            <br />
            <span className="text-white">Premium Moments</span>
          </h1>
          <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover a curated collection of our newest event imagery, crafted spaces, and immersive activations designed to inspire and elevate every brand moment.
          </p>
        </motion.div>
      </section>

      <section className="relative py-24 lg:py-32 bg-white">
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
                className="reveal-on-scroll rounded-sm border border-[#06369c]/20 p-10 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#06369c] flex items-center justify-center mb-6 rounded-full">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-serif text-2xl text-[#06369c] mb-4">
                  {item.title}
                </h2>
                <p className="text-[#06369c]/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-[#06369c] text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="w-16 h-px bg-white mx-auto mb-8" />
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white mb-4">
              Gallery Highlights
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              A wide view of premium events, branded activations, elegant gathering spaces, and design-led moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {galleryImages.map((image) => (
              <motion.div
                key={image.file}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="reveal-on-scroll image-zoom-container overflow-hidden rounded-sm bg-white/10 border border-white/20 shadow-sm group relative"
              >
                <img
                  src={`/images/${image.file}`}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs tracking-wider uppercase font-medium line-clamp-1">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-[#06369c] border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/nba3.jpeg)' }}
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
            <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Browse our curated visuals to see how premium event storytelling brings every brand activation to life.
            </p>
            <Link
              to="/portfolio"
              className="btn-luxury inline-flex items-center gap-3 bg-white hover:bg-white/90 text-[#06369c] px-10 lg:px-12 py-5 text-sm tracking-widest uppercase font-semibold"
            >
              View Full Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
