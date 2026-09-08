import { ArrowUpRight, ClipboardCheck, Code2, FilePenLine, Rocket } from "lucide-react";

const steps = [
  { number: "01", icon: ClipboardCheck, title: "The Audit", text: "We map your existing process and identify exactly where your business is losing time." },
  { number: "02", icon: FilePenLine, title: "Blueprinting", text: "We turn your workflow into a clear technical plan that your team can understand." },
  { number: "03", icon: Code2, title: "Development", text: "Our team builds, tests and iterates until the system is ready for real work." },
  { number: "04", icon: Rocket, title: "Implementation", text: "We launch the system, train your team and support the transition." },
];

export default function Process() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Business On Autopilot In Just 4 Steps</h2>
        </div>

        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, text }) => (
            <article key={number} className="rounded-lg border border-white/10 bg-black p-5">
              <div className="text-2xl font-light text-white/30">{number}</div>
              <div className="mt-7 flex items-center gap-2 text-[11px]">
                <Icon size={13} className="text-blue-400" />
                <h3>{title}</h3>
              </div>
              <p className="mt-3 text-[9px] leading-4 text-white/40">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-[9px] font-semibold text-black">
            Get Started <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
