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
          gap-[clamp(45px,5vw,80px)]
          px-[clamp(16px,4vw,60px)]
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
          {/* WE BUILD */}

          <p
            className="
              mb-[clamp(20px,2.2vw,30px)]
              text-[clamp(0.8125rem,1.67vw,1.125rem)]
              font-bold
              leading-none
              tracking-[0.055em]
              text-white
            "
          >
            WE BUILD
          </p>

          {/* HEADING */}

          <h1
            className="
              max-w-full
              text-[clamp(1.5625rem,3.8vw,3.5rem)]
              font-semibold
              leading-[1.2]
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
              mt-[clamp(22px,3vw,36px)]
              w-full
              max-w-[790px]
              text-[clamp(0.875rem,1vw,1rem)]
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
              mt-[clamp(22px,2.5vw,30px)]
              flex
              flex-wrap
              items-center
              gap-[clamp(12px,2vw,32px)]
              max-[750px]:flex-col
              max-[750px]:items-start
            "
          >
            {/* AUTOMATE */}

            <a
              href="#contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-[16px]
                bg-blue-600
                px-[clamp(18px,2.5vw,34px)]
                py-[clamp(11px,1.2vw,15px)]
                text-[clamp(0.75rem,1vw,1rem)]
                font-bold
                whitespace-nowrap
                text-white
                shadow-lg
                shadow-blue-900/30
                transition-all
                duration-300
                hover:bg-blue-500
              "
            >
              AUTOMATE TODAY
              <ArrowUpRight
                className="
                  h-[clamp(14px,1.3vw,17px)]
                  w-[clamp(14px,1.3vw,17px)]
                  shrink-0
                "
              />
            </a>

            {/* EXPLORE */}

            <a
              href="#services"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-[16px]
                bg-white
                px-[clamp(20px,2.7vw,38px)]
                py-[clamp(11px,1.2vw,15px)]
                text-[clamp(0.75rem,1vw,1rem)]
                font-bold
                whitespace-nowrap
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
            min-w-0
            w-full
            min-h-[clamp(360px,55vw,520px)]
            lg:block
          "
        >
          {/* IMAGE */}

          <div
            className="
              absolute
              right-0
              top-0
              h-[clamp(280px,30vw,415px)]
              w-full
              max-w-[560px]
              rounded-[clamp(18px,2vw,28px)]
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
              top-[clamp(295px,33vw,448px)]
              w-full
              max-w-[560px]
              rounded-2xl
              bg-[#292929]
              px-[clamp(10px,1vw,14px)]
              py-[clamp(16px,1.5vw,20px)]
            "
          >
            <p
              className="
                text-[clamp(0.875rem,1vw,1rem)]
                font-normal
                leading-[1.55]
                tracking-[1.2px]
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
