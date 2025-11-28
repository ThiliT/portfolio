import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';
import Background from './components/_3d/Background';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen text-white">
      <Background/>

      <Navigation />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </>
            }
          />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}
