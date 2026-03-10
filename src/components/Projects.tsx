import { motion } from 'framer-motion';
import { BrowserFrame } from './BrowserFrame';
import { PROJECTS } from '../data';
import { ExternalLink, Github, PlayCircle, FileText } from 'lucide-react';

const getLinkIcon = (text: string) => {
  if (text === 'GitHub') return <Github className="w-4 h-4" />;
  if (text === 'Video') return <PlayCircle className="w-4 h-4" />;
  if (text === 'Paper' || text === 'Publication') return <FileText className="w-4 h-4" />;
  return <ExternalLink className="w-4 h-4" />;
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
              style={{ gap: '4rem' }}
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

              {/* Browser Frame */}
              <div className="w-full max-w-4xl mx-auto">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
