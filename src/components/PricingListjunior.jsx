/* eslint-disable no-unused-vars */
import { pricing } from "../constants";
import {seniorSecondaryPricing} from "../constants";

const PricingListsenior = () => {
return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
       {seniorSecondaryPricing.map((item) => (
    <div
       key={item.id}
       className="w-[15rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
     >
     <h4 className="h2 mb-4 font-semibold">{item.title}</h4>
     <br/>
     <br/>
     <p className="body-6 min-h-[3rem] mb-3 text-n-1/50">
         {item.description}
    </p>
      <div className="flex items-center h-[4.5rem] mb-6">
        {item.price && (
          <>
            <div className="h3">₹</div>
            <div className="text-[5.5rem] leading-none font-bold">
              {item.price}
            </div>
          </>
        )}
      </div>
    </div>
  ))}

   </div>
);
};

export default PricingListsenior;


