import { bluewhite } from "../assets";

const Notification = ({ className, title, text }) => {
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
        className="rounded-x1"
      />
  
      <div className="flex-1 text-center">
        <h7 className="mb-1 font-semibold text-base">{title}</h7><br />
        <h7 className="mb-1 font-semibold text-base">{text}</h7>
      </div>
    </div>
  );
  
};

export default Notification;
