import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-white/5 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <a
              key={idx}
              href={exp.link}
              className="group rounded-xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              {exp.src && (
                <img
                  src={exp.src}
                  alt={exp.title}
                  className="w-full h-48 object-cover  mb-4"
                />
              )}
              <div className="text-lg font-semibold group-hover:text-brand-400">{exp.title}</div>
              {exp.role && <p className="mt-2 text-sm text-white/70">{exp.role}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

