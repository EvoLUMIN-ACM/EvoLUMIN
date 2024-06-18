/* eslint-disable no-unused-vars */
import Section from "./Section";
import { stars } from "../assets";
import Heading from "./Heading";
import PricingListsenior from "./PricingListsenior";
import PricingListjunior from "./PricingListjunior";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden relative pt-0 lg:pt-0 xl:pt-0 pb-0 lg:pb-0 xl:pb-0" id="pricing">
      <div className="container relative z-2">
        <br /><br /><br /><br />
        <Heading className="lg:mb-10" fontWeight="font-bold" title="Prize Pool💸" />

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
