import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { FaCheckCircle } from "react-icons/fa";
import { Gradient } from "./design/Services";

const rulesData = [
  {
    title: 'Eligibility',
    content: 'The competition is open to college students and higher secondary students. Students from any field of study and year of study are eligible to participate.',
  },
  {
    title: 'Team Formation',
    content: (
      <ul className="list-none list-inside">
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Teams must consist of a minimum of 2 members (including 1 team leader) and a maximum of 4 members.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Teams must work on a single track; no mixing of tracks is allowed.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Teams must consist of either school or college students only; mixed-category teams are prohibited.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Participants without a team can use the EvoLUMIN Discord server to form teams.</li>
      </ul>
    ),
  },
  {
    title: 'Registration Details',
    content: (
      <ul className="list-none list-inside">
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Registration closes on 17th July 2024 (Thursday).</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Registration must be done through Devfolio.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Ensure that all registration details, including spelling and credentials, are accurate.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Ensure that you provide a valid email and phone number for contact.</li>
      </ul>
    ),
  },
  {
    title: 'Idea Submission',
    content: (
      <ul className="list-none list-inside">
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Ideation phase closes on 20th July 2024 (Saturday) at 11:59pm (IST).</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Each team can submit only one idea, which can be edited until the ideation phase closes.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> If multiple track submissions are made, only the most recent one will be evaluated.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Participants are allowed to utilize a combination of domains to implement their solution.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Reusing or resubmitting past work is strictly prohibited; teams found doing so will be disqualified.</li>
      </ul>
    ),
  },
  {
    title: 'Submission Deadlines',
    content: (
      <ul className="list-none list-inside">
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Late submissions will not be entertained.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> The provided PowerPoint (PPT) template should be used.</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> The presentation may contain a maximum of 5 slides (excluding team details). It should include:</li>
        <ul className="list-none list-inside ml-6">
          <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Track and domain</li>
          <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Problem statement</li>
          <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Idea title</li>
          <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Idea description (proposed solution)</li>
        </ul>
      </ul>
    ),
  },
  {
    title: 'Important Dates',
    content: (
      <ul className="list-none list-inside">
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Registration Deadline: 17th July 2024</li>
        <li className="flex items-start"><FaCheckCircle className="mr-2 text-blue-500" /> Ideation Phase Deadline: 20th July 2024</li>
      </ul>
    ),
  },
  {
    title: 'Contact Information',
    content: 'For any queries or additional information, please visit our Discord server.',
  },
  {
    title: 'Final Note',
    content: 'We look forward to your innovative ideas and enthusiastic participation. This competition is a great opportunity to showcase your creativity, teamwork, and problem-solving skills. Best of luck to all participants!',
  },
];

const Rules = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Section id="rules" className="relative py-5 lg:py-20 pb-0 lg:pb-0 xl:pb-10">
      <div className="container">
        <br />
        <Heading title="Rules and Regulations" />
        <div className="space-y-6">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="relative p-6 bg-gradient-to-r from-white/80 to-white/50 text-black rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => toggleExpand(index)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center text-black">
                {rule.title}
                <span className="ml-2">{expanded === index ? '-' : '+'}</span>
              </h3>
              {expanded === index && (
                <div className="mt-2 text-sm text-black">
                  {rule.content}
                </div>
              )}
              <Gradient />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Rules;
