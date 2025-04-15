import PropTypes from 'prop-types'

const Button = ({ onClick, btnText, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
};
Button.propTypes ={
  onClick : PropTypes.func ,
  btnText :PropTypes.string,
  className : PropTypes.string
}
export default Button
