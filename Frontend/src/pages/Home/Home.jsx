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
      <div className="container">
        <div className="main-container pt-6 pl-25">
          <Navbar />

          <main>
            <Hero />
          </main>
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
