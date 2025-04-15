

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className=" flex flex-col justify-center md:items-center gap-4">
      <h1 className="text-6xl md:font-extrabold transition md:animate-pulse duration-1000 ">404</h1>
      <h2 className="text-5xl font-bold text-red-700 font-serif">Page not found</h2>
      <Button
        className="bg-green-900 text-[18px] text-white
         py-4 px-12 rounded-full hover:bg-green-800 
         focus:ring-[2px] focus:ring-green-700 focus:ring-offset-2 outline-none"
        onClick={handleClick}
        btnText="Go Home"
      />
    </div>
  );
}

export default NotFound
