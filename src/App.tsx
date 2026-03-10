import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SoftSkills } from './components/SoftSkills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white text-[#1d1d1f] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <SoftSkills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
