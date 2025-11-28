export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
        {/* Text Section */}
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4 text-white/80">
            An enthusiastic and dedicated Computer Science undergraduate with a strong interest in full-stack development and emerging technologies. I am adaptable, reliable, and committed to delivering high-quality work in every task I undertake. I enjoy collaborating with diverse teams and continuously expanding my technical knowledge to contribute meaningfully in dynamic work environments.
          </p>
        </div>

        {/* Photo Section */}
        {/* <div className="flex justify-center md:justify-end">
          <img
            src="" // Replace with your photo path
            alt="Profile Photo"
            className="w-48 h-48 rounded-2xl object-cover shadow-xl border border-white/10"
          />
        </div> */}
      </div>
    </section>
  );
}
