import { useState } from "react";
import {
  HeartPulse,
  BriefcaseBusiness,
  ShoppingCartMinus,
  Building2,
  Utensils,
  Plane,
  Scale,
  GraduationCap,
  BadgeIndianRupee,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  ["Healthcare", HeartPulse, "bg-red-50 text-red-500"],
  ["Professional", BriefcaseBusiness, "bg-purple-50 text-purple-600"],
  ["E-commerce", ShoppingCartMinus, "bg-blue-50 text-blue-600"],
  ["Real Estate", Building2, "bg-orange-50 text-orange-500"],
  ["Restaurant", Utensils, "bg-green-50 text-green-600"],
  ["Travel", Plane, "bg-blue-50 text-blue-500"],
  ["Legal", Scale, "bg-blue-50 text-blue-500"],
  ["Finance", BadgeIndianRupee, "bg-blue-50 text-yellow-500"],
  ["Education", GraduationCap, "bg-blue-50 text-pink-500"],
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  return (
    <section className="pt-15 pl-10 pr-10">
      <div className="container-page text-center">
        <h2 className="text-[clamp(20px,4vw,50px)] font-bold text-white">
          Industries We Serve
        </h2>

        {/* Horizontal Scroll */}
        <div
          className="mt-8 overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex w-max gap-4 px-1 pb-2">
            {industries.map(([name, Icon, style]) => {
              const isActive = activeIndustry === name;

              return (
                <div
                  key={name}
                  onClick={() => setActiveIndustry(name)}
                  className={`
                    flex h-40 w-72 shrink-0 cursor-pointer
                    items-center gap-5 rounded-2xl
                    border
                    bg-[#111112]
                    px-6 py-6 text-left
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-blue-500"
                        : "border-white/10 hover:border-blue-500"
                    }
                  `}
                >
                  <span
                    className={`flex h-22 w-22 shrink-0 items-center justify-center rounded-full ${style}`}
                  >
                    <Icon size={32} />
                  </span>

                  <span className="text-[clamp(14px,2vw,20px)] text-white">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-7 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[clamp(9px, 4vw, 16px)] font-bold text-black"
          >
            Get Started <ArrowUpRight size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
