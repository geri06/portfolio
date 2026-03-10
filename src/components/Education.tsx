import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EDUCATION } from '../data';
import { GraduationCap } from 'lucide-react';

const EducationItem = ({ item, index }: { item: any; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-start justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`} ref={ref} style={{ marginBottom: '2rem' }}>
      
      {/* Center Line Marker */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-11 h-11 rounded-full border-4 border-white bg-[#0071e3] z-10 shadow-lg">
        <GraduationCap className="w-4 h-4 text-white" />
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-[44%] bg-[#f5f5f7] rounded-2xl ${isEven ? 'md:mr-auto' : 'md:ml-auto'} hover:shadow-md transition-shadow`}
        style={{ padding: '1.5rem' }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-[#0071e3] block" style={{ marginBottom: '1.2rem' }}>{item.date}</span>
        <h3 className="text-2xl font-bold text-[#1d1d1f]" style={{ marginBottom: '0.6rem' }}>{item.degree}</h3>
        <h4 className="text-lg text-[#86868b]" style={{ marginBottom: '0.5rem' }}>{item.institution}</h4>
        <span className="text-sm font-semibold text-[#0071e3]" style={{ marginBottom: '1rem', display: 'block' }}>Grade: {item.grade}</span>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {item.highlights.map((highlight: string, i: number) => (
            <li key={i} className="text-[#6e6e73] text-sm md:text-base flex items-start gap-3">
              <span className="text-[#0071e3] mt-1.5 shrink-0 text-xs">●</span>
              <span style={{ lineHeight: 1.5 }}>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export const Education = () => {
  return (
    <section id="education" className="px-8 md:px-16 relative" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-container flex flex-col items-center">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f]" style={{ marginBottom: '1rem' }}>Education</h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">Academic foundation in AI and Engineering</p>
          </motion.div>
        </div>

        <div className="relative w-full">
          {/* Vertical tracking line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 h-full w-[2px] bg-gradient-to-b from-[#0071e3] via-[#d2d2d7] to-transparent" />

          <div className="flex flex-col ml-8 md:ml-0 relative z-10 w-full" style={{ paddingTop: '1.5rem' }}>
            {EDUCATION.map((item, index) => (
              <EducationItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
