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
    <section
      className="
        w-full
        overflow-hidden
        pt-[clamp(3rem,7vw,5.5rem)]
        pb-[clamp(3rem,7vw,5rem)]
      "
    >
      <div
        className="
          container-page
          mx-auto
          w-full
          max-w-full
          px-[clamp(1rem,4vw,2.5rem)]
        "
      >
        {/* ================= HEADING ================= */}
        <div className="w-full text-center">
          <h2
            className="
              mx-auto
              max-w-full
              font-semibold
              leading-[1.1]
              tracking-[clamp(0.01em,0.04vw,0.02em)]
              text-white
              text-[clamp(1.75rem,4.5vw,3.125rem)]
            "
          >
            The Sariya Standard
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            mt-[clamp(2rem,4vw,2.5rem)]
            grid
            w-full
            min-w-0
            grid-cols-1
            gap-[clamp(1rem,2vw,1.5rem)]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {steps.map(({ icon: Icon, title, text, color }) => (
            <article
              key={title}
              className="
                group
                flex
                min-w-0
                w-full
                min-h-[clamp(16rem,28vw,18.75rem)]
                flex-col
                overflow-hidden
                rounded-[clamp(1.5rem,3vw,2rem)]
                border
                border-gray-500/30
                bg-black
                p-[clamp(1.25rem,2.5vw,1.5rem)]
                shadow-[0_0_15px_rgba(156,163,175,0.15)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-[clamp(0.25rem,0.6vw,0.5rem)]
                hover:border-gray-400/40
                hover:bg-gray-800
                hover:shadow-[0_10px_30px_rgba(156,163,175,0.25)]
              "
            >
              {/* ================= ICON ================= */}
              <div
                className="
                  flex
                  h-[clamp(2.5rem,4vw,2.75rem)]
                  w-[clamp(2.5rem,4vw,2.75rem)]
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <Icon
                  className="
                    h-full
                    w-full
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                  strokeWidth={1.8}
                  style={{ color }}
                />
              </div>

              {/* ================= TITLE ================= */}
              <h3
                className="
                  mt-[clamp(1.25rem,2.5vw,1.5rem)]
                  min-w-0
                  break-words
                  font-normal
                  leading-[1.2]
                  text-white
                  text-[clamp(1.125rem,1.8vw,1.875rem)]
                "
              >
                {title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  mt-[clamp(1rem,2vw,1.25rem)]
                  min-w-0
                  break-words
                  text-[clamp(0.8125rem,1.1vw,1rem)]
                  font-normal
                  leading-[1.65]
                  tracking-[clamp(0.02em,0.08vw,0.075em)]
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