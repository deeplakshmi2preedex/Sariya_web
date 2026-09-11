import { Brain, Files, Infinity, Key } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Logic First",
    color: "#0078D4",
    text: `We don't start with code; we start with your business logic. We map your workflows before a single line of script is written.`,
  },
  {
    icon: Files,
    title: "Deep Stack",
    color: "#A050F0",
    text: "From Python backends to React frontends, we use enterprise-grade stacks that are built to scale with your growth.",
  },
  {
    icon: Infinity,
    title: "Autopilot",
    color: "#00D650",
    text: "Automation isn't just a feature; it's our philosophy. We eliminate the $10/hr tasks so you can focus on $1,000/hr strategy.",
  },
  {
    icon: Key,
    title: "Ownership",
    color: "#F07800",
    text: `We build proprietary assets. You own the IP, the code, and the system. No monthly platform "tax" for your own workflows.`,
  },
];

export default function Process() {
  return (
    <section className="pt-22">
      <div className="container-page">

        {/* ================= HEADING ================= */}
        <div className="text-center">
          <h2 className="text-[clamp(30px,4.5vw,50px)] font-semibold text-[#ffffff]">
            The Sariya Standard
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-5 grid gap-6 p-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text, color }) => (
            <article
              key={title}
              className="
                min-h-[300px]
                min-w-[230px]
                rounded-4xl
                border
                border-gray-500/30
                bg-black
                p-5
                shadow-[0_0_15px_rgba(156,163,175,0.15)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:bg-gray-800
                hover:border-gray-400/40
                hover:shadow-[0_10px_30px_rgba(156,163,175,0.25)]
              "
            >
              {/* ================= ICON ================= */}
              <div className="mt-2">
                <Icon
                  size={42}
                  strokeWidth={1.8}
                  style={{ color }}
                />
              </div>

              {/* ================= TITLE ================= */}
              <h3
                className="
                  mt-5
                  text-[clamp(15px,4.2vw,30px)]
                  font-normal
                  text-white
                "
              >
                {title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  mt-5
                  text-[clamp(10px,4vw,16px)]
                  font-normal
                  leading-[1.7]
                  tracking-[1.2px]
                  text-[#6C7280]
                "
              >
                {text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}