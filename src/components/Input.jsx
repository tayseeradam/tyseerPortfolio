import PropTypes from "prop-types"

const Input = ({type, id, placeholder, required, className= "w-full border-2 border-gray-300 p-2  rounded-md outline-none focus:border-[#546aff] focus:border-2 focus:bg-[#eef0ff]" }) => {
  return (
    <div>
      <input className={className} type={type} id={id} placeholder={placeholder} required={required}/>
    </div>
  )
}
Input.propTypes ={
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    className : PropTypes.string,
    required: PropTypes.string
}
export default Input

