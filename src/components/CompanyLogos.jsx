import { titlecompanyLogos, diamondcompanyLogos, goldcompanyLogos } from "../constants";
import Heading from "./Heading"; // Import the Heading component from its source file

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <Heading fontWeight="font-bold" title="Sponsors🎉" />

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-blue-600">Title Sponsors</h2>
        <hr className="border-blue-600 my-4" />
        <ul className="flex flex-wrap justify-center space-x-4">
          {titlecompanyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[10rem]" key={index}>
              <img src={logo} width={250} height={50} alt={`Title Sponsor ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-purple-600">Diamond Sponsors</h2>
        <hr className="border-purple-600 my-4" />
        <ul className="flex flex-wrap justify-center space-x-4">
          {diamondcompanyLogos.map((logo, index) => (
            <li className="flex items-center justify-center h-[8.5rem]" key={index}>
              <img src={logo} width={200} height={40} alt={`Diamond Sponsor ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-yellow-600">Gold Sponsors</h2>
        <hr className="border-yellow-600 my-4" />
        <ul className="flex flex-wrap justify-center space-x-4">
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

export default CompanyLogos;
