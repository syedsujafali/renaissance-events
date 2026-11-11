import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: 0.25,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-10 sm:py-12 lg:py-16 bg-renaissance-blue text-white overflow-hidden">
      <div className="max-w-screen-2xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Oversized Editorial Typography */}
          <div className="lg:col-span-6">
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6 sm:space-y-8 [perspective:1000px]"
            >
              <div className="space-y-5">
                <motion.p
                  variants={titleLineVariants}
                  className="text-xs uppercase tracking-[0.35em] font-bold text-white/70 font-sans"
                >
                  GET IN TOUCH
                </motion.p>
                <h2 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[2.15rem] xl:text-[2.75rem] 2xl:text-[3.35rem] leading-[1.3] space-y-2 tracking-tight text-white">
                  <motion.span variants={titleLineVariants} className="block origin-bottom-left lg:whitespace-nowrap">
                    Let’s create something
                  </motion.span>
                  <motion.span variants={titleLineVariants} className="block origin-bottom-left">
                    unforgettable
                  </motion.span>
                </h2>
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="font-serif font-normal text-3xl sm:text-4xl lg:text-[2.05rem] xl:text-[2.6rem] 2xl:text-[3.1rem] leading-[1.3] space-y-2 tracking-tight text-white/95">
                  <motion.span variants={titleLineVariants} className="block origin-bottom-left lg:whitespace-nowrap">
                    Tell Us About
                  </motion.span>
                  <motion.span variants={titleLineVariants} className="block origin-bottom-left lg:whitespace-nowrap">
                    Your Next Event
                  </motion.span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Exact Card Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-6 w-full flex lg:justify-end"
          >
            <div className="w-full max-w-[580px] xl:max-w-[600px] bg-[#06369c]/90 bg-gradient-to-br from-white/[0.06] to-transparent border border-white/20 rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md min-h-[560px] lg:min-h-[580px] flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-8 font-sans flex-1 flex flex-col justify-between">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
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
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-2.5 text-base font-normal transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
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
                      className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-2.5 text-base font-normal transition-colors"
                    />
                  </div>
                </div>

                {/* Company / Organization Row */}
                <div className="space-y-2">
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
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-2.5 text-base font-normal transition-colors"
                  />
                </div>

                {/* How Can We Help Row (Max 2000 characters limit) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/90 font-bold">
                      HOW CAN WE HELP?
                    </label>
                    <span className="text-[11px] text-white/50 tracking-wider">
                      {formData.message.length} / 200
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={200}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your event, timeline, and aspirations..."
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/40 focus:border-white focus:outline-none pb-2.5 text-base font-normal resize-none transition-colors"
                  />
                </div>

                {/* Submit Row */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-white/70 text-[11px] max-w-[260px] leading-relaxed font-sans">
                    By submitting, you agree to be contacted regarding your inquiry. We respect your privacy.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 border-2 border-white rounded-full bg-transparent hover:bg-white text-white hover:text-[#06369c] text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer shrink-0 shadow-lg hover:scale-105 active:scale-95 group"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#06369c] transition-colors" />
                  </button>
                </div>

                {/* Success Message Banner */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-white/10 border border-white/20 text-white rounded-xl flex items-center gap-3 text-sm font-sans font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                      <span>Thank you. Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
