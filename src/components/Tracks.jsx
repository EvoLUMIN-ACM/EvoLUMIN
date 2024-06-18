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
  { icon: LuBrainCircuit, color: "text-red-500", text: "AI Solutions", hoverText: "Develop an AI system for proactive healthcare that analyzes real-time vitals, detects anomalies, predicts risks, triggers automated responses, and generates personalized health reports with visualizations. Focus on user-friendly interfaces and clear action plans for early intervention." },
  { icon: BsShieldLockFill, color: "text-blue-500", text: "Cyber Security", hoverText: "Implement an authentication and encrypted mechanism that ensures only the authorized can communicate with implantable medical devices like pacemakers, defibrillators, and insulin pumps, preventing unauthorized access and potential malicious activities. Develop an emergency access and override system for critical situations." },
  { icon: IoGameController, color: "text-green-500", text: "Gamification", hoverText: "Create innovative gamified solutions for autistic individuals to enhance attention maintenance skills, promote facial expression recognition, foster perspective-taking abilities, and facilitate social communication." },
  { icon: IoHardwareChip, color: "text-yellow-500", text: "IoT (Internet of Things)", hoverText: "Develop an automatic garbage alerting system to address plastic pollution. Suggest a tracking system with an integrated mechanism for sorting plastic trash and alerting households producing more plastic waste." },
  { icon: FaMobileAlt, color: "text-purple-500", text: "App Development", hoverText: "Develop an app that supports independent living among the elderly, with features like fall detection, medication reminders, virtual companionship, and access to emergency assistance." },
  { icon: FaLaptop, color: "text-orange-500", text: "Web Development", hoverText: "Develop a website to bridge communication gaps regarding healthcare needs within university hostels. Include features like ambulance availability, patient information sharing, isolation notifications, and a pharmacy connection for medicine delivery. Design user-friendly interfaces accommodating users with visual, auditory, and cognitive impairments, and a system for real-time monitoring of implantable devices for suspicious activity." }
];

const sdg = [
  { icon: LuBrainCircuit, color: "text-red-500", text: "AI Solutions", hoverText: "Develop an AI-powered system to enhance governance and justice by improving transparency, efficiency, and accountability within institutions. (SDG 16)" },
  { icon: BsShieldLockFill, color: "text-blue-500", text: "Cyber Security", hoverText: "Develop comprehensive cybersecurity solutions tailored for smart cities, focusing on safeguarding critical infrastructure against cyber threats to ensure urban resilience and safety. (SDG 11)" },
  { icon: IoGameController, color: "text-green-500", text: "Gamification", hoverText: "Use gamification to engage users in marine conservation. Through interactive games, raise awareness about sustainable fisheries, marine pollution reduction, and ocean health preservation. (SDG 14)" },
  { icon: IoHardwareChip, color: "text-yellow-500", text: "IoT (Internet of Things)", hoverText: "Design an IoT waste management system with mobile apps for the real-time monitoring and reporting to prevent health hazards from overflowing trash bins in public areas. (SDG 11)" },
  { icon: FaMobileAlt, color: "text-purple-500", text: "App Development", hoverText: "Develop a mobile app analyzing educational records for rural and specially-abled students, offering personalized learning plans and resources to enhance academic performance and ensure equitable education access. (SDG 4)" },
  { icon: FaLaptop, color: "text-orange-500", text: "Web Development", hoverText: "Create a web app to monitor Ganga River health, collecting real-time data on water quality, pollution, and biodiversity to support restoration efforts and promoting sustainable practices. (SDG 14)" }
];

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
    <Section id="tracks" className="relative py-0 lg:py-5 xl:py-0">
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
              To know more about SDG, visit <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">UNESCO`&apos;`s official page</a>.
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
          </div>
        </div>

        <Gradient />
      </div>
    </Section>
  );
};

export default Tracks;
