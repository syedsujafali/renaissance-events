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
                  YOUR NEXT EVENT
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

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
