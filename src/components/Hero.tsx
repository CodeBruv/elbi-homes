import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroBg}
        alt="Luxury modern home"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Gradient Overlay (better depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Soft Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cream-dark/20 blur-3xl opacity-40" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-white/60 mb-4"
        >
          Premium Living • Birmingham
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
        >
          Live Where <span className="italic font-light">It Matters</span>
          <br />
          Not Just Anywhere
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Carefully selected apartments and lofts designed for modern living
          in the heart of Birmingham.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Viewing
          </a>

          {/* Secondary CTA */}
          <a
            href="#homes"
            className="text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition"
          >
            Browse Homes
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm animate-bounce">
        ↓
      </div>
    </section>
  );
};

export default Hero;