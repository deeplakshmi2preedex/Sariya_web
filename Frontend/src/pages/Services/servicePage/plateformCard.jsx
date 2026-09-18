import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import supportCard from "../../../assets/services/supportCard.png";

function PlateformCard() {
  return (
    <div className="rounded-3xl px-12 pb-15">
      <article
        className="
          group
          overflow-hidden
          rounded-[17px]
          lg:grid
          lg:grid-cols-2
        "
      >
        {/* ================= LEFT : IMAGE ================= */}

        <div
          className="
            flex
            min-h-[320px]
            flex-col
            justify-between
            bg-[#01102D]
            p-10
            sm:p-10
            lg:min-h-[420px]
            lg:p-14
          "
        >
          <div>
            {/* Heading */}
            <h2
              className="
                text-[clamp(18px,4vw,37.3754px)]
                font-semibold
                leading-[1.1]
                tracking-[-0.8px]
                text-white
              "
            >
             Master Your Ecosystem
            </h2>

            {/* ================= BULLETS ================= */}
            <ul
              className="
                mt-6
                grid
                // grid-cols-1
                gap-x-8
                gap-y-5
                text-[clamp(14px,2vw,16px)]
                leading-[1.5]
                text-white
                // lg:grid-cols-2
              "
            >
              <li className="relative pl-4">
                <span
                  className="
                    absolute
                    left-0
                    top-[7px]
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-white
                  "
                />

                <span className="font-semibold">Shopify & Shopify Plus</span>
              </li>

              <li className="relative pl-4">
                <span
                  className="
                    absolute
                    left-0
                    top-[7px]
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-white
                  "
                />
                Wix/Wix Studio Mastery
              </li>

              <li className="relative pl-4">
                <span
                  className="
                    absolute
                    left-0
                    top-[7px]
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-white
                  "
                />
                <span className="font-semibold"></span>Webflow Enterprise
              </li>

              <li className="relative pl-4">
                <span
                  className="
                    absolute
                    left-0
                    top-[7px]
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-white
                  "
                />
                WordPress
              </li>
               <li className="relative pl-4">
                <span
                  className="
                    absolute
                    left-0
                    top-[7px]
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-white
                  "
                />
                WooCommerce
              </li>
            </ul>
          </div>

          {/* ================= BUTTON ================= */}
          <div className="mt-8">
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-6
                py-3
                text-[clamp(12px,2vw,16px)]
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/90
                active:scale-95
              "
            >
              Get Started
              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* ================= RIGHT : CONTENT ================= */}
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[420px]">
          <img
            src={supportCard}
            alt="Scalable Full-Stack Frameworks"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
            "
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Image Text */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <h3
              className="
                text-center
                text-[clamp(18px,2vw,23.3597px)]
                font-semibold
                leading-tight
                text-white
              "
            >
             PLATFORM <br /> DEVELOPMENT
            </h3>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PlateformCard;
