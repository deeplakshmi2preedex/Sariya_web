import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import stats from "../../assets/Home/stats.png";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus faucibus ex sapien."`,
    name: "Sarah Jenkins",
    role: "COO, Global Logistics Inc.",
  },
  {
    text: `"Saiya Designs didn't just give us a website; they gave us our business back. We saved 15 hours a week per employee through their custom ERP."`,
    name: "Sarah Jenkins",
    role: "COO, Global Logistics Inc.",
  },
];

export default function CompanyStats() {
  const [current, setCurrent] = useState(0);

  /* ================= AUTO SLIDER ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  /* ================= PREVIOUS ================= */

  const previousTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  /* ================= NEXT ================= */

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      className="
        w-full
        max-w-full
        overflow-hidden
        px-[clamp(3%,4vw,5%)]
        py-[clamp(3%,5vw,7%)]
      "
    >
      
      {/* MAIN CONTAINER */}
      

      <div
        className="
          container-page
          mx-auto
          w-full
          max-w-full
          overflow-hidden
          rounded-[clamp(1.25rem,3vw,3rem)]
          border
          border-white/10
          bg-[#070707]
          lg:min-h-[clamp(520px,38vw,650px)]
        "
      >
        
        {/* MAIN GRID */}

        <div
          className="
            grid
            w-full
            min-w-0
            grid-cols-1
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          
          {/* LEFT — TESTIMONIAL */}

          <div
            className="
              relative
              min-w-0
              w-full
              overflow-hidden
              bg-gradient-to-br
              from-blue-900
              to-blue-950
              p-[clamp(1.25rem,4vw,3rem)]
              lg:min-h-[clamp(520px,38vw,650px)]
            "
          >
            
            {/* SLIDER VIEWPORT */}

            <div
              className="
                relative
                w-full
                min-w-0
                overflow-hidden
              "
            >
             
              {/* SLIDER TRACK */}

              <div
                className="
                  flex
                  w-full
                  min-w-0
                  transition-transform
                  duration-700
                  ease-in-out
                "
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="
                      basis-full
                      grow-0
                      shrink-0
                      min-w-0
                      overflow-hidden
                    "
                  >
                    {/* ================================================= */}
                    {/* QUOTE ICON */}
                    {/* ================================================= */}

                    <i
                      className="
                        fa-solid
                        fa-quote-left
                        inline-block
                        pt-[clamp(0rem,1vw,0.75rem)]
                        text-[clamp(1.25rem,2.5vw,1.875rem)]
                        leading-none
                        text-blue-300/70
                      "
                    />

                    {/* ================================================= */}
                    {/* TESTIMONIAL TEXT */}
                    {/* ================================================= */}

                    <blockquote
                      className="
                        mt-[clamp(1rem,2.5vw,1.75rem)]
                        w-full
                        max-w-full
                        break-words
                        whitespace-normal
                        text-[clamp(1rem,2.2vw,1.875rem)]
                        font-bold
                        leading-[clamp(1.3,1.8vw,1.5)]
                        tracking-[clamp(0.01em,0.08vw,0.075em)]
                        text-white
                      "
                    >
                      {item.text}
                    </blockquote>

                    {/* ================================================= */}
                    {/* PROFILE */}
                    {/* ================================================= */}

                    <div
                      className="
                        mt-[clamp(1.25rem,3vw,1.75rem)]
                        flex
                        w-full
                        min-w-0
                        items-center
                        gap-[clamp(0.5rem,1.2vw,0.75rem)]
                      "
                    >
                      {/* PROFILE CIRCLE */}

                      <div
                        className="
                          aspect-square
                          w-[clamp(2.5rem,4.5vw,3.75rem)]
                          shrink-0
                          rounded-full
                          bg-[#7CA1F2]
                        "
                      />

                      {/* PROFILE INFORMATION */}

                      <div className="min-w-0">
                        <p
                          className="
                            break-words
                            text-[clamp(0.7rem,1vw,0.875rem)]
                            font-bold
                            leading-[1.4]
                            text-white
                          "
                        >
                          {item.name}
                        </p>

                        <p
                          className="
                            break-words
                            text-[clamp(0.65rem,1vw,0.875rem)]
                            leading-[1.4]
                            text-[#f0f0f0]
                          "
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================================================= */}
            {/* NAVIGATION ARROWS */}
            {/* ================================================= */}

            <div
              className="
                absolute
                right-[clamp(1rem,3vw,2rem)]
                bottom-[clamp(1rem,3vw,2rem)]
                z-20
                flex
                gap-[clamp(0.35rem,0.8vw,0.5rem)]
              "
            >
              {/* PREVIOUS BUTTON */}

              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="
                  flex
                  aspect-square
                  w-[clamp(2rem,3.5vw,2.5rem)]
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  transition-all
                  duration-300
                  hover:bg-blue-100
                "
              >
                <ArrowLeft
                  className="
                    h-[clamp(0.9rem,1.8vw,1.25rem)]
                    w-[clamp(0.9rem,1.8vw,1.25rem)]
                  "
                />
              </button>

              {/* NEXT BUTTON */}

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="
                  flex
                  aspect-square
                  w-[clamp(2rem,3.5vw,2.5rem)]
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  transition-all
                  duration-300
                  hover:bg-blue-100
                "
              >
                <ArrowRight
                  className="
                    h-[clamp(0.9rem,1.8vw,1.25rem)]
                    w-[clamp(0.9rem,1.8vw,1.25rem)]
                  "
                />
              </button>
            </div>
          </div>

          
          {/* RIGHT — COMPANY STATS */}
          

          <div
            className="
              relative
              min-w-0
              w-full
              bg-cover
              bg-center
              bg-no-repeat
              p-[clamp(1rem,3vw,1.5rem)]
              pt-[clamp(2rem,7vw,8rem)]
            "
            style={{
              backgroundImage: `url(${stats})`,
            }}
          >
            
            {/* STATS INNER CONTAINER */}
            
            <div
              className="
                w-full
                rounded-3xl
                backdrop-blur-[20px] bg-black/40 border border-white/10
                shadow-xl
                p-[clamp(20px,3vw,32px)]
              "
            >
             
              {/* DESCRIPTION */}
             

              <p
                className="
                  w-full
                  max-w-full
                  break-words
                  whitespace-normal
                  text-[clamp(0.75rem,1.2vw,1rem)]
                  leading-[clamp(1.45,2vw,1.7)]
                  tracking-[clamp(0.01em,0.08vw,0.075em)]
                  text-white
                "
              >
                We've proudly served 6+ countries and supported clients across
                20+ platforms. With a 100% completion ratio, we've successfully
                delivered for 200+ clients.
              </p>

              {/* ================================================= */}
              {/* STATS GRID */}
              {/* ================================================= */}

              <div
                className="
                  mt-[clamp(1rem,2.5vw,1.5rem)]
                  grid
                  grid-cols-1
                  gap-[clamp(0.6rem,1.8vw,1.5rem)]
                  sm:grid-cols-2
                "
              >
                {[
                  ["60+", "Countries"],
                  ["20+", "Platforms"],
                  ["100%", "Completion Ratio"],
                  ["200+", "Projects"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="
                      flex
                      min-w-0
                      w-full
                      flex-col
                      justify-center
                      rounded-[clamp(0.75rem,1.8vw,1.25rem)]
                      bg-white
                      p-[clamp(0.75rem,1.5vw,1rem)]
                    "
                  >
                    {/* VALUE */}

                    <div
                      className="
                        break-words
                        text-[clamp(1rem,2.2vw,1.6rem)]
                        leading-[1.2]
                        text-black
                      "
                    >
                      {value}
                    </div>

                    {/* LABEL */}

                    <div
                      className="
                        mt-[clamp(0.2rem,0.5vw,0.4rem)]
                        break-words
                        text-[clamp(0.7rem,1.2vw,1.125rem)]
                        leading-[1.3]
                        text-black
                      "
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}