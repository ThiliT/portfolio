import SkillsScene from './_3d/SkillsScene';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-white/5 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>
      <div className="mt-8 h-[320px]">
        <SkillsScene />
      </div>
    </section>
  );
}
