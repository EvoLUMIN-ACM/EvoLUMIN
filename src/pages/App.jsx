/* eslint-disable no-unused-vars */
import ButtonGradient from "../assets/svg/ButtonGradient";
import Tracks from "../components/Tracks.jsx";
import Timeline from "../components/Timeline.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Faq from "../components/Faq";
import Sdg from "./sdg/sdg.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Timeline />
        <Pricing />
        <Tracks />
        {/* <Sdg /> */}
        <Sponsors/>
        <Roadmap />
        <Faq/>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
