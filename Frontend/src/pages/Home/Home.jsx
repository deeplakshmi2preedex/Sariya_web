import Hero from "./Hero.jsx";
import Problems from "./Ready_made.jsx";
import Productivity from "./Productivity.jsx";
import DevelopmentTypes from "./development_types.jsx";
import Process from "./Process.jsx";
import CompanyStats from "./companyStats.jsx";
import Industries from "./industries_web.jsx";
import Contact from "./Contact.jsx";
import Navbar from "../../components/Navbar.jsx";

function Home() {
  return (
    <>
      <div className="home-shell">
        <div className="main-container">
          <div
            className="pt-[clamp(12px,2vw,24px)]  padding-left: clamp(20px, 5vw, 60px);
  padding-right: clamp(20px, 5vw, 60px);"
          >
            <Navbar />
          </div>
          <div>
            <Hero />
          </div>
        </div>
      </div>

      <Problems />
      <Productivity />
      <DevelopmentTypes />
      <Process />
      <CompanyStats />
      <Industries />
      <Contact />
    </>
  );
}

export default Home;
