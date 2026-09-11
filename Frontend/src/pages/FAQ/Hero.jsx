import faqImg from "../../assets/FAQ/faqImg.png";
import Navbar from "../../components/Navbar";

export default function Hero() {
  return (
    <section
      className="hero-bg relative flex min-h-[780px] items-center overflow-hidden border-b border-white/5"
      style={{
        backgroundImage: `url(${faqImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* NAVBAR */}
      <div className="absolute left-0 right-0 top-10 z-50 px-30">
        <Navbar />
      </div>
      <div className="page-width relative z-10 pt-20">
        <h1 className="hero-title max-w-4xl p-12 text-[clamp(25px,9vw,124px)] font-bold leading-none tracking-[1.2px] text-white">
          FAQ
        </h1>
      </div>
    </section>
  );
}
