import { ArrowUpRight } from "lucide-react";
import introImg from "../../assets/About/introImg.png";

export default function IntroSection() {
  return (
    <section id="about" className="bg-[#1d1d1d]  sm:py-20 p-12">
      <div className="page-width">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className=" font-semibold leading-[1.12]  text-white leading-[1.9] tracking-[1.2px]"
              style={{ fontSize: "clamp(22px, 4vw, 50px)" }}
            >
              We build the systems that build your future.
            </h2>

            <p className="mt-8 max-w-xl text-[clamp(14px,1.2vw,16px)]  text-[#BCC7DB] leading-[1.5] pt-5">
              Sariya Designs was founded on a simple realisation: Most
              businesses aren't held back by a lack of vision, but by a lack of
              infrastructure. Off-the-shelf software solves 80% of problems, but
              the remaining 20% is where your unique competitive advantage
              lives.
            </p>

            <p className="mt-5 max-w-xl text-[clamp(14px,2vw,16px)]  text-[#BCC7DB]  pt-3">
              We bridge that gap. Our team combines management consulting-level
              strategy with deep-stack engineering to build proprietary systems
              that run your business on autopilot.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-[clamp(12px,2vw,16px)] font-bold tracking-[1.1px] text-black transition hover:bg-blue-100 pt-3"
            >
              Get Started <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="relative pt-6">
            <div className="absolute left-0 right-0 top-15 bg-white/30 h-[2px]" />
            <div
              className="code-image mt-25 h-[220px] overflow-hidden rounded-sm border border-white/5 sm:h-[250px] rounded-tl-3xl rounded-bl-3xl"
              style={{
                backgroundImage: `url(${introImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity:0.65
              }}
            />
          </div>
        </div>

        <div className="mt-13 h-[2px] bg-white/30" />
      </div>
    </section>
  );
}
