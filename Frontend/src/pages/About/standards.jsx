import { Brain, Infinity, KeyRound, Layers3 } from "lucide-react";

const standards = [
  {
    icon: Brain,
    title: "Logic First",
    color: "text-blue-500",
    text: "We don't start with code; we start with your business logic. We map your workflows before a single line of script is written.",
  },
  {
    icon: Layers3,
    title: "Deep Stack",
    color: "text-purple-500",
    text: "From Python backends to React frontends, we use enterprise-grade stacks that are built to scale with your growth.",
  },
  {
    icon: Infinity,
    title: "Autopilot",
    color: "text-emerald-500",
    text: "Automation isn't just a feature; it's our philosophy. We eliminate the $10/hr tasks so you can focus on $1,000/hr strategy.",
  },
  {
    icon: KeyRound,
    title: "Ownership",
    color: "text-orange-400",
    text: "We build proprietary assets. You own the IP, the code, and the system. No monthly platform tax for your own workflows.",
  },
];

export default function SariyaStandard() {
  return (
    <section id="services" className="bg-black py-20 sm:py-24">
      <div className="page-width">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          The Sariya Standard
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map(({ icon: Icon, title, color, text }) => (
            <article
              key={title}
              className="card-border min-h-[220px] rounded-2xl bg-black p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0c0c0c]"
            >
              <Icon size={29} className={color} strokeWidth={1.7} />

              <h3 className="mt-8 text-xl font-semibold">{title}</h3>

              <p className="mt-4 text-[11px] leading-5 text-white/40 sm:text-xs">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
