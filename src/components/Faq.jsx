// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaMicrophone, FaUsers, FaBullhorn, FaHeart, FaTrophy, FaImages } from 'react-icons/fa';

const Faq = () => {
  return (
    <section id="faq" className="intro section-padding">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="section-title-header">
            <br /><br /><br /><br />
            <h2 className="section-title text-6xl font-semibold mb-4">FAQs</h2>
            <p className="text-lg">Answers to the most frequently asked questions!</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="single-intro-text bg-white rounded-lg shadow-md p-6 flex items-center">
            <FaMicrophone className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-timeline-round text-lg font-bold">Who can participate?</h3>
              <br/>
              <p className="text-gray-600">Our hackathon is designed to inspire and challenge higher secondary school and college students to participate and showcase their innovative skills.</p>
            </div>
          </div>
          <div className="single-intro-text bg-white rounded-lg shadow-md p-6 flex items-center">
            <FaUsers className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-timeline-round text-lg font-semibold">How much will it cost?</h3>
              <br/>
              <p className="text-gray-600">There will be no participation fee, but a nominal fee will be charged for the finalists coming to the campus.</p>
            </div>
          </div>
          <div className="single-intro-text bg-white rounded-lg shadow-md p-6 flex items-center">
            <FaBullhorn className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-timeline-round text-lg font-semibold">How can I apply?</h3>
              <br/>
              <p className="text-gray-600">The registration can be done by clicking the register button <a href="#" className="text-blue-500 underline">here</a> or through Devfolio. Registrations end on 11<sup>th</sup> July 2024.</p>
            </div>
          </div>
          <div className="single-intro-text bg-white rounded-lg shadow-md p-6 flex items-center">
            <FaHeart className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className=" text-timeline-round text-lg font-semibold">What if I don`&apos;`t know how to code?</h3>
              <br/>
              <p className="text-gray-600">No worries! Interest in learning and working with technology is much more important than your current experience level.</p>
            </div>
          </div>
          <div className="single-intro-text bg-white rounded-lg shadow-md p-6 flex items-center">
            <FaTrophy className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-timeline-round text-lg font-semibold">What are the prizes to be won?</h3>
              <br/>
              <p className="text-gray-600">Exciting prizes and incentives will be announced soon. Stay tuned for further updates!</p>
            </div>
          </div>
          <div className="single-intro-text bg-white rounded-lg shadow-md p-6 flex items-center">
            <FaImages className="text-5xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-timeline-round text-lg font-semibold">Can we apply as a team?</h3>
              <br/>
              <p className="text-gray-600">Yes! Teams of 2-4 people are encouraged. Aim for a mix of people with design and development skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
