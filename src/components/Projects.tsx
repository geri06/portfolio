import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserFrame } from './BrowserFrame';
import { PROJECTS } from '../data';
import { ExternalLink, Github, PlayCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const getLinkIcon = (text: string) => {
  if (text === 'GitHub') return <Github className="w-4 h-4" />;
  if (text === 'Video') return <PlayCircle className="w-4 h-4" />;
  if (text === 'Paper' || text === 'Publication') return <FileText className="w-4 h-4" />;
  return <ExternalLink className="w-4 h-4" />;
};

const ProjectCarousel = ({ images }: { images: { url: string; text: string; title?: string }[] }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full">
      {/* Browser Frame with Image Container */}
      <BrowserFrame title={`~/robotics-vlm`}>
        <div className="relative w-full h-full min-h-[400px] bg-[#f5f5f7] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={`${import.meta.env.BASE_URL}${images[current].url.replace(/^\//, '')}`}
              alt={`Project visualization ${current + 1}`}
              className="absolute inset-0 w-full h-full object-contain p-4"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </AnimatePresence>

          {/* Prev / Next Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-md transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-[#1d1d1f]" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-md transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-[#1d1d1f]" />
          </button>
        </div>
      </BrowserFrame>

      {/* Caption Outside the BrowserFrame */}
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
          {images[current].title && (
            <h3 className="text-2xl font-bold text-[#1d1d1f]" style={{ marginBottom: '0.5rem' }}>
              {images[current].title}
            </h3>
          )}
          <p className="text-lg text-[#6e6e73] text-center" style={{ lineHeight: 1.7 }}>
            {images[current].text}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-2" style={{ marginTop: '1.5rem' }}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-[#0071e3] scale-125' : 'bg-[#d2d2d7] hover:bg-[#86868b]'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="px-8 md:px-16" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-container flex flex-col items-center">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f]" style={{ marginBottom: '1.5rem' }}>Featured Projects</h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">These are some of the most relevant projects I've worked on.</p>
          </motion.div>
        </div>

        <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '7rem' }}>
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center w-full"
              style={{ gap: '2rem' }}
            >
              {/* Text Content */}
              <div className="text-center" style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1d1d1f]" style={{ marginBottom: '1rem' }}>{project.title}</h3>
                <h4 className="text-lg text-[#86868b]" style={{ marginBottom: '2rem' }}>{project.subtitle}</h4>
                <p className="text-lg text-[#6e6e73] font-light text-justify" style={{ lineHeight: 2.1, marginBottom: '2.5rem' }}>{project.description}</p>

                <div className="flex flex-wrap justify-center gap-3" style={{ marginBottom: '2rem' }}>
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-[#f5f5f7] border border-[rgba(0,0,0,0.06)] text-[#1d1d1f]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-6">
                  {project.links.map((link: any, i: number) => (
                    <a key={i} href={link.url} className="inline-flex items-center gap-2 text-sm font-medium text-[#0071e3] hover:text-[#0077ED] transition-colors">
                      {getLinkIcon(link.text)}
                      <span>{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Browser Frame or Custom Carousel */}
              <div className="w-full max-w-4xl mx-auto">
                {project.images ? (
                  <ProjectCarousel images={project.images} />
                ) : (
                  <BrowserFrame title={`~/${project.title.toLowerCase().replace(/ /g, '-')}`}>
                    {project.video ? (
                      <iframe
                        src={project.video}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full border-0"
                        style={{ aspectRatio: '16/9' }}
                      />
                    ) : (
                      <div className="w-full h-full min-h-[350px] flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] relative group">
                        <PlayCircle className="w-14 h-14 text-[#c7c7cc] group-hover:text-[#0071e3] transition-colors mb-4" />
                        <p className="text-[#86868b] font-mono text-sm">Project Demo</p>
                      </div>
                    )}
                  </BrowserFrame>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '5rem', marginBottom: '1rem' }}
        >
          <a
            href="https://github.com/geri06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-medium hover:bg-[#424245] transition-colors shadow-md hover:shadow-lg"
            style={{ fontSize: '1rem' }}
          >
            <span>Load More Projects</span>
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
