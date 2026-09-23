import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import supportCard from "../../../assets/services/supportCard.png";

function CustomCard() {
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
          min-[700px]:grid-cols-2
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
            rounded-t-[clamp(1.25rem,3vw,2rem)]
            min-[700px]:rounded-l-[clamp(1.25rem,3vw,2rem)]
            min-[700px]:rounded-t-none
            min-[1025px]:min-h-[420px]
          "
        >
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
              group-hover:scale-[1.03]
            "
          />

          <div className="absolute inset-0 bg-black/30" />

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
                text-[clamp(1.125rem,2.5vw,2.359625rem)]
                font-normal
                leading-[1.15]
                tracking-[clamp(0.01em,0.05vw,0.04em)]
                text-white
              "
            >
              {/* MOBILE / TABLET */}
              <span className="inline min-[1025px]:hidden">
                CUSTOM DEVELOPMENT
              </span>

              {/* DESKTOP */}
              <span className="hidden min-[1025px]:block">
                CUSTOM
                <br />
                DEVELOPMENT
              </span>
            </h3>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            flex
            min-h-[clamp(300px,45vw,420px)]
            w-full
            min-w-0
            flex-col
            rounded-b-[clamp(1.25rem,3vw,2rem)]
            bg-[#10011D]
            p-[clamp(1.5rem,5vw,3.5rem)]
            min-[700px]:rounded-b-none
            min-[700px]:rounded-r-[clamp(1.25rem,3vw,2rem)]
            min-[1025px]:min-h-[420px]
            min-[1025px]:p-14
          "
        >
          <div className="min-w-0 flex-1">
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
              The High-Performance Stack
            </h2>

            <ul
              className="
                mt-[clamp(1rem,2vw,1.5rem)]
                grid
                w-full
                min-w-0
                grid-cols-1
                gap-x-[clamp(0.75rem,2.5vw,2rem)]
                gap-y-[clamp(0.75rem,1.5vw,1.25rem)]
                text-[clamp(0.875rem,1.25vw,1rem)]
                leading-[1.5]
                text-white
                min-[500px]:grid-cols-2
              "
            >
              <Bullet text="React/Next.js" bold />
              <Bullet text="Node.js/Express" />
              <Bullet text="Python (Django)" />
              <Bullet text="Postgres/MySQL" />
              <Bullet text="MongoDB" />
              <Bullet text="Tailwind" />
              <Bullet text="PHP/HTML5/CSS3" />
              <Bullet text="Bootstrap" />
            </ul>
          </div>

          {/* ================= BUTTON ================= */}
          <div
            className="
              mt-[clamp(1.75rem,4vw,2rem)]
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
                gap-[clamp(0.375rem,1vw,0.75rem)]
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
              <span>Get Started</span>

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

function Bullet({ text, bold = false }) {
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

      <span className={bold ? "font-semibold" : ""}>{text}</span>
    </li>
  );
}

export default CustomCard;