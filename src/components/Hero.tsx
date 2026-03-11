import { motion } from 'framer-motion';
import { PARAGRAPHS } from '../data';

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-8 lg:px-24 relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center text-center z-10 section-container" style={{ maxWidth: '56rem' }}
      >
        {/* Profile Photo */}
        <div className="relative group" style={{ marginBottom: '2.5rem' }}>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Gerard Gómez Izquierdo"
            className="relative rounded-full object-cover border-4 border-white shadow-xl"
            style={{ width: '14rem', height: '14rem', objectPosition: '50% 1%' }}
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f]" style={{ marginBottom: '2rem' }}>
          Gerard Gómez Izquierdo
        </h1>

        {/* Subtitle — large gap before About panel */}
        <h2 className="text-xl md:text-2xl text-[#86868b] font-medium tracking-tight" style={{ marginBottom: '3rem' }}>
          AI Graduate at UPC <span className="text-[#d2d2d7] mx-2">|</span> Exchange Student at EPFL
        </h2>

        {/* About Panel */}
        <div className="bg-[#f5f5f7] rounded-3xl text-left w-full shadow-sm" style={{ padding: '2rem' }}>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-[#86868b]" style={{ marginBottom: '2rem' }}>About Me</h3>
          {PARAGRAPHS.map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (idx * 0.1), duration: 0.8 }}
              className="text-[#1d1d1f] text-lg md:text-xl font-light text-justify"
              style={{ lineHeight: 2, marginBottom: '0rem' }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
