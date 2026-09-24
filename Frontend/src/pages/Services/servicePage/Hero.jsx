function Hero() {
  return (
    <section
      className="
        relative
        min-h-[clamp(190px,32vw,580px)]
        min-[1025px]:min-h-[700px]
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
          w-full
          max-w-full
          items-end
          px-[clamp(1rem,2vw,2rem)]
          pb-[clamp(1rem,2vw,2.5rem)]
          pt-[clamp(2rem,5vw,2.5rem)]
          min-[1025px]:px-0
          min-[1025px]:pb-0
          min-[1025px]:pt-10
          min-[1025px]:pl-8
          
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
            min-[1025px]:pt-20
          "
        >
          {/* ================= BLUE LINE ================= */}
          <div
            className="
              mb-[clamp(0.5rem,1.5vw,1.25rem)]
              h-[clamp(4px,0.55vw,8px)]
              w-[clamp(120px,20vw,260px)]
              max-w-full
              bg-[#4e94f9]
            "
          />

          {/* ================= TITLE ================= */}
          <h1
            className="
              hero-title
              w-fit
              max-w-full
              break-words
              p-0
              text-[clamp(25px,6vw,125.451px)]
              min-[1025px]:text-[125.451px]
              font-bold
              leading-[clamp(0.95,1vw,1.2)]
              tracking-[clamp(0.4px,0.08vw,1.2px)]
              text-white
            "
          >
            Services
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              mt-[clamp(0.5rem,1vw,0.75rem)]
              w-full
              max-w-[900px]
              break-words
              text-[clamp(14px,1.5vw,18px)]
              font-light
              leading-[clamp(1.4,1.8vw,1.625)]
              tracking-[clamp(0.2px,0.04vw,0.6px)]
              text-white
            "
          >
            Custom engineered solutions built to scale your business
            operations and remove manual bottlenecks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;