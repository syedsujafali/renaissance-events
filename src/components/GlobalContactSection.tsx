import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GlobalContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-15% 0px -15% 0px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const titleLineVariants = {
    hidden: {
      opacity: 0,
      y: 65,
      rotateX: -35,
      skewX: -6,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      skewX: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const inquireVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative pt-28 pb-44 lg:pt-40 lg:pb-60 bg-renaissance-blue text-white overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left Column: Oversized Editorial Typography */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6 [perspective:1000px]"
            >
              <motion.p
                variants={titleLineVariants}
                className="text-xs uppercase tracking-[0.35em] font-bold text-white/70 font-sans"
              >
                GET IN TOUCH
              </motion.p>
              <h2 className="font-sans font-black uppercase text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] tracking-[0.02em] leading-[0.95] text-white">
                <motion.span variants={titleLineVariants} className="block origin-bottom-left">
                  TELL US ABOUT
                </motion.span>
                <motion.span variants={titleLineVariants} className="block origin-bottom-left">
                  YOUR NEXT ROOM.
                </motion.span>
              </h2>
            </motion.div>

            <motion.div
              variants={inquireVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 pt-10 border-t border-white/20 font-sans"
            >
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/70 mb-2">
                INQUIRE
              </p>
              <a
                href="mailto:info@renaissanceevents.com"
                className="block font-sans font-bold text-xl lg:text-2xl text-white hover:text-white/80 transition-colors"
              >
                info@renaissanceevents.com
              </a>
              <a
                href="mailto:info@specialeventschannel.com"
                className="block font-sans font-bold text-xl lg:text-2xl text-white hover:text-white/80 transition-colors"
              >
                info@specialeventschannel.com
              </a>
            </motion.div>
          </div>

          {/* Right Column: Card Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 pt-4 lg:pt-0"
          >
            <div className="bg-[#06369c] border border-white/20 rounded-3xl p-10 sm:p-14 shadow-2xl backdrop-blur-sm min-h-[560px] flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-10 font-sans h-full flex flex-col justify-between">
                <div className="space-y-10">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/90 font-bold">
                        NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-transparent border-b border-white/40 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-3 text-base font-normal transition-colors"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/90 font-bold">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@company.com"
                        className="w-full bg-transparent border-b border-white/40 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-3 text-base font-normal transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company / Organization */}
                  <div className="space-y-3">
                    <label htmlFor="company" className="block text-xs uppercase tracking-widest text-white/90 font-bold">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="w-full bg-transparent border-b border-white/40 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-3 text-base font-normal transition-colors"
                    />
                  </div>

                  {/* How Can We Help */}
                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/90 font-bold">
                      HOW CAN WE HELP?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your event, timeline, and aspirations..."
                      className="w-full bg-transparent border-b border-white/40 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-3 text-base font-normal resize-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Row */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-white/70 text-[11px] max-w-[220px] leading-relaxed font-sans">
                    By submitting, you agree to be contacted regarding your inquiry. We respect your privacy.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 border-2 border-white rounded-full bg-transparent text-white hover:bg-white hover:text-[#06369c] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shrink-0 group"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#06369c] transition-colors" />
                  </button>
                </div>

                {submitSuccess && (
                  <div className="p-4 bg-white/10 border border-white/20 text-white rounded-xl flex items-center gap-3 text-sm font-sans font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Thank you. Your message has been sent successfully.</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
