function Hero() {
  return (
    <section
      className="
        relative
        min-h-[580px]
        overflow-hidden
      "
    >
      <div className="relative mx-auto flex items-end px-0 pb-0 pt-10 pl-8">
        <div className="hero-float relative z-10 pt-20">
          {/* Blue line */}
          <div className="mb-5 h-[8px] w-[260px] bg-[#4e94f9]" />

          <h1
            className="
              hero-title
              max-w-4xl
              p-0
              text-[clamp(25px,9vw,124.193px)]
              font-bold
              leading-[1.2]
              tracking-[1.2px]
              text-white
            "
          >
            Workflow
            <br />
            Automation
          </h1>

          <p
            className="
              mt-3
              text-[clamp(14px,2vw,18px)]
              font-light
              leading-relaxed
              tracking-[0.6px]
              text-white
            "
          >
           Connecting the dots between your apps and your team's output.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
