import { ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/Home/heroImg.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        hero-grid
        relative
        min-h-[680px]
        overflow-hidden
        pt-[108px]
        pb-[70px]
      "
    >

      <div
        className="
          container-page
          relative
          grid
          gap-12
          lg:grid-cols-[1.05fr_.95fr]
        "
      >

        {/* LEFT CONTENT */}

        <div className="max-w-[760px]">

          <p
            className="
              mb-[30px]
              text-[clamp(1rem,1.2vw,1.125rem)]
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
              text-[clamp(2.25rem,3.8vw,3.5rem)]
              font-semibold
              leading-[1.3]
              tracking-[0.01em]
              text-white
            "
          >
            SYSTEM THAT RUNS
            <br />

            YOUR{" "}
            <span className="text-[#BC648E]">
              {"{"}
            </span>
            BUSINESS
            <span className="text-[#BC648E]">
              {"}"}
            </span>{" "}
            ON

            <br />

            AUTOPILOT.
          </h1>


          {/* DESCRIPTION */}

          <p
            className="
              mt-[36px]
              max-w-[790px]
              text-[clamp(0.875rem,1vw,1rem)]
              font-normal
              leading-[1.65]
              text-white
            "
          >
            You've outgrown basic templates. We craft “out-of-the-box”
            software that centralizes your messy workflows into one
            high-efficiency dashboard.
          </p>


          {/* BUTTONS */}

          <div
            className="
              mt-[30px]
              flex
              flex-wrap
              gap-8
            "
          >

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-[16px]
                bg-blue-600
                px-[34px]
                py-[15px]
                text-[clamp(0.875rem,1vw,1rem)]
                font-bold
                text-white
                shadow-lg
                shadow-blue-900/30
                transition
                hover:bg-blue-500
              "
            >
              AUTOMATE TODAY

              <ArrowUpRight size={17} />
            </a>


            <a
              href="#services"
              className="
                inline-flex
                items-center
                rounded-[16px]
                bg-white
                px-[38px]
                py-[15px]
                text-[clamp(0.875rem,1vw,1rem)]
                font-bold
                text-[#082F7B]
                transition
                hover:bg-blue-100
              "
            >
              EXPLORE MORE
            </a>

          </div>

        </div>


        {/* ==================================================
            RIGHT IMAGE
            ================================================== */}

        <div
          className="
            relative
            hidden
            min-h-[520px]
            lg:block
          "
        >

          {/* IMAGE */}

          <div
            className="
              absolute
              right-0
              top-[8px]
              h-[415px]
              w-[560px]
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
              top-[448px]
              w-[560px]
              rounded-[10px]
              bg-[#292929]
              px-4
              py-[14px]
            "
          >
            <p
              className="
                text-[clamp(0.875rem,1vw,1rem)]
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