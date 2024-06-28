/* eslint-disable no-unused-vars */
import Heading from "./Heading";
import Section from "./Section";
import { service2, service1, check } from "../assets";
import { PhotoChatMessage, Gradient } from "./design/Services";
import { FaMobileAlt, FaLaptop } from 'react-icons/fa';
import { useState } from 'react';
import { LuBrainCircuit } from "react-icons/lu";
import { BsShieldLockFill } from "react-icons/bs";
import { IoGameController, IoHardwareChip } from "react-icons/io5";
import { PiDevicesBold } from "react-icons/pi";
import { brainwaveServices } from "../constants";

const health = [
  { icon: LuBrainCircuit, color: "text-red-500", text: "AI Solutions", hoverText: "Develop an AI system that analyzes real-time vitals, detects anomalies, predicts risks, triggers responses, and generates personalized health reports, emphasizing user-friendly interfaces and early intervention." },
  { icon: BsShieldLockFill, color: "text-blue-500", text: "Cyber Security", hoverText: "Implement secure authentication and encryption for implantable devices like pacemakers, ensuring authorized access only, preventing unauthorized use, and creating an emergency override system for critical situations." },
  { icon: IoGameController, color: "text-green-500", text: "Gamification", hoverText: "Create innovative gamified solutions for autistic individuals to enhance attention maintenance skills, promote facial expression recognition, foster perspective-taking abilities, and facilitate social communication." },
  { icon: IoHardwareChip, color: "text-yellow-500", text: "IoT (Internet of Things)", hoverText: "Develop an IoT system for farmers to prevent sunstroke by monitoring real-time environmental conditions and health metrics, alerting risks, and suggesting health maintenance solutions during fieldwork in sunlight." },
  { icon: FaMobileAlt, color: "text-purple-500", text: "App Development", hoverText: "Develop an app that supports independent living among the elderly, with features like fall detection, medication reminders, virtual companionship, and access to emergency assistance." },
  { icon: FaLaptop, color: "text-orange-500", text: "Web Development", hoverText: "Create a university hostel healthcare website with ambulance tracking, patient info sharing, isolation alerts, pharmacy delivery, ensuring access to users with impairments and real time monitoring of devices." }
];

const sdg = [
  { icon: FaMobileAlt, color: "text-purple-500", text: "App Development", hoverText: "Create a mobile app for rural and special-needs students with personalized learning plans to improve academic performance. (SDG 4)" },
  { icon: IoGameController, color: "text-green-500", text: "Gamification", hoverText: "Design a gamified platform that simulates real-world industrial scenarios to effectively train and develop skills for the workforce in industrial settings. (SDG 9)" },
  { icon: LuBrainCircuit, color: "text-red-500", text: "AI Solutions", hoverText: "Create an AI tool that leverages smart meter data to optimize energy use for homes and businesses, promoting efficiency and sustainability. (SDG 7)" },
 { icon: BsShieldLockFill, color: "text-blue-500", text: "Cyber Security", hoverText: "Develop an automated incident response platform for transportation systems to handle cyber threats swiftly with real-time alerts and countermeasures. (SDG 9)" },
  // { icon: FaLaptop, color: "text-orange-500", text: "Web Development", hoverText: "Create a web app to monitor Ganga River health, collecting real-time data on water quality, pollution, and biodiversity to support restoration efforts and promoting sustainable practices. (SDG 14)" }
];

const sdg2 = [
  { icon: IoHardwareChip, color: "text-yellow-500", text: "IoT (Internet of Things)", hoverText: "Create an IoT waste segregation system for public areas, ensuring efficient sorting and disposal to minimize health hazards. (SDG 11)" },
]

const agri = [
  { icon: LuBrainCircuit, color: "text-red-500", text: "AI Solutions", hoverText: "Develop a platform for real-time crop analysis, allowing farmers to upload images for instant identification of crop types, weeds, diseases, pests, and nutrient deficiencies. The goal is to streamline decision-making and resource management, enhancing agricultural efficiency." },
  { icon: IoHardwareChip, color: "text-yellow-500", text: "IoT (Internet of Things)", hoverText: "The agricultural sector requires a transformative solution integrating IoT, AI, and ML to monitor water resources, soil fertility, and crop health. Develop an automated system providing real-time insights and tailored recommendations to farmers which is essential for optimising resources and enhancing productivity sustainably." },
  { icon: PiDevicesBold, color: "text-purple-500", text: "Web/App Development", hoverText: "Farmers face obstacles like unpredictable weather, pests, and market volatility, hindering productivity. Limited access to digital tools exacerbates these challenges, preventing effective crop management and market navigation. Develop accessible web/mobile apps can empower farmers, enhancing productivity and sustainability." },
];

