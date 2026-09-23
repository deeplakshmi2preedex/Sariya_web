function Intro() {
  return (
    <section
      className="
        w-full
        max-w-full
        bg-black
        pb-[clamp(2.5rem,6vw,5rem)]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-full
          px-[clamp(1rem,4vw,2rem)]
          text-center
        "
      >
        {/* ================= TITLE ================= */}
        <h2
          className="
            mx-auto
            w-full
            max-w-full
            break-words
            text-[clamp(1.25rem,4vw,2.5rem)]
            font-semibold
            leading-[clamp(1.15,1.2vw,1.25)]
            tracking-[clamp(0.02em,0.08vw,0.05em)]
            text-[#C2C2C2]
          "
        >
          Sariya Systems on Autopilot
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mx-auto
            mt-[clamp(0.75rem,1.5vw,1rem)]
            w-full
            max-w-[clamp(20rem,55vw,43.75rem)]
            break-words
            text-[clamp(0.875rem,1.5vw,1rem)]
            font-light
            leading-[clamp(1.4,1.8vw,1.625)]
            tracking-[clamp(0.02em,0.06vw,0.0625em)]
            text-[#BCC7DB]
          "
        >
          Management consulting-grade technical solutions for businesses that
          need to scale efficiency through custom development and automation.
        </p>
      </div>
    </section>
  );
}

export default Intro;