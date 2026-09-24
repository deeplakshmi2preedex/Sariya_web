import faqImg from "../../assets/FAQ/faqImg.png";
import Navbar from "../../components/Navbar";

export default function Hero() {
  return (
    <section
      className="
        hero-bg
        relative
        flex
         min-h-[clamp(190px,32vw,580px)]
         min-[1025px]:min-h-[780px]
        w-full
        max-w-full
        items-center
        overflow-hidden
        border-b
        border-white/5
      "
      style={{
        backgroundImage: `url(${faqImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= NAVBAR ================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[clamp(1rem,3vw,2.5rem)]
          z-50
          w-full
          px-[clamp(0.75rem,4vw,7.5rem)]
        "
      >
        <Navbar />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          page-width
          relative
          z-10
          w-full
          max-w-full
          px-[clamp(0.75rem,4vw,3rem)]
          pt-[clamp(5rem,12vw,10rem)]
        "
      >
        <h1
          className="
            hero-title
            w-fit
            max-w-full
            break-words
            p-[clamp(0.5rem,3vw,3rem)]
            text-[clamp(2rem,9vw,7.75rem)]
            font-bold
            leading-[0.9]
            tracking-[clamp(0.01em,0.1vw,0.075em)]
            text-white
          "
        >
          FAQ
        </h1>
      </div>
    </section>
  );
}