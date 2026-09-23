function Hero() {
  return (
    <section
      className="
        relative
        min-h-[clamp(20rem,45vw,36.25rem)]
        w-full
        max-w-full
        overflow-hidden
      "
    >
      <div
        className="
          relative
          mx-auto
          flex
          min-h-full
          w-full
          max-w-full
          items-end
          px-[clamp(1rem,2vw,2rem)]
          pb-[clamp(1rem,2vw,2.5rem)]
          pt-[clamp(2rem,5vw,2.5rem)]
        "
      >
        <div
          className="
            hero-float
            relative
            z-10
            w-full
            max-w-full
            pt-[clamp(1rem,5vw,5rem)]
          "
        >
          {/* Blue line */}
          <div
            className="
              mb-[clamp(0.5rem,1.5vw,1.25rem)]
              h-[clamp(4px,0.55vw,8px)]
              w-[clamp(7.5rem,20vw,16.25rem)]
              max-w-full
              bg-[#4e94f9]
            "
          />

          {/* Heading */}
          <h1
            className="
              hero-title
              w-fit
              max-w-full
              break-words
              p-0
              text-[clamp(1.5625rem,6vw,7.761rem)]
              font-bold
              leading-[clamp(0.95,1.05vw,1.2)]
              tracking-[clamp(0.025rem,0.08vw,0.075rem)]
              text-white
            "
          >
            Workflow
            <br />
            Automation
          </h1>

          {/* Description */}
          <p
            className="
              mt-[clamp(0.5rem,1vw,0.75rem)]
              w-full
              max-w-[56.25rem]
              break-words
              text-[clamp(0.875rem,1.5vw,1.125rem)]
              font-light
              leading-[clamp(1.4,1.8vw,1.625)]
              tracking-[clamp(0.0125rem,0.04vw,0.0375rem)]
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