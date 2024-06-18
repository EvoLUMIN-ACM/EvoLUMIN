import {check } from "../assets";
import { collabContent} from "../constants";
import Button from "./Button";
import Section from "./Section";
import Timeflow from "./timeFlow";

const Timeline = () => {
  return (
    <Section crosses id="timeline" className="relative lg:py-5 xl:py-[5.8rem]">
      <div className="container lg:flex">
        <br /><br /><br /><br />
        <div className="max-w-[25rem]">
          <h1 className="h3 mb-4 md:mb-8">
            Timeline
          </h1>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Try it now</Button>
        </div>

        <Timeflow /> 
      </div>
    </Section>
  );
};

export default Timeline;
