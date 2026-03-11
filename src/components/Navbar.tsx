import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Soft Skills', href: '#soft-skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between px-8 md:px-16 h-16">
        <a href="#about" className="text-lg font-bold text-[#1d1d1f] tracking-tight hover:opacity-70 transition-opacity">
          GGI
        </a>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-[#1d1d1f] text-white hover:bg-[#333] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};
