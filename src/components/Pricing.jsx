/* eslint-disable no-unused-vars */
import Section from "./Section";
import { stars } from "../assets";
import Heading from "./Heading";
import PricingListsenior from "./PricingListsenior";
import PricingListjunior from "./PricingListjunior";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading fontWeight="font-bold" title="Prize Pool💸" />

        <div className="relative">
          <PricingListjunior />
          <LeftLine />
          <RightLine />
          <br/>
        </div>

        <div className="relative">
          <PricingListsenior />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10"></div>
      </div>
    </Section>
  );
};

export default Pricing;
