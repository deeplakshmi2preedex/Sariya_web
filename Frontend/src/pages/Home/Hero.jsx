import { ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/Home/heroImg.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        hero-grid
        relative
        w-full
        overflow-hidden
        pt-[clamp(70px,8vw,108px)]
        pb-[clamp(50px,6vw,70px)]
      "
    >
      <div
        className="
          hero-content
          relative
          mx-auto
          grid
          w-full
          grid-cols-1
          gap-[clamp(40px,5vw,80px)]
          px-[clamp(20px,4vw,60px)]
          lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <div
          className="
            min-w-0
            w-full
            max-w-[760px]
          "
        >
          <p
            className="
              mb-[clamp(22px,2.2vw,30px)]
              text-[clamp(0.9rem,1.2vw,1.125rem)]
              font-bold
              leading-none
              tracking-[0.055em]
              text-white
            "
          >
            WE BUILD
          </p>

          <h1
            className="
              text-[clamp(2rem,3.8vw,3.5rem)]
              font-semibold
              leading-[1.25]
              tracking-[0.01em]
              text-white
            "
          >
            SYSTEM THAT RUNS
            <br />
            YOUR <span className="text-[#BC648E]">{"{"}</span>
            BUSINESS
            <span className="text-[#BC648E]">{"}"}</span> ON
            <br />
            AUTOPILOT.
          </h1>

          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-[clamp(24px,3vw,36px)]
              w-full
              max-w-[790px]
              text-[clamp(0.8rem,1vw,1rem)]
              font-normal
              leading-[1.65]
              text-white
            "
          >
            You've outgrown basic templates. We craft “out-of-the-box” software
            that centralizes your messy workflows into one high-efficiency
            dashboard.
          </p>

          {/* ================= BUTTONS ================= */}

          <div
            className="
              mt-[clamp(24px,2.5vw,30px)]
              flex
              flex-wrap
              gap-[clamp(14px,2vw,32px)]
            "
          >
            <a
              href="#contact"
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-[16px]
                bg-blue-600
                px-[clamp(20px,2.5vw,34px)]
                py-[clamp(12px,1.2vw,15px)]
                text-[clamp(0.75rem,1vw,1rem)]
                font-bold
                text-white
                shadow-lg
                shadow-blue-900/30
                transition-all
                duration-300
                hover:bg-blue-500
              "
            >
              AUTOMATE TODAY
              <ArrowUpRight className="h-[clamp(14px,1.3vw,17px)] w-[clamp(14px,1.3vw,17px)]" />
            </a>

            <a
              href="#services"
              className="
                inline-flex
                shrink-0
                items-center
                rounded-[16px]
                bg-white
                px-[clamp(22px,2.7vw,38px)]
                py-[clamp(12px,1.2vw,15px)]
                text-[clamp(0.75rem,1vw,1rem)]
                font-bold
                text-[#082F7B]
                transition-all
                duration-300
                hover:bg-blue-100
              "
            >
              EXPLORE MORE
            </a>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div
          className="
            relative
            hidden
            min-w-0
            min-h-[clamp(400px,42vw,520px)]
            w-full
            lg:block
          "
        >
          {/* IMAGE */}

          <div
            className="
              absolute
              right-0
              top-[8px]
              h-[clamp(300px,30vw,415px)]
              w-[min(100%,560px)]
              rounded-[28px]
              bg-cover
              bg-center
            "
            style={{
              backgroundImage: `url(${heroImg})`,
            }}
          />

          {/* CONTENT BOX */}

          <div
            className="
              absolute
              right-0
              top-[clamp(325px,33vw,448px)]
              w-[min(100%,560px)]
              rounded-[10px]
              bg-[#292929]
              px-4
              py-[14px]
            "
          >
            <p
              className="
                text-[clamp(0.8rem,1vw,1rem)]
                font-normal
                leading-[1.45]
                text-white
              "
            >
              We harness the pure power of data, creativity, and instinct to
              build business solutions that think ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
