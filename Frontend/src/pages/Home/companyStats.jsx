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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const previousTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="p-10">
      <div className="container-page overflow-hidden rounded-4xl border border-white/10 bg-[#070707]">
        <div className="grid md:grid-cols-2">

          {/* Testimonial */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 p-10 sm:p-12">
            {/* Testimonial Slider */}
            <div className="relative min-h-[350px] w-full overflow-hidden">
              <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {testimonials.map((item, index) => (
                  <div key={index} className="min-w-full shrink-0">
                    {/* Quote Icon */}
                    <i className="fa-solid fa-quote-left text-[30px] text-blue-300/70 pt-10"></i>

                    {/* Testimonial */}
                    <blockquote className="mt-7 max-w-[620px] text-[clamp(15px,4vw,30px)] font-bold leading-[1.2] tracking-[1.2px] text-white">
                      {item.text}
                    </blockquote>

                    {/* Profile */}
                    <div className="mt-7 flex items-center gap-3">
                      <div className="h-15 w-15 shrink-0 rounded-full bg-[#7CA1F2]" />

                      <div>
                        <p className="text-[clamp(9px,4vw,14px)] font-bold text-white">
                          {item.name}
                        </p>

                        <p className="text-[clamp(9px,4vw,14px)] text-[#f0f0f0]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
              <button
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                <ArrowLeft size={25} />
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                <ArrowRight size={25} />
              </button>
            </div>
          </div>


          {/* Company Stats */}
          <div
            className="bg-cover bg-center p-5 pt-35"
            style={{ backgroundImage: `url(${stats})` }}
          >
            <div className="p-7 bg-[radial-gradient(circle_at_20%_30%,#D2DBD8_0%,#30393F_35%,#1A1F24_65%,#D2DBD8_100%)] rounded-4xl">
              <p className="text-[clamp(9px,3vw,16px)] leading-[1.7] tracking-[1.5px] text-[#ffffff]">
                We've proudly served 6+ countries and supported clients across
                20+ platforms. With a 100% completion ratio, we've successfully
                delivered for 200+ clients.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-7">
                {[
                  ["60+", "Countries"],
                  ["20+", "Platforms"],
                  ["100%", "Completion Ratio"],
                  ["200+", "Projects"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white p-4 text-black"
                  >
                    <div className="text-[clamp(15px,4vw,25px)] text-black">
                      {value}
                    </div>

                    <div className="mt-1 text-[clamp(15px,4.5vw,18px)] text-black">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  );
}
