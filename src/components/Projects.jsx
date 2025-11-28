import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group rounded-xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="text-lg font-semibold group-hover:text-brand-400">{p.title}</div>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
