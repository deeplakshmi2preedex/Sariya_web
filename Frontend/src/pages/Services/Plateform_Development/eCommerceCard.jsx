import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import supportCard from "../../../assets/services/supportCard.png";

function ECommerceCard() {
  return (
    <div
      className="
        w-full
        max-w-full
        min-w-0
        px-[clamp(1.5rem,4vw,3rem)]
        pt-[clamp(1rem,2vw,1.25rem)]
        pb-[clamp(2rem,5vw,3.75rem)]
        min-[1025px]:px-12
        min-[1025px]:pt-5
        min-[1025px]:pb-15
      "
    >
      <article
        className="
          group
          grid
          w-full
          min-w-0
          overflow-hidden
          rounded-[clamp(1.75rem,4vw,3rem)]
          grid-cols-1
          min-[1025px]:grid-cols-2
        "
      >
        {/* ================= IMAGE ================= */}
        <div
          className="
            relative
            min-h-[clamp(240px,48vw,480px)]
            w-full
            min-w-0
            overflow-hidden
            min-[1025px]:min-h-[420px]
            min-[1025px]:order-1
          "
        >
          <img
            src={supportCard}
            alt="Enterprise E-commerce Platforms"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Image Text */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              px-[clamp(1rem,4vw,1.5rem)]
            "
          >
            <h3
              className="
                w-full
                max-w-full
                break-words
                text-center
                text-[clamp(1.125rem,2.8vw,1.46rem)]
                font-semibold
                leading-[1.2]
                text-white
              "
            >
              Enterprise E-commerce Platforms
            </h3>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            flex
            min-h-[clamp(360px,52vw,480px)]
            w-full
            min-w-0
            flex-col
            bg-[#C3795E]
            p-[clamp(1.5rem,5vw,3.5rem)]
            min-[1025px]:min-h-[420px]
            min-[1025px]:order-2
            min-[1025px]:p-14
          "
        >
          <div>
            {/* Heading */}
            <h2
              className="
                w-full
                max-w-full
                break-words
                text-[clamp(1.125rem,2.8vw,2.336rem)]
                font-semibold
                leading-[1.1]
                tracking-[clamp(-0.02em,-0.04vw,-0.05em)]
                text-white
              "
            >
              Enterprise E-commerce Platforms
            </h2>

            {/* Paragraph */}
            <p
              className="
                mt-[clamp(0.75rem,1.5vw,1rem)]
                w-full
                max-w-[31.25rem]
                break-words
                text-[clamp(0.875rem,1.25vw,1rem)]
                font-light
                leading-[1.6]
                text-[#F0F0F0]
              "
            >
              Harness the power of established platforms while adding custom
              logic that sets your store apart from the competition.
            </p>

            {/* ================= BULLETS ================= */}
            <ul
              className="
                mt-[clamp(1rem,2vw,1.5rem)]
                grid
                w-full
                min-w-0
                grid-cols-1
                gap-x-[clamp(1rem,2.5vw,2rem)]
                gap-y-[clamp(0.75rem,1.5vw,1.25rem)]
                text-[clamp(0.875rem,1.25vw,1rem)]
                leading-[1.5]
                text-white
                min-[500px]:grid-cols-2
              "
            >
              {/* Shopify */}
              <li
                className="
                  relative
                  min-w-0
                  break-words
                  pl-[clamp(0.75rem,1.2vw,1rem)]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-[0.55em]
                    h-[clamp(3px,0.3vw,4px)]
                    w-[clamp(3px,0.3vw,4px)]
                    rounded-full
                    bg-white
                  "
                />

                <span className="font-semibold">Shopify:</span>
              </li>

              {/* Shopify Description */}
              <li
                className="
                  relative
                  min-w-0
                  break-words
                  pl-[clamp(0.75rem,1.2vw,1rem)]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-[0.55em]
                    h-[clamp(3px,0.3vw,4px)]
                    w-[clamp(3px,0.3vw,4px)]
                    rounded-full
                    bg-white
                  "
                />

                Highly optimized checkouts and custom Liquid themes.
              </li>

              {/* WordPress / WooCommerce */}
              <li
                className="
                  relative
                  min-w-0
                  break-words
                  pl-[clamp(0.75rem,1.2vw,1rem)]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-[0.55em]
                    h-[clamp(3px,0.3vw,4px)]
                    w-[clamp(3px,0.3vw,4px)]
                    rounded-full
                    bg-white
                  "
                />

                <span className="font-semibold">
                  WordPress / WooCommerce:
                </span>
              </li>

              {/* WordPress Description */}
              <li
                className="
                  relative
                  min-w-0
                  break-words
                  pl-[clamp(0.75rem,1.2vw,1rem)]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-[0.55em]
                    h-[clamp(3px,0.3vw,4px)]
                    w-[clamp(3px,0.3vw,4px)]
                    rounded-full
                    bg-white
                  "
                />

                Fully flexible e-commerce for content-driven brands.
              </li>
            </ul>
          </div>

          {/* ================= BUTTON ================= */}
          <div className="mt-[clamp(1.5rem,3vw,2rem)]">
            <Link
              to="/contact"
              className="
                inline-flex
                max-w-full
                shrink-0
                items-center
                justify-center
                gap-[clamp(0.375rem,0.7vw,0.75rem)]
                rounded-[clamp(0.75rem,1.5vw,1rem)]
                bg-white
                px-[clamp(1rem,2.5vw,1.5rem)]
                py-[clamp(0.625rem,1.2vw,0.75rem)]
                text-[clamp(0.75rem,1.2vw,1rem)]
                font-semibold
                leading-none
                whitespace-nowrap
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/90
                active:scale-95
              "
            >
              <span>Scale Revenue</span>

              <ArrowUpRight
                strokeWidth={2.5}
                className="
                  h-[clamp(0.8rem,1.3vw,0.9375rem)]
                  w-[clamp(0.8rem,1.3vw,0.9375rem)]
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ECommerceCard;