import { bluewhite } from "../../assets";
import { notificationImages } from "../../constants";

const Notification2 = ({ className, title, text }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center justify-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={bluewhite}
        width={70}
        height={70}
        alt="image"
        className="rounded-xl"
      />
  
      <div className="flex-1 text-center">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <h6 className="mb-1 font-semibold text-base">{text}</h6>
      </div>
    </div>
  );
  
};

export default Notification2;
