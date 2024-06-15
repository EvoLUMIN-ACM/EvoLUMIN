// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import NO1 from "../assets/No 1.png";
import NO2 from "../assets/No 2.png";
import NO3 from "../assets/No 3.png";
import NO4 from "../assets/No 4.png";
import NO5 from "../assets/No 5.png";
import NO6 from "../assets/No 6.png";
import 'aos/dist/aos.css';

const Timeflow = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col mx-[40px] lg:mx-[60px] xl:mx-[120px] 2xl:mx-[240px] my-[30px] md:my-[40px] gap-x-[100px]">
      <div className="flex justify-center items-center flex-col mb-[40px] md:mb-[60px] mt-[20px]">
        <div data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="flex flex-col text-[18px] md:text-[24px] lg:text-[32px] leading-normal clash-display">
          <h2 className="font-bold text-center md:text-start">Timeline</h2>
        </div>
        <div data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="flex mt-[14px] leading-loose max-w-[355px] 2xl:max-w-[1200px] text-center text-[10px] md:text-[12px] lg:text-[14px]">
          Here is the breakdown of the time we anticipate using for the upcoming event
        </div>
      </div>

      <div data-aos='zoom-in-up' data-aos-easing='ease-in-sine' className="custom-timeline">
        {/* One */}
        <div className="custom-container custom-left-container">
          <Image
            src={NO1}
            alt="logo"
            width={53}
            height={53}
            className="custom-img"
          />
          <div className="flex flex-col justify-start items-start md:justify-end md:items-end">
            <h2 className="text-[12px] md:text-[16px] text-left md:text-right leading-normal font-bold text-cpink">Hackathon Announcement</h2>
            <p className="flex md:text-sm text-left md:text-right text-[10px]">
              The getlinked tech hackathon 1.0 is formally announced to the general public and the teams begin to get ready to register
            </p>
          </div>
        </div>

        <div className="custom-container custom-right-container -mt-[15px] md:-mt-[85px] lg:-mt-[70px]">
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] font-bold text-cpink">November 18, 2023</h2>
          </div>
        </div>

        {/* Two */}
        <div className="custom-container custom-right-container mt-[50px]">
          <Image
            src={NO2}
            alt="logo"
            width={53}
            height={53}
            className="custom-img"
          />
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] leading-normal font-bold text-cpink">Teams Registration begins</h2>
            <p className="flex text-[10px] md:text-sm">
              Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>

        <div className="custom-container custom-left-container -mt-[15px] md:-mt-[85px] lg:-mt-[70px]">
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] text-left md:text-right font-bold text-cpink">November 18, 2023</h2>
          </div>
        </div>

        {/* Three */}
        <div className="custom-container custom-left-container mt-[60px]">
          <Image
            src={NO3}
            alt="logo"
            width={53}
            height={53}
            className="custom-img"
          />
          <div className="flex flex-col justify-start items-start md:justify-end md:items-end">
            <h2 className="text-[12px] md:text-[16px] text-left md:text-right leading-normal font-bold text-cpink">Team Registration ends</h2>
            <p className="flex md:text-sm text-left md:text-right text-[10px]">
              Interested participants are no longer allowed to register
            </p>
          </div>
        </div>

        <div className="custom-container custom-right-container -mt-[15px] md:-mt-[50px] lg:-mt-[50px]">
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] font-bold text-cpink">November 18, 2023</h2>
          </div>
        </div>

        {/* Four */}
        <div className="custom-container custom-right-container mt-[50px]">
          <Image
            src={NO4}
            alt="logo"
            width={53}
            height={53}
            className="custom-img"
          />
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] leading-normal font-bold text-cpink">Announcement of the accepted teams and ideas</h2>
            <p className="flex text-[10px] md:text-sm">
              All teams whose ideas have been accepted into getlinked tech hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>

        <div className="custom-container custom-left-container -mt-[15px] md:-mt-[110px] lg:-mt-[85px]">
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] text-left md:text-right font-bold text-cpink">November 18, 2023</h2>
          </div>
        </div>

        {/* Five */}
        <div className="custom-container custom-left-container mt-[60px]">
          <Image
            src={NO5}
            alt="logo"
            width={53}
            height={53}
            className="custom-img"
          />
          <div className="flex flex-col justify-start items-start md:justify-end md:items-end">
            <h2 className="text-[12px] md:text-[16px] text-left md:text-right leading-normal font-bold text-cpink">Getlinked Hackathon 1.0 Officially Begins</h2>
            <p className="flex md:text-sm text-left md:text-right text-[10px]">
              Accepted teams can now proceed to build their ground breaking skill driven solutions 
            </p>
          </div>
        </div>

        <div className="custom-container custom-right-container -mt-[15px] md:-mt-[85px] lg:-mt-[50px]">
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] font-bold text-cpink">November 18, 2023</h2>
          </div>
        </div>

        {/* Six */}
        <div className="custom-container custom-right-container mt-[50px]">
        <Image
            src={NO6}
            alt="logo"
            width={53}
            height={53}
            className="custom-img"
          />
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] leading-normal font-bold text-cpink">Demo Day</h2>
            <p className="flex text-[10px] md:text-sm">
              Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>

        <div className="custom-container custom-left-container -mt-[15px] md:-mt-[90px] lg:-mt-[70px]">
          <div className="flex flex-col">
            <h2 className="text-[12px] md:text-[16px] text-left md:text-right font-bold text-cpink">November 18, 2023</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeflow;
