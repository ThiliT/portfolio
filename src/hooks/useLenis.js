import { useCallback, useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      if (lenisRef.current && typeof lenisRef.current.destroy === 'function') {
        lenisRef.current.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((selectorOrEl, offset = 0) => {
    const lenis = lenisRef.current;
    const targetEl =
      typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl;
    if (!targetEl) return;
    const y = targetEl.getBoundingClientRect().top + window.scrollY - offset;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(y);
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return { scrollTo };
}
