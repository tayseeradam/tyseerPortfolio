import Button from "./Button";
import PropTypes from "prop-types";

const Card = ({
  skillName,
  skillLevel,
  skillBgColor,
  skillBorderColor,
  skillLevelColor,
  skillIcon,
  skillIconStyle,
  skillNameColor,
}) => {
  return (
    <div
      className=" bg-gray-400 w-60 max-sm:w-[80vw] h-32 rounded-[10px] space-y-3 p-3 
      border-y-[1px] border-gray-400 hover:border-x-[1px] hover:border-gray-400
       hover:-translate-y-3 
       transition-all duration-500  cursor-pointer group hover:shadow-xl shadow-gray-400 nnn"
    >
      <div className="flex justify-between ">
        <div className={`${skillIconStyle} text-5xl`}>{skillIcon}</div>
        <h2 className={`font-bold text-2xl text-white ${skillNameColor}`}>{skillName}</h2>
      </div>
      <div className="flex justify-center">
        <Button
          btnText={skillLevel}
          className={`${skillBgColor} ${skillBorderColor} ${skillLevelColor} w-fit py-1 px-2 border-[2px] rounded-full`}
        />
      </div> 
    </div>
  );
};
Card.propTypes = {
  skillName: PropTypes.string,
  skillNameColor: PropTypes.string,
  skillLevel: PropTypes.string,
  skillBgColor: PropTypes.string,
  skillBorderColor: PropTypes.string,
  skillLevelColor: PropTypes.string,
  skillIcon: PropTypes.string,
  skillIconStyle: PropTypes.string,
};

export default Card;
