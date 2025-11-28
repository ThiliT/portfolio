import HeroScene from './_3d/HeroScene';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-center pt-16" id="hero">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Computer Science and Engineer</h1>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-5 py-2 rounded bg-transparent hover:bg-white/10">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded bg-transparent hover:bg-white/10">Contact</a>
          {/* <a href="" className="px-5 py-2 rounded bg-transparent hover:bg-white/10"> Download CV</a> */}
        </div>
      </div>
    </section>
  );
}
