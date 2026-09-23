import {
  ArrowUpRight,
  Search,
  Code2,
  FilePenLine,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "The Audit",
    text: `We will map your messy process to find the "efficiency leaks & bottlenecks".`,
  },
  {
    number: "02",
    icon: FilePenLine,
    title: "Blueprinting",
    text: "We design the architecture not just how it looks, but how it works.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    text: "Our experts build your tool using modern, scalable code that is clean & frictionless.",
  },
  {
    number: "04",
    icon: "person-chalkboard",
    title: "Implementation",
    text: "We train your team & migrate your data into the new system without disruption.",
  },
];

export default function Process() {
  return (
    <section
      className="
        w-full
        max-w-full
        overflow-hidden
        pb-[clamp(3rem,8vw,6rem)]
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

        <div className="w-full max-w-full text-center">
          <h2
            className="
              mx-auto
              w-full
              max-w-full
              break-words
              text-[clamp(1.875rem,4.5vw,3.125rem)]
              font-semibold
              leading-[1.15]
              tracking-[clamp(0.01em,0.05vw,0.03em)]
              text-white
            "
          >
            Business On Autopilot In Just 4 Steps
          </h2>
        </div>

        {/* ================= PROCESS CARDS ================= */}

        <div
          className="
            mx-auto
            mt-[clamp(1.5rem,3vw,2rem)]
            grid
            w-full
            min-w-0
            grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))]
            gap-[clamp(1rem,2vw,1.25rem)]
            p-0
          "
        >
          {steps.map(({ number, icon: Icon, title, text }) => (
            <article
              key={number}
              className="
                flex
                min-h-[clamp(14rem,28vw,15.625rem)]
                w-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-[clamp(0.75rem,1.5vw,1rem)]
                border
                border-gray-500/30
                bg-black
                p-[clamp(1.25rem,2.5vw,1.5rem)]
                shadow-[0_0_15px_rgba(156,163,175,0.15)]
                transition-all
                duration-300
                hover:border-gray-400/40
                hover:bg-gray-800
              "
            >
              {/* ================= NUMBER ================= */}

              <div
                className="
                  mt-[clamp(0.25rem,1vw,1.25rem)]
                  w-full
                  text-[clamp(2rem,4.2vw,3.75rem)]
                  leading-none
                  text-[#414141]
                "
              >
                {number}
              </div>

              {/* ================= ICON + TITLE ================= */}

              <div
                className="
                  mt-[clamp(1.25rem,2.5vw,1.75rem)]
                  flex
                  min-w-0
                  items-center
                  gap-[clamp(0.5rem,1vw,0.75rem)]
                  text-[clamp(0.9375rem,2.2vw,1.5625rem)]
                  font-normal
                  leading-[1.2]
                  text-white
                "
              >
                {Icon === "person-chalkboard" ? (
                  <span
                    className="
                      flex
                      h-[clamp(1.5rem,3vw,1.875rem)]
                      w-[clamp(1.5rem,3vw,1.875rem)]
                      shrink-0
                      items-center
                      justify-center
                    "
                  >
                    <i
                      className="
                        fa-solid
                        fa-person-chalkboard
                        text-[clamp(1.25rem,2.5vw,1.5rem)]
                        text-blue-400
                      "
                    />
                  </span>
                ) : (
                  <Icon
                    className="
                      h-[clamp(1.5rem,3vw,1.875rem)]
                      w-[clamp(1.5rem,3vw,1.875rem)]
                      shrink-0
                      text-blue-400
                    "
                  />
                )}

                <h3
                  className="
                    min-w-0
                    break-words
                  "
                >
                  {title}
                </h3>
              </div>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mt-[clamp(1rem,2vw,1.75rem)]
                  w-full
                  min-w-0
                  break-words
                  text-[clamp(0.75rem,1.5vw,0.875rem)]
                  font-normal
                  leading-[1.7]
                  tracking-[clamp(0.02em,0.08vw,0.075em)]
                  text-[#95A3B7]
                "
              >
                {text}
              </p>
            </article>
          ))}
        </div>

        {/* ================= CTA BUTTON ================= */}

        <div
          className="
            mt-[clamp(1.5rem,3vw,1.75rem)]
            flex
            w-full
            justify-center
          "
        >
          <a
            href="/contact"
            className="
              inline-flex
              max-w-full
              shrink-0
              items-center
              justify-center
              gap-[clamp(0.375rem,0.7vw,0.625rem)]
              rounded-[clamp(0.625rem,1.2vw,0.75rem)]
              bg-white
              px-[clamp(1rem,2vw,1.5rem)]
              py-[clamp(0.625rem,1.2vw,0.75rem)]
              text-[clamp(0.75rem,1.2vw,1rem)]
              font-bold
              leading-none
              whitespace-nowrap
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-105
              hover:bg-white/90
              active:scale-95
            "
          >
            <span>Get Started</span>

            <ArrowUpRight
              strokeWidth={2.5}
              className="
                h-[clamp(1rem,2vw,1.5rem)]
                w-[clamp(1rem,2vw,1.5rem)]
                shrink-0
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}