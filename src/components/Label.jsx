import PropTypes from "prop-types";


const Label = ({htmlFor, text, className="text-lg text-gray-800 font-medium"}) => {
  return (
    <div>
      <label className={className} htmlFor={htmlFor}>{text}</label>
    </div>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
}
export default Label;
