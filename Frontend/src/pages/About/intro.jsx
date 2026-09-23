import { ArrowUpRight } from "lucide-react";
import introImg from "../../assets/About/introImg.png";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="
        w-full
        overflow-hidden
        bg-[#1d1d1d]
        px-[clamp(1rem,4vw,3rem)]
        py-[clamp(3rem,7vw,5rem)]
      "
    >
      <div className="page-width mx-auto w-full max-w-full">
        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1
            items-start
            gap-[clamp(2.5rem,6vw,5rem)]
            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* ================= IMAGE ================= */}
          <div
            className="
              relative
              order-1
              min-w-0
              w-full
              lg:order-2
            "
          >
            {/* Top Line */}
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-white/30
              "
            />

            {/* Image */}
            <div
              className="
                mt-[clamp(1.5rem,4vw,3rem)]
                w-full
                min-w-0
                overflow-hidden
                rounded-tl-[clamp(1.25rem,3vw,1.875rem)]
                rounded-bl-[clamp(1.25rem,3vw,1.875rem)]
                border
                border-white/5
              "
            >
              <img
                src={introImg}
                alt="Sariya Designs infrastructure"
                className="
                  block
                  h-auto
                  w-full
                  max-w-full
                  object-contain
                  opacity-65
                "
              />
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div
            className="
              order-2
              min-w-0
              w-full
              lg:order-1
            "
          >
            <h2
              className="
                w-full
                font-semibold
                leading-[1.12]
                tracking-[clamp(0.02em,0.1vw,0.075em)]
                text-white
                text-[clamp(1.5rem,4vw,3.125rem)]
              "
            >
              We build the systems that build your future.
            </h2>

            <p
              className="
                mt-[clamp(1.5rem,3vw,2rem)]
                max-w-xl
                text-[clamp(0.875rem,1.2vw,1rem)]
                leading-[1.5]
                text-[#BCC7DB]
              "
            >
              Sariya Designs was founded on a simple realisation: Most
              businesses aren't held back by a lack of vision, but by a lack of
              infrastructure. Off-the-shelf software solves 80% of problems,
              but the remaining 20% is where your unique competitive advantage
              lives.
            </p>

            <p
              className="
                mt-[clamp(1rem,2vw,1.25rem)]
                max-w-xl
                text-[clamp(0.875rem,1.2vw,1rem)]
                leading-[1.5]
                text-[#BCC7DB]
              "
            >
              We bridge that gap. Our team combines management consulting-level
              strategy with deep-stack engineering to build proprietary systems
              that run your business on autopilot.
            </p>

            <a
              href="#contact"
              className="
                mt-[clamp(1.5rem,3vw,1.75rem)]
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-[clamp(1rem,2vw,1.5rem)]
                py-[clamp(0.65rem,1vw,0.75rem)]
                text-[clamp(0.75rem,1vw,1rem)]
                font-bold
                tracking-[0.07em]
                text-black
                transition
                duration-300
                hover:bg-blue-100
              "
            >
              Get Started
              <ArrowUpRight
                className="h-[clamp(0.875rem,1vw,1rem)] w-[clamp(0.875rem,1vw,1rem)]"
              />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          className="
            mt-[clamp(2.5rem,5vw,4rem)]
            h-px
            w-full
            bg-white/30
          "
        />
      </div>
    </section>
  );
}