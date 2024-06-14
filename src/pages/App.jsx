import ButtonGradient from "../assets/svg/ButtonGradient";
import Tracks from "../components/Tracks.jsx";
import TimeLine from "../components/timeline/Timeline";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Sdg from "./sdg/sdg.jsx";
import Health from "./health/health.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Tracks />
        <TimeLine />
        <Sdg />
        <Health/>
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
