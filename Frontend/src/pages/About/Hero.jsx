import heroImg from "../../assets/About/heroImg.png";
import Navbar from "../../components/Navbar.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative flex min-h-[780px] items-center overflow-hidden border-b border-white/5"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* NAVBAR */}
      <div className="absolute left-0 right-0 top-10 z-50 px-30">
        <Navbar />
      </div>

      {/* HERO CONTENT */}
      <div className="page-width relative z-10 pt-20">
        <h1 className="hero-title max-w-4xl p-12 text-[clamp(25px,9vw,124px)] font-bold leading-none tracking-[1.2px] text-white">
          About Us
        </h1>
      </div>
    </section>
  );
}
