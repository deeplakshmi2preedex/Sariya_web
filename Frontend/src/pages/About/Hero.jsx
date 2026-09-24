import heroImg from "../../assets/About/heroImg.png";
import Navbar from "../../components/Navbar.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        hero-bg
        relative
        flex
       min-h-[clamp(190px,36vw,600px)]
       min-[1025px]:min-h-[780px]
        w-full
        max-w-full
        items-center
        overflow-hidden
        border-b
        border-white/5
      "
      style={{
        backgroundImage: `url(${heroImg})`,
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
           text-[clamp(25px,6.355vw,125px)]
           min-[1025px]:text-[125px]
            font-bold
            leading-[0.9]
            tracking-[clamp(0.01em,0.1vw,0.075em)]
            text-white
            max-[750px]:mx-auto
            max-[750px]:text-center
          "
        >
          About Us
        </h1>
      </div>
    </section>
  );
}
