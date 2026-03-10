import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="px-8 md:px-16 bg-[#f5f5f7]" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="section-container flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#1d1d1f]" style={{ marginBottom: '1.5rem' }}>Let's Connect</h2>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto" style={{ marginBottom: '3rem', lineHeight: 1.9 }}>
          I'm actively looking for opportunities at the intersection of AI and business. Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-6" style={{ marginBottom: '3rem' }}>
          <a
            href="mailto:gerard.gomezizquierdo@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] shadow-sm hover:shadow-md transition-all text-[#1d1d1f] group"
          >
            <Mail className="w-5 h-5 text-[#0071e3] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">gerard.gomezizquierdo@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gerard-gómez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] shadow-sm hover:shadow-md transition-all text-[#1d1d1f] group"
          >
            <Linkedin className="w-5 h-5 text-[#0071e3] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/geri06"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-[rgba(0,0,0,0.08)] shadow-sm hover:shadow-md transition-all text-[#1d1d1f] group"
          >
            <Github className="w-5 h-5 text-[#0071e3] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#86868b]" style={{ marginBottom: '3rem' }}>
          <MapPin className="w-4 h-4" />
          <span>Barcelona, Spain · Open to relocation</span>
        </div>

        <div className="w-full border-t border-[rgba(0,0,0,0.06)]" style={{ paddingTop: '2rem' }}>
          <p className="text-xs text-[#86868b]">
            © {new Date().getFullYear()} Gerard Gómez Izquierdo. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
