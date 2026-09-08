import { ArrowUpRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="about" className="bg-[#1d1d1d] py-16 sm:py-20">
      <div className="page-width">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              We build the systems that build
              <br />
              your future.
            </h2>

            <p className="mt-8 max-w-xl text-[11px] leading-5 text-white/50 sm:text-xs">
              Sariya Designs was founded on a simple realisation: Most businesses
              aren't held back by a lack of vision, but by a lack of infrastructure.
              Off-the-shelf software solves 80% of problems, but the remaining 20%
              is where your unique competitive advantage lives.
            </p>

            <p className="mt-5 max-w-xl text-[11px] leading-5 text-white/50 sm:text-xs">
              We bridge that gap. Our team combines management consulting-level
              strategy with deep-stack engineering to build proprietary systems
              that run your business on autopilot.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-[10px] font-semibold text-black transition hover:bg-blue-100"
            >
              Get Started <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="relative pt-6">
            <div className="absolute left-0 right-0 top-0 h-px bg-white/30" />
            <div className="code-image mt-6 h-[220px] overflow-hidden rounded-sm border border-white/5 sm:h-[250px]" />
          </div>
        </div>

        <div className="mt-10 h-px bg-white/30" />
      </div>
    </section>
  );
}
