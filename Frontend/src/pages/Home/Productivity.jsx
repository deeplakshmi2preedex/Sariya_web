import { useEffect, useRef } from "react";

import EmployeeProduc from "../../assets/Home/EmployeeProduc.jpg";
import cosmetics from "../../assets/Home/cosmetics.png";
import Team from "../../assets/Home/Team.png";
import Corporate from "../../assets/Home/Corporate.png";
import businessOwner from "../../assets/Home/businessOwner.png";
import logistics from "../../assets/Home/logistics.png";
import handbag from "../../assets/Home/handbag.png";

const sections = [
  {
    image: EmployeeProduc,
    title: (
      <>
        Employee <br /> Productivity
      </>
    ),
    text: `Purpose built tools eliminate operational bottlenecks by integrating
    disjointed communication channels. Reduce manual data entry, accelerate
    project turnarounds, and drastically boost overall workplace output
    efficiency.`,
  },
  {
    image: cosmetics,
    title: "Cosmetics",
    text: `Tailored digital platforms help beauty brands manage complex product
    lines effortlessly. Enhance your virtual features, automate restock
    alerts, and build engaging applications for modern consumers.`,
  },
  {
    image: Team,
    title: "Team Development",
    text: `Custom internal portals empower teams through targeted training
    modules and performance tracking. Foster collaborative environments,
    streamline onboarding processes, and unlock the true potential of
    employees.`,
  },
  {
    image: Corporate,
    title: "Corporate",
    text: `Custom internal portals empower teams through targeted training
    modules and performance tracking. Foster collaborative environments,
    streamline onboarding processes, and unlock the true potential of
    employees.`,
  },
  {
    image: businessOwner,
    title: "Business Owner",
    text: `Dedicated dashboards provide founders with actionable insights and
    comprehensive financial oversight. Automate repetitive administrative
    tasks, allowing visionary leaders to focus entirely on expanding market
    presence.`,
  },
  {
    image: logistics,
    title: "Logistics",
    text: `Bespoke applications revolutionize transport networks through precise
    route mapping and fleet tracking. Reduce operational costs, improve
    delivery speeds, and ensure seamless communication across global chains.`,
  },
  {
    image: handbag,
    title: "Hand Bags",
    text: `Custom software streamlines inventory management for handbag
    retailers. Track seasonal trends, optimise supply chains, and deliver
    personalized shopping experiences that drive sales and brand loyalty.`,
  },
];

export default function Productivity() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      const card = slider.querySelector(".productivity-card");

      if (!card) return;

      const cardWidth = card.offsetWidth;

      const nextPosition = slider.scrollLeft + cardWidth + 24;

      if (nextPosition >= slider.scrollWidth - slider.clientWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollTo({
          left: nextPosition,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 p-10 sm:px-6 md:px-8 lg:px-10">
      <div
        ref={sliderRef}
        className="
          flex
          w-full
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-2
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="
              productivity-card
              relative
              flex
              min-h-[420px]
              w-[88vw]
              min-w-[88vw]
              flex-shrink-0
              snap-center
              items-end
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-cover
              bg-center
              p-5

              sm:min-h-[480px]
              sm:w-[75vw]
              sm:min-w-[75vw]
              sm:p-7

              md:min-h-[520px]
              md:w-[65vw]
              md:min-w-[65vw]
              md:p-8

              lg:min-h-[550px]
              lg:w-[calc(100vw-80px)]
              lg:min-w-[calc(100vw-80px)]
              lg:p-10

              xl:w-[1350px]
              xl:min-w-[1350px]
            "
            style={{
              backgroundImage: `linear-gradient(
                0deg,
                rgba(0,0,0,.82),
                rgba(0,0,0,.08)
              ), url(${section.image})`,
            }}
          >
            <div className="relative z-10 w-full max-w-4xl">
              <h2
                className="
                  m-0
                  text-[32px]
                  font-bold
                  leading-[1.05]
                  tracking-[-1px]

                  sm:text-[38px]

                  md:text-[44px]

                  lg:text-[50px]
                "
              >
                {section.title}
              </h2>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-[14px]
                  leading-[1.6]
                  text-[#BCC7DB]

                  sm:text-[15px]

                  md:text-[16px]

                  lg:text-[17px]
                "
              >
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
