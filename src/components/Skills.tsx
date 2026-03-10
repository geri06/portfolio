import { motion } from 'framer-motion';
import { SKILLS } from '../data';

export const Skills = () => {
  return (
    <section id="skills" className="px-8 md:px-16 bg-[#f5f5f7]" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-container flex flex-col items-center">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f]" style={{ marginBottom: '1.5rem' }}>Technical Skills</h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">Core competencies driving my AI and engineering work</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full" style={{ gap: '2.5rem' }}>
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] hover:shadow-md transition-shadow group"
              style={{ padding: '2.5rem' }}
            >
              <h3 className="text-xl font-semibold text-[#1d1d1f] border-b border-[rgba(0,0,0,0.06)] group-hover:border-[#0071e3]/30 transition-colors" style={{ marginBottom: '2rem', paddingBottom: '1.2rem' }}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap" style={{ gap: '0.8rem' }}>
                {skillGroup.items.map((item: string, i: number) => (
                  <span
                    key={i}
                    className="bg-[#f5f5f7] text-[#1d1d1f] rounded-xl text-sm font-medium border border-[rgba(0,0,0,0.04)] hover:border-[#0071e3]/40 hover:bg-blue-50 transition-all cursor-default"
                    style={{ padding: '0.6rem 1.2rem' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
