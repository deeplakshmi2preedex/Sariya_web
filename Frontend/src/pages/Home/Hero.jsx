import { ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/Home/heroImg.png";

export default function Hero() {
  return (
    <div className="max-auto w-full max-w-[1350px] ">
      <div>
        <section
          id="home"
          className="hero-grid relative min-h-[700px] overflow-hidden pt-32"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(30,91,173,.34),transparent_32%),linear-gradient(90deg,#0a1d36_0%,#030303_53%)]" />

          <div className="container-page relative grid min-h-[600px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="max-w-2xl">
              <p className="mb-5 text-[18px] font-bold tracking-widest text-white">
                WE BUILD
              </p>

              <h1 className="text-balance text-[50px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
                SYSTEM THAT RUNS
                <br />
                YOUR <span className="text-[#BC648E]">{"{"}</span>BUSINESS
                <span className="text-[#BC648E]">{"}"}</span> ON
                <br />
                AUTOPILOT.
              </h1>

              <p className="mt-7 max-w-xl text-[16px] leading-6 text-white">
                You've outgrown basic templates. We craft “out-of-the-box”
                software that combines your messy workflows into one
                high-performing dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="text-[#ffffff] inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-[16px] font-bold shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
                >
                  AUTOMATE TODAY <ArrowUpRight size={13} />
                </a>
                <a
                  href="#services"
                  className="rounded-md bg-white px-5 py-3 text-[16px] font-bold text-[#082F7B] transition hover:bg-blue-100"
                >
                  EXPLORE MORE
                </a>
              </div>
            </div>

            <div className="relative hidden min-h-[450px] lg:block">
              {/* Image */}
              <div
                className="absolute right-0 top-8 h-[360px] w-[560px] rounded-[28px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroImg})`,
                }}
              />

              {/* Content Box */}
              <div className="absolute right-0 top-[368px] w-[560px] rounded-lg bg-[#292929] px-4 py-3">
                <p className="text-[16px] font-light leading-5 text-white">
                  We harness the pure power of data, creativity, and instinct to
                  build business solutions that drive ahead.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
