// components/Healthcare.jsx
import { useState } from "react";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const domainData = [
  {
    title: "Domain: AI",
    brief: "Develop an AI system for proactive healthcare that...",
    fullDescription: "Develop an AI system for proactive healthcare that analyzes real-time vitals, detects anomalies, predicts risks, triggers automated responses, and generates personalized health reports with visualizations. Focus on user-friendly interfaces and clear action plans for early intervention."
  },
  {
    title: "Domain: Cyber Security",
    brief: "Implement an authentication and encrypted mechanism that...",
    fullDescription: "Implement an authentication and encrypted mechanism that ensures only the authorized can communicate with implantable medical devices like pacemakers, defibrillators, and insulin pumps, preventing unauthorized access and potential malicious activities. Develop an emergency access and override system for critical situations."
  },
  {
    title: "Domain: Gamification",
    brief: "Create innovative gamified solutions for autistic individuals to...",
    fullDescription: "Create innovative gamified solutions for autistic individuals to enhance attention maintenance skills, promote facial expression recognition, foster perspective-taking abilities, and facilitate social communication."
  },
  {
    title: "Domain: IOT (Internet of Things)",
    brief: "Develop an automatic garbage alerting system to...",
    fullDescription: "Develop an automatic garbage alerting system to address plastic pollution. Suggest a tracking system with an integrated mechanism for sorting plastic trash and alerting households producing more plastic waste."
  },
  {
    title: "Domain: Application Development",
    brief: "Develop an app that supports independent living among...",
    fullDescription: "Develop an app that supports independent living among the elderly, with features like fall detection, medication reminders, virtual companionship, and access to emergency assistance."
  },
  {
    title: "Domain: Web Development",
    brief: "Develop a website to bridge communication gaps regarding...",
    fullDescription: "Develop a website to bridge communication gaps regarding healthcare needs within university hostels. Include features like ambulance availability, patient information sharing, isolation notifications, and a pharmacy connection for medicine delivery. Design user-friendly interfaces accommodating users with visual, auditory, and cognitive impairments, and a system for real-time monitoring of implantable devices for suspicious activity."
  }
];

const Healthcare = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-12 bg-n-8 text-n-1">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-sora)' }}>
          Healthcare Innovations
        </h1>
        <p className="mb-12 text-lg text-center" style={{ fontFamily: 'var(--font-sora)' }}>
          Our aim is to develop innovative solutions addressing challenges in healthcare. The solutions should be effective, user-friendly, and accessible to all. Participants can utilize a single domain or a combination of multiple domains to achieve this goal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {domainData.map((domain, index) => (
            <div
              key={index}
              className="bg-n-9 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400" style={{ fontFamily: 'var(--font-sora)' }}>
                {domain.title}
              </h2>
              <p className="mb-4 text-n-1" style={{ fontFamily: 'var(--font-sora)' }}>
                {domain.brief}
              </p>
              <div className={`absolute inset-0 bg-n-9 p-6 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-n-1" style={{ fontFamily: 'var(--font-sora)' }}>
                  {domain.fullDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400" style={{ fontFamily: 'var(--font-sora)' }}>
            Join Us in Innovating Healthcare
          </h2>
          <p className="mb-8 text-n-1" style={{ fontFamily: 'var(--font-sora)' }}>
            Be a part of our hackathon and contribute to revolutionizing healthcare through technology and innovation. Collaborate with like-minded individuals, gain new skills, and make a real impact.
          </p>
          <ButtonGradient />
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
