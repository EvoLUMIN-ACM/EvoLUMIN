import Heading from "./Heading";
import Section from "./Section";
import { service2 } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
} from "./design/Services";
import { FaMobileAlt, FaLaptop } from 'react-icons/fa';
import { useState } from 'react';
import { LuBrainCircuit } from "react-icons/lu";
import { BsShieldLockFill } from "react-icons/bs";
import { IoGameController, IoHardwareChip } from "react-icons/io5";

const iconData = [
  { icon: LuBrainCircuit, color: "text-red-500", text: "AI Solutions", hoverText: "Develop an AI system for proactive healthcare that analyzes real-time vitals, detects anomalies, predicts risks, triggers automated responses, and generates personalized health reports with visualizations. Focus on user-friendly interfaces and clear action plans for early intervention." },
  { icon: BsShieldLockFill, color: "text-blue-500", text: "Cyber Security", hoverText: "Implement an authentication and encrypted mechanism that ensures only the authorized can communicate with implantable medical devices like pacemakers, defibrillators, and insulin pumps, preventing unauthorized access and potential malicious activities. Develop an emergency access and override system for critical situations." },
  { icon: IoGameController, color: "text-green-500", text: "Gamification", hoverText: "Create innovative gamified solutions for autistic individuals to enhance attention maintenance skills, promote facial expression recognition, foster perspective-taking abilities, and facilitate social communication." },
  { icon: IoHardwareChip, color: "text-yellow-500", text: "IoT (Internet of Things)", hoverText: "Develop an automatic garbage alerting system to address plastic pollution. Suggest a tracking system with an integrated mechanism for sorting plastic trash and alerting households producing more plastic waste." },
  { icon: FaMobileAlt, color: "text-purple-500", text: "App Development", hoverText: "Develop an app that supports independent living among the elderly, with features like fall detection, medication reminders, virtual companionship, and access to emergency assistance." },
  { icon: FaLaptop , color: "text-orange-500", text: "Web Development", hoverText: "Develop a website to bridge communication gaps regarding healthcare needs within university hostels. Include features like ambulance availability, patient information sharing, isolation notifications, and a pharmacy connection for medicine delivery. Design user-friendly interfaces accommodating users with visual, auditory, and cognitive impairments, and a system for real-time monitoring of implantable devices for suspicious activity." }
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
    <Section id="tracks">
      <div className="container relative z-2">
        <br />
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Tracks"
        />

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service2}
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt="robot"
              />
            </div>

            <div id="agriculture" className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Agriculture</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Automatically enhance your photos using our AI app&apos;s
                photo editing feature. Try it now!
              </p>
            </div>

            <PhotoChatMessage />
          </div>

          <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Healthcare</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Create an innovative healthcare solution that is effective, user-friendly, and easily 
                accessible. Focus on addressing current challenges in the field, using either a single 
                domain or a combination of many domains to achieve this goal.
              </p>
              <div className="grid grid-cols-1 gap-6 mt-4">
                {iconData.map(({ icon: Icon, color, text, hoverText }, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="relative transition-all duration-300 ease-in-out flex items-center justify-center h-40 w-full border border-n-1/10 rounded-lg p-4"
                    style={{
                      background: `linear-gradient(to right, #131342, #0f0c17)`,
                      transition: 'background-color 0.3s ease',
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

        <Gradient />
      </div>
    </Section>
  );
};

export default Tracks;
