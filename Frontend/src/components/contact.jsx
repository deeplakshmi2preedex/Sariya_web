import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="
        w-full
        overflow-hidden
        border-t
        border-white/5
        bg-black
        mb-[clamp(2rem,5vw,3rem)]
        py-[clamp(2.5rem,6vw,4rem)]
      "
    >
      <div
        className="
          page-width
          mx-auto
          w-full
          max-w-full
          px-[clamp(1rem,4vw,3rem)]
          text-center
        "
      >
        {/* ================= LOGO ================= */}
        <p
          className="
            w-full
            font-bold
            leading-none
            text-white
            text-[clamp(1.5625rem,4vw,2.1875rem)]
          "
        >
          sariya<span className="text-blue-400">.</span>
        </p>

        {/* ================= HEADING ================= */}
        <h2
          className="
            mx-auto
            mt-[clamp(2.5rem,7vw,5rem)]
            w-full
            max-w-5xl
            break-words
            font-semibold
            leading-[1.15]
            tracking-[clamp(0.02em,0.1vw,0.095em)]
            text-white
            text-[clamp(1.25rem,4vw,2.5rem)]
          "
        >
          Contact us to discuss
          <br className="max-[749px]:block min-[750px]:hidden" />
          <span className="min-[750px]:inline"> your</span>
          <br className="hidden min-[750px]:max-[899px]:block" /> project
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mx-auto
            mt-[clamp(1rem,2vw,1.5rem)]
            w-full
            max-w-4xl
            break-words
            text-[clamp(0.875rem,1.3vw,1rem)]
            font-normal
            leading-[1.6]
            tracking-[clamp(0.01em,0.03vw,0.02em)]
            text-[#BCC7DB]
          "
        >
          Whether you're looking to automate a single workflow or build a custom
          ERP, our technical auditors are ready to find your efficiency gaps.
        </p>

        {/* ================= BUTTON ================= */}
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
              shrink-0
              items-center
              justify-center
              gap-[clamp(0.375rem,0.7vw,0.5rem)]
              rounded-[clamp(0.625rem,1.2vw,0.75rem)]
              bg-white
              px-[clamp(1rem,2vw,1.25rem)]
              py-[clamp(0.625rem,1.2vw,0.75rem)]
              text-[clamp(0.75rem,1.1vw,1rem)]
              font-bold
              leading-none
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-105
              hover:bg-blue-100
              active:scale-95
            "
          >
            <span>Get Started</span>

            <ArrowUpRight
              className="
                h-[clamp(0.875rem,1.3vw,1rem)]
                w-[clamp(0.875rem,1.3vw,1rem)]
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
