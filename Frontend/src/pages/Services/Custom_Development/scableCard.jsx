import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import scableCard from "../../../assets/services/scableCard.png";

function ScalableCard() {
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
            src={scableCard}
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
              group-hover:scale-[1.03]
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
              px-[clamp(1.5rem,6vw,4rem)]
            "
          >
            <h3
              className="
                max-w-full
                text-center
                break-words
                text-[clamp(1.125rem,2.5vw,1.46rem)]
                font-semibold
                leading-[1.2]
                tracking-[clamp(0.01em,0.04vw,0.025em)]
                text-white
              "
            >
              Scalable Full-Stack Frameworks
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
            min-[1025px]:p-14
            min-[1025px]:order-2
          "
        >
          <div className="min-w-0 flex-1">
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
              Scalable Full-Stack Frameworks
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
              We build interactive, high-performance web applications using the
              industry's most robust ecosystem.
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
              {/* React */}
              <Bullet>
                <span className="font-semibold">React/Next.js</span>
              </Bullet>

              {/* React Description */}
              <Bullet>
                Instant interactions and lightning-fast user experiences.
              </Bullet>

              {/* Node */}
              <Bullet>
                <span className="font-semibold">Node.js / Express:</span>
              </Bullet>

              {/* Node Description */}
              <Bullet>
                Scalable backend logic to handle massive concurrent traffic.
              </Bullet>
            </ul>
          </div>

          {/* ================= BUTTON ================= */}
          <div
            className="
              mt-[clamp(1.5rem,4vw,2rem)]
              w-full
              shrink-0
            "
          >
            <Link
              to="/contact"
              className="
                inline-flex
                max-w-full
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
              <span>Efficiency Audit</span>

              <ArrowUpRight
                className="
                  h-[clamp(0.8rem,1.3vw,0.9375rem)]
                  w-[clamp(0.8rem,1.3vw,0.9375rem)]
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ================= BULLET ================= */

function Bullet({ children }) {
  return (
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

      <span>{children}</span>
    </li>
  );
}

export default ScalableCard;