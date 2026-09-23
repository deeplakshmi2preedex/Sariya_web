import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkSlash,
  faHourglass,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const problems = [
  {
    icon: faLinkSlash,
    title: "Fragmented Data",
    text: "Your info is scattered across Excel, emails, and different web apps that don't talk to each other.",
    color: "text-red-400",
  },
  {
    icon: faHourglass,
    title: "Manual Burnout",
    text: `Your team spends 60% of their day on "copy-paste" tasks instead of high-value work.`,
    color: "text-orange-400",
  },
  {
    icon: faArrowUp,
    title: "Ceiling on Growth",
    text: `You can't take more clients because your current "manual" process is at its breaking point.`,
    color: "text-violet-400",
  },
];

export default function Problems() {
  return (
    <section
      id="about"
      className="
        w-full
        py-[clamp(40px,5vw,60px)]
        overflow-hidden
      "
    >
      <div
        className="
          container-page
          w-full
          px-[clamp(16px,4vw,60px)]
        "
      >
        {/* ================= HEADER ================= */}

        <div className="text-center">
          <h2
            className="
              mx-auto
              max-w-[1000px]
              text-[clamp(2rem,4.2vw,3.75rem)]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#BCC7DB]
            "
          >
            When "Ready-Made"{" "}
            <span className="text-white">Isn't Enough</span>
          </h2>

          <p
            className="
              mx-auto
              mt-[clamp(12px,1.5vw,16px)]
              max-w-[800px]
              text-[clamp(0.875rem,1.1vw,1rem)]
              font-normal
              leading-[1.6]
              text-[#BCC7DB]
            "
          >
            Matching tells your story, but development solves your problems.{" "}
            <span className="text-white">
              If you're feeling these pains,
            </span>{" "}
            you need a custom solution.
          </p>
        </div>

        {/* ================= PROBLEM CARDS ================= */}

        <div
          className="
            mt-[clamp(32px,5vw,40px)]
            grid
            grid-cols-1
            gap-[clamp(16px,2.5vw,28px)]
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {problems.map(({ icon, title, text, color }) => (
            <article
              key={title}
              className="
                w-full
                min-w-0
                rounded-lg
                border
                border-white/10
                bg-[#101011]
                p-[clamp(18px,2vw,20px)]
                min-h-[225px]
                transition-all
                duration-300
                hover:border-white/20
              "
            >
              {/* ================= ICON ================= */}

              <div
                className={`
                  mb-[clamp(22px,2.5vw,28px)]
                  flex
                  h-[clamp(48px,4vw,56px)]
                  w-[clamp(48px,4vw,56px)]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  ${color}
                `}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="
                    text-[clamp(1.4rem,2.2vw,1.875rem)]
                  "
                />
              </div>

              {/* ================= TITLE ================= */}

              <h3
                className="
                  text-[clamp(1.15rem,1.8vw,1.5rem)]
                  font-medium
                  leading-[1.2]
                  text-white
                "
              >
                {title}
              </h3>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  mt-[clamp(10px,1vw,12px)]
                  max-w-[480px]
                  text-[clamp(0.8125rem,0.9vw,0.9375rem)]
                  font-normal
                  leading-[1.6]
                  text-white/45
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