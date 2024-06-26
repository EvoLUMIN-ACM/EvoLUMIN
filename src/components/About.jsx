import Section from "./Section";
import Heading from "./Heading";
import { evolumin, check } from "../assets";
import { brainwaveServices } from "../constants";
import {
  Gradient
} from "./design/Services";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Arrow from "../assets/svg/Arrow";
import { benefits } from "../constants";

const About = () => {
  return (
    <Section id="about" className="relative py-0 lg:py-5 xl:py-0 pb-0 lg:pb-0 xl:pb-0">
      <div className="container">
        <br />
        <Heading
          title="About"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[40rem] mt-[-3rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-4/5 xl:w-auto">
              <img
                className="w-[40rem] h-full object-cover md:object-right"
                width={1000}
                alt="EvoLUMIN"
                height={1000}
                src={evolumin}
              />
            </div>

            <div className="relative z-1 max-w-[35rem] ml-auto">
              <h4 className="h4 mb-4">EvoLUMIN</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                EvoLumin is a national-level tech hackathon thats being conducted by the ACM Student Chapter, 
                Amritapuri. We call upon the brightest minds to converge and create impactful solutions. We 
                aim to provide participants with the opportunity to leverage their technical skills to
                tackle real-world challenges. Participants will unleash their potential, embrace
                collaboration, and spark social impact through innovative problem-solving.
              </p>
              <ul className="body-2">
                <h6 className="h6 mb-[1rem] text-n-3">
                  Event Highlights
                </h6>
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <br />

          <div className="flex flex-wrap gap-10 mb-10">
            {benefits.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            ))}
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default About;
