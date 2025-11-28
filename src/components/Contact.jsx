// export default function Contact() {
//   return (
//     <section id="contact" className="relative py-24 px-6 scroll-mt-16">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold">Contact</h2>
//         <p className="mt-4 text-white/80">Get in touch via email or social links.</p>
//         <a href="mailto:you@example.com" className="inline-block mt-6 px-5 py-2 rounded bg-brand-500 hover:bg-brand-400">Email Me</a>
//       </div>
//     </section>
//   );
// }
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-white/80">
          Get in touch via email or phone.
        </p>

        <div className="mt-6 space-y-4 text-white/80">
          <div className="flex items-center gap-3">
            <FaPhone className="text-brand-400 text-lg" />
            <span>+94 71 556 2360</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-brand-400 text-lg" />
            <span>thilinitharushika.21@cse.mrt.ac.lk</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-brand-400 text-lg" />
            <span>688/C/6, Heiyanthuduwa, Kelaniya</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="mailto:thilinitharushika.21@cse.mrt.ac.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded bg-transparent hover:bg-white/10 border border-brand-50 hover:border-brand-400"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ThiliT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-400 text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/thilini-tharushika/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-400 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
