import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOFT_SKILLS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SoftSkills = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SOFT_SKILLS.length) % SOFT_SKILLS.length);
  const next = () => setCurrent((c) => (c + 1) % SOFT_SKILLS.length);

  return (
    <section id="soft-skills" className="px-8 md:px-16" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-container flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center w-full" style={{ marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f]" style={{ marginBottom: '1.5rem' }}>Beyond Technical Skills</h2>
            <p className="text-lg text-[#6e6e73] text-justify" style={{ lineHeight: 1.8, maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
              In a world where hard skills alone have lost their edge, the ability to collaborate, communicate, and lead within a team is what truly sets professionals apart.
              This is why I chose to place this section at the top of my profile — because how a person fits into a team matters just as much as their technical abilities.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-3xl bg-[#f5f5f7] shadow-sm" style={{ aspectRatio: '16/10' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={`${import.meta.env.BASE_URL}${SOFT_SKILLS[current].image.replace(/^\//, '')}`}
                alt={SOFT_SKILLS[current].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            {/* Prev / Next Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[#1d1d1f]" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-[#1d1d1f]" />
            </button>
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center"
              style={{ marginTop: '2rem' }}
            >
              <h3 className="text-2xl font-bold text-[#1d1d1f]" style={{ marginBottom: '0.5rem' }}>{SOFT_SKILLS[current].title}</h3>
              <p className="text-lg text-[#6e6e73] text-center" style={{ lineHeight: 1.7 }}>{SOFT_SKILLS[current].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2" style={{ marginTop: '1.5rem' }}>
            {SOFT_SKILLS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'bg-[#0071e3] scale-125' : 'bg-[#d2d2d7] hover:bg-[#86868b]'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
