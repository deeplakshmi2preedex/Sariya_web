import { useEffect, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        return (prevIndex + 1) % sections.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        w-full
        px-[clamp(16px,3vw,40px)]
        py-[clamp(32px,5vw,40px)]
      "
    >
      {/* VIEWPORT */}
      <div className="w-full overflow-hidden rounded-[30px]">
        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="
                productivity-card
                relative
                flex
                min-h-[420px]
                w-full
                min-w-full
                flex-shrink-0
                items-end
                overflow-hidden
                rounded-7xl
                border-none
                bg-cover
                bg-center

                p-[clamp(20px,3.2vw,40px)]

                sm:min-h-[480px]
                md:min-h-[520px]
                lg:min-h-[550px]
                xl:min-h-[600px]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    rgba(0,0,0,0.75) 0%,
                    rgba(0,0,0,0.40) 30%,
                    rgba(0,0,0,0.40) 70%,
                    rgba(0,0,0,0.75) 100%
                  ),
                  url(${section.image})
                `,
              }}
            >
              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10
                  w-full
                  max-w-4xl
                "
              >
                <h2
                  className="
                    m-0
                    text-[clamp(32px,3.2vw,50px)]
                    font-bold
                    leading-[1.2]
                    tracking-[-1px]
                  "
                >
                  {section.title}
                </h2>

                <p
                  className="
                    mt-[clamp(12px,1.2vw,16px)]
                    max-w-3xl
                    text-[clamp(14px,1.1vw,17px)]
                    leading-[1.6]
                    text-[#BCC7DB]
                  "
                >
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}