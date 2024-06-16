import { titlecompanyLogos, diamondcompanyLogos, goldcompanyLogos } from "../constants";
import Heading from "./Heading"; // Import the Heading component from its source file
/* eslint-disable no-unused-vars */
import { stars } from "../assets";
/* eslint-disable no-unused-vars */
import { curve, heroBackground, robot } from "../assets";

const Sponsors = ({ className }) => {
  return (
    <div className={`${className} relative`}>
      <Heading fontWeight="font-bold" title="Sponsors🎉" />

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-blue-600">Title Sponsors 🏆</h2>
        <ul className="flex flex-wrap justify-center space-x-4 mt-4">
          {titlecompanyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[10rem]" key={index}>
              <img src={logo} width={250} height={50} alt={`Title Sponsor ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-purple-600">Diamond Sponsors 💎</h2>
        <ul className="flex flex-wrap justify-center space-x-4 mt-4">
          {diamondcompanyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[8.5rem]" key={index}>
              <img src={logo} width={200} height={40} alt={`Diamond Sponsor ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-600">Gold Sponsors 🥇</h2>
        <ul className="flex flex-wrap justify-center space-x-4 mt-4">
          {goldcompanyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[7rem]" key={index}>
              <img src={logo} width={150} height={30} alt={`Gold Sponsor ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
