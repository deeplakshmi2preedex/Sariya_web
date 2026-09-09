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
    <section id="about" className="py-10">
      <div className="container-page">
        <div className="text-center">
          <h2
            className="
              text-[60px]
              font-semibold
              leading-[1.2]
              text-[#BCC7DB]
            "
          >
            When "Ready-Made" <span className="text-[#fff]">Isn't Enough</span>
          </h2>

          <p
            className="
              mt-3
              text-[clamp(1rem,1vw,4rem)]
              font-normal
              leading-[1.6]
              text-[#BCC7DB]
              text-center
            "
          >
            Matching tells your story, but development solves your problems.{" "}
            <span className="text-white">
              If you're <br /> feeling these pains,
            </span>{" "}
            you need a custom solution.
          </p>
        </div>

        <div className="m-10 grid gap-7 md:grid-cols-3">
          {problems.map(({ icon, title, text, color }) => (
            <article
              key={title}
              className="
                rounded-lg
                border
                border-white/10
                bg-[#101011]
                p-5
                h-[225px]
              "
            >
              <div
                className={`
                  mb-7
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  ${color}
                `}
              >
                <FontAwesomeIcon icon={icon} className="text-3xl" />
              </div>

              <h3
                className="
                  text-[clamp(1.25rem,1.8vw,1.5rem)]
                  font-medium
                  leading-[1.2]
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-3
                  text-[clamp(0.875rem,0.9vw,0.9375rem)]
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