import { Link } from 'react-router-dom';
import { useLenis } from '../hooks/useLenis';

export default function Navigation() {
  const { scrollTo } = useLenis();
  const headerOffset = 64; // h-16
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">My Portfolio</Link>
        <div className="hidden md:flex gap-6 text-sm">
          <button onClick={() => scrollTo('#about', headerOffset)} className="hover:text-brand-400">About</button>
          <button onClick={() => scrollTo('#skills', headerOffset)} className="hover:text-brand-400">Skills</button>
          <button onClick={() => scrollTo('#projects', headerOffset)} className="hover:text-brand-400">Projects</button>
          <button onClick={() => scrollTo('#experience', headerOffset)} className="hover:text-brand-400">Experience</button>
          <button onClick={() => scrollTo('#contact', headerOffset)} className="hover:text-brand-400">Contact</button>
        </div>
      </nav>
    </header>
  );
}