const Tracks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Section id="tracks" className="relative pt-0 lg:pt-0 xl:pt-0 pb-0 lg:pb-0 xl:pb-0">
      <style>{`
        .glowing-border {
          border: 2px solid #00f;
          box-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
        }
      `}</style>
      <div className="container relative z-2">
        <br /><br /><br /><br />
        <Heading
          className="md:max-w-md lg:max-w-2xl lg:mb-5"
          title="Tracks"
        />

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-10">
              <img
                src={service2}
                className="h-[30rem] w-[30rem]"
                width={200}
                height={200}
                alt="robot"
              />
            </div>

            <div id="agriculture" className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Agriculture</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Possible innovation in agriculture...
              </p>
              <div className="grid grid-cols-1 gap-6 mt-4">
                {agri.map(({ icon: Icon, color, text, hoverText }, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index + 100)}
                    onMouseLeave={handleMouseLeave}
                    className={`relative transition-all duration-300 ease-in-out flex items-center justify-center h-[13rem] w-full border border-n-1/10 rounded-lg p-4 transform ${hoveredIndex === index + 100 ? 'scale-105 glowing-border' : ''}`}
                    style={{
                      background: `linear-gradient(to right, #131342, #0f0c17)`,
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                    }}
                  >
                    {hoveredIndex === index + 100 ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-white p-4 rounded shadow-lg text-white transition-opacity duration-300 ease-in-out opacity-100"
                        style={{
                          background: `linear-gradient(to right, #131342, #0f0c17)`,
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        {hoverText}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out" style={{ opacity: hoveredIndex === index + 100 ? 0 : 1 }}>
                        <Icon className={`h-12 w-12 ${color}`} />
                        <p className="mt-2 text-center text-sm">{text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-5 px-4 xl:px-8">
              <h4 className="h4 mb-4">Healthcare</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Domains in healthcare...
              </p>
              <div className="grid grid-cols-1 gap-6 mt-4">
                {health.map(({ icon: Icon, color, text, hoverText }, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`relative transition-all duration-300 ease-in-out flex items-center justify-center h-40 w-full border border-n-1/10 rounded-lg p-4 transform ${hoveredIndex === index ? 'scale-105 glowing-border' : ''}`}
                    style={{
                      background: `linear-gradient(to right, #131342, #0f0c17)`,
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                    }}
                  >
                    {hoveredIndex === index ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-white p-4 rounded shadow-lg text-white transition-opacity duration-300 ease-in-out opacity-100"
                        style={{
                          background: `linear-gradient(to right, #131342, #0f0c17)`,
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        {hoverText}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out" style={{ opacity: hoveredIndex === index ? 0 : 1 }}>
                        <Icon className={`h-12 w-12 ${color}`} />
                        <p className="mt-2 text-center text-sm">{text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <br /><br /><br />

        <div className="relative z-1 flex items-center justify-center h-[46rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] mt-[-3rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              className="w-full h-full object-cover md:object-right"
              width={1286}
              alt="Smartest AI"
              height={740}
              src={service1}
            />
          </div>

          {/* sdg */}

          <div className="relative z-1 max-w-[50rem] text-center">
            <h4 className="h4 mb-4">Sustainable Development Goals</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              To know more about SDG, visit <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">UNESCO's official page</a>.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-4 ">
              {sdg.slice(0, 3).map(({ icon: Icon, color, text, hoverText }, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative transition-all duration-300 ease-in-out flex items-center justify-center h-40 w-[25rem] border border-n-1/10 rounded-lg p-4 transform ${hoveredIndex === index ? 'scale-105 glowing-border' : ''}`}
                  style={{
                    background: `linear-gradient(to right, #202075, #131342)`,
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {hoveredIndex === index ? (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-white p-4 rounded shadow-lg text-white transition-opacity duration-300 ease-in-out opacity-100"
                      style={{
                        background: `linear-gradient(to right, #202075, #131342)`,
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      {hoverText}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out" style={{ opacity: hoveredIndex === index ? 0 : 1 }}>
                      <Icon className={`h-12 w-12 ${color}`} />
                      <p className="mt-2 text-center text-sm">{text}</p>
                    </div>
                  )}
                </div>
              ))}
              {sdg.slice(3, 6).map(({ icon: Icon, color, text, hoverText }, index) => (
                <div
                  key={index + 3}
                  onMouseEnter={() => handleMouseEnter(index + 3)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative transition-all duration-300 ease-in-out flex items-center justify-center h-40 w-[25rem] border border-n-1/10 rounded-lg p-4 transform ${hoveredIndex === index + 3 ? 'scale-105 glowing-border' : ''}`}
                  style={{
                    background: `linear-gradient(to right, #202075, #131342)`,
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {hoveredIndex === index + 3 ? (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-white p-4 rounded shadow-lg text-white transition-opacity duration-300 ease-in-out opacity-100"
                      style={{
                        background: `linear-gradient(to right, #202075, #131342)`,
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      {hoverText}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out" style={{ opacity: hoveredIndex === index + 3 ? 0 : 1 }}>
                      <Icon className={`h-12 w-12 ${color}`} />
                      <p className="mt-2 text-center text-sm">{text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              {sdg2.slice(0, 5).map(({ icon: Icon, color, text, hoverText }, index) => (
                <div
                  key={index + 4}
                  onMouseEnter={() => handleMouseEnter(index + 4)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative transition-all duration-300 ease-in-out flex items-center justify-center h-40 w-[25rem] border border-n-1/10 rounded-lg p-4 transform ${hoveredIndex === index + 4 ? 'scale-105 glowing-border' : ''}`}
                  style={{
                    background: `linear-gradient(to right, #202075, #131342)`,
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {hoveredIndex === index + 4 ? (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-white p-4 rounded shadow-lg text-white transition-opacity duration-300 ease-in-out opacity-100"
                      style={{
                        background: `linear-gradient(to right, #202075, #131342)`,
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      {hoverText}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out" style={{ opacity: hoveredIndex === index + 4 ? 0 : 1 }}>
                      <Icon className={`h-12 w-12 ${color}`} />
                      <p className="mt-2 text-center text-sm">{text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Gradient />
      </div>
    </Section>
  );
};

export default Tracks;
