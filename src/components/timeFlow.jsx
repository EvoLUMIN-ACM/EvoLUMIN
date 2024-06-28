import './timeFlow.css';
import NO1 from "../assets/No 1.png";
import NO2 from "../assets/No 2.png";
import NO3 from "../assets/No 3.png";
import NO4 from "../assets/No 4.png";
import NO5 from "../assets/No 5.png";
import NO6 from "../assets/No 6.png";

const Timeflow = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-5 relative">
      <div className="absolute h-4/5 w-2 bg-timeline-round left-1/2 transform -translate-x-1/2 top-5">
        <a href="#" className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg">
          <i className="fas fa-caret-up"></i>
        </a>
      </div>
      <div className="flex flex-col space-y-10">
        
        <div className="flex justify-start">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO1} alt="Step 1" className="absolute h-10 w-10 rounded-full right-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -right-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Start Registrations</span>
              <span>13<sup>th</sup> June 2024</span>
            </div>
          </section>
        </div>

        <div className="flex justify-end">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO2} alt="Step 2" className="absolute h-10 w-10 rounded-full left-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -left-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">End Registrations</span>
              <span>17<sup>th</sup> July 2024</span>
            </div>
          </section>
        </div>

        <div className="flex justify-start">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO3} alt="Step 3" className="absolute h-10 w-10 rounded-full right-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -right-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Submission Closes</span>
              <span>20<sup>th</sup> July 2024</span>
            </div>
            {/* <p className="mt-2 mb-4 text-sm">Hackathon opening ceremony will start 9:15 AM onwards.</p> */}
          </section>
        </div>

        <div className="flex justify-end">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO4} alt="Step 4" className="absolute h-10 w-10 rounded-full left-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -left-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Results Publication</span>
              <span>1<sup>st</sup> August 2024</span>
            </div>
            {/* <p className="mt-2 mb-4 text-sm">Hackathon coding period will start from 10:30 AM onwards.</p> */}
          </section>
        </div>

        {/* <div className="flex justify-start">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO5} alt="Step 5" className="absolute h-10 w-10 rounded-full right-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -right-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Grand Finale</span>
              <span>23rd-26th August 2024</span>
            </div>
            {/* <p className="mt-2 mb-4 text-sm">Session on Complete Interview Preparation by GeeksForGeeks on 11.30 AM Onwards.</p> }
          </section>
        </div> */}

        {/* <div className="flex justify-end">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO6} alt="Step 6" className="absolute h-10 w-10 rounded-full left-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -left-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Session from Postman</span>
              <span>16th July 2022</span>
            </div>
            <p className="mt-2 mb-4 text-sm">Session on APIs 101 using Postman on 4:00 PM Onwards.</p>
          </section>
        </div> */}

        <div className="flex justify-start">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO5} alt="Step 7" className="absolute h-10 w-10 rounded-full right-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -right-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Grand Finale</span>
              <span>23<sup>rd</sup>-26<sup>th</sup> August 2024</span>
            </div>
            <p className="mt-2 mb-4 text-sm">Top participants are invited to Amrita Vishwa Vidyapeetham to participate in the final round.</p>
          </section>
        </div>

        {/* <div className="flex justify-end">
          <section className="bg-timeline-round rounded-lg w-full md:w-[calc(50%-40px)] p-4 relative">
            <img src={NO2} alt="Step 8" className="absolute h-10 w-10 rounded-full left-[-60px] top-4"/>
            <div className="absolute h-4 w-4 bg-timeline-round top-7 transform rotate-45 -left-1 z-[-1]"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Hackathon Ends</span>
              <span>17th July 2022</span>
            </div>
            <p className="mt-2 mb-4 text-sm">Hackathon coding period will end on 10:30 PM.</p>
          </section>
        </div> */}
        
      </div>
    </div>
  );
}

export default Timeflow;
