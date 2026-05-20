import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [isHuman, setIsHuman] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHumanVerification = () => {
    setIsHuman(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam protection: check honeypot
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    // Spam protection: check human verification
    if (!isHuman) {
      setSubmitStatus('error');
      return;
    }

    // Spam protection: message length check
    if (formData.message.length < 20) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
      setIsHuman(false);
    }, 1500);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#0a1628]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/gala-dinner.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/70 to-[#0a1628]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-white leading-tight mb-8">
            Let's Create
            <br />
            <span className="text-[#c9a962]">Together</span>
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We're here to help you 
            create something extraordinary.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-[#ecfdf5]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll space-y-12"
            >
              <div className="space-y-6">
                <div className="w-16 h-px bg-[#c9a962]" />
                <h2 className="font-serif text-4xl lg:text-5xl font-medium text-[#0a1628] leading-tight">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're selective about the projects we take on to ensure 
                  we deliver the highest level of service to each client. 
                  Let's discuss how we can work together.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#0a1628] mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@renaissanceevents.com"
                      className="text-gray-600 hover:text-[#0a1628] transition-colors duration-300 text-lg"
                    >
                      info@renaissanceevents.com
                    </a>
                    <p className="text-gray-500 text-sm mt-2">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#0a1628] mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday, 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#0a1628] mb-2">
                      Confidentiality
                    </h3>
                    <p className="text-gray-600">
                      All inquiries are treated with complete confidentiality
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f9fa] p-8 rounded-sm">
                <h3 className="font-serif text-xl text-[#0a1628] mb-4">
                  What to Include
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full" />
                    Event type and objectives
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full" />
                    Expected timeline
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full" />
                    Estimated guest count
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full" />
                    Budget range (optional)
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="reveal-on-scroll"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-widest uppercase text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-[#f8f9fa] border border-gray-200 focus:border-[#0a1628] focus:outline-none transition-colors duration-300 text-gray-800"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-widest uppercase text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-[#f8f9fa] border border-gray-200 focus:border-[#0a1628] focus:outline-none transition-colors duration-300 text-gray-800"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-widest uppercase text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    minLength={20}
                    className="w-full px-6 py-4 bg-[#f8f9fa] border border-gray-200 focus:border-[#0a1628] focus:outline-none transition-colors duration-300 text-gray-800 resize-none"
                    placeholder="Tell us about your event vision..."
                  />
                  <p className="text-gray-500 text-xs mt-2">
                    Minimum 20 characters
                  </p>
                </div>

                {/* Honeypot field (hidden from users) */}
                <div className="hidden">
                  <label htmlFor="honeypot">Don't fill this out</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Human Verification */}
                <div className="bg-[#f8f9fa] p-6 rounded-sm">
                  <p className="text-sm text-gray-700 mb-4">
                    Security Verification *
                  </p>
                  {!isHuman ? (
                    <button
                      type="button"
                      onClick={handleHumanVerification}
                      className="w-full py-4 bg-[#ecfeff] border border-gray-300 hover:border-[#0a1628] transition-colors duration-300 text-gray-700 flex items-center justify-center gap-3"
                    >
                      <Shield className="w-5 h-5" />
                      <span>I am human - Click to verify</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 text-green-700">
                      <Shield className="w-5 h-5" />
                      <span>Verified as human</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isHuman}
                  className="btn-luxury w-full bg-[#0a1628] hover:bg-[#152238] disabled:bg-gray-400 text-white px-8 py-5 text-sm tracking-widest uppercase font-medium transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4">
                    Thank you for your message. We'll be in touch within 24-48 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4">
                    Please complete all required fields and verify you are human.
                  </div>
                )}
              </form>
            </motion.div>
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
              Prefer to Email Directly?
            </h2>
            <a
              href="mailto:info@renaissanceevents.com"
              className="inline-flex items-center gap-3 text-[#0a1628] hover:text-[#c9a962] transition-colors duration-300 text-2xl lg:text-3xl font-serif"
            >
              <Mail className="w-6 h-6" />
              info@renaissanceevents.com
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
