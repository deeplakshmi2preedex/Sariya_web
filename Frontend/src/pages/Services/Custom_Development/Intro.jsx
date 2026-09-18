function Intro() {
  return (
    <section className="bg-black pb-20">
      <div className="text-center">
        <h2
          className="
            text-[clamp(20px,4vw,40px)]
            font-semibold
            leading-tight
            tracking-[0.8px]
            text-[#C2C2C2]
          "
        >
          Sariya Systems on Autopilot
        </h2>

        <p
          className="
            mx-auto
            max-w-[700px]
            px-5
            text-[clamp(14px,2vw,16px)]
            font-light
            leading-[1.45]
            tracking-[1px]
            text-[#BCC7DB]
            mt-3
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