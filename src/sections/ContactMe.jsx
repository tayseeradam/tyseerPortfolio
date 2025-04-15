import profile from '../assets/profile.jpg';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import Input from '../components/Input';
import Label from '../components/Label';
import Button from '../components/Button';

const ContactMe = () => {
  return (
    <main className="bg-gray-200 flex md:items-center md:justify-center py-16 px-4 ">
   
       
      <div id="contactMe" className="max-w-5xl mx-auto w-full bg-white flex flex-col md:flex-row border border-gray-200
      justify-center items-center rounded-[30px] shadow-lg p-4 md:p-10">
               

        <div className="w-full md:w-2/5 flex flex-col items-center space-y-6 md:space-y-8 ">
        
          <img className="w-[150px] h-[150px] object-cover rounded-full" src={profile} alt="Profile" />
          <div className="flex flex-col items-center space-y-4">
            <p className="font-bold text-xl text-blue-800 font-serif">Follow Me:</p>
            <div className=" w-full flex text-gray-600 space-x-3">
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-full w-[35px] h-[35px] flex justify-center items-center" title="Github" href="https://github.com/tayseeradam" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl" />
              </a>
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-full w-[35px] h-[35px] flex justify-center items-center" title="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl" />
              </a>
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-full w-[35px] h-[35px] flex justify-center items-center" title="Facebook" href="https://www.facebook.com/profile.php?id=100010069958213" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl" />
              </a>
              <a className="hover:border-gray-600 border-2 border-gray-400 duration-500 rounded-full w-[35px] h-[35px] flex justify-center items-center" title="Instagram" href="https://www.instagram.com/tayseersuliman?igshMWd2puNjRpOA" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="md:text-2xl" />
              </a>
            </div>
            <div className="space-y-1 ">
              <p className="font-bold text-xl text-gray-800 text-center font-serif">Email Or Text Me:</p>
              <a className="text-blue-700 flex gap-2" href="mailto:tayseeradam25@gmail.com" title="Go to Email" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="inline text-xl text-gray-600 text-center" /> tayseeradam25@gmail.com
              </a>
              <a className="text-gray-700 font-bold" href="https://wa.me/qr/C2AOCPYUMQHWI1" title="Go to WhatsApp" target="_blank" rel="noopener noreferrer">

                <FaWhatsapp className="inline text-3xl text-4x text-gray-600 mx-1 w-[30px] h-[30px]"  /> +250727162841
              </a>
            </div>
          </div>
        </div>
        <form className="w-full md:w-3/5 mt-8 md:mt-0 md:space-y-1 pt-[3rem] ">
   <div className="w-full flex flex-col-reverse md:flex-row justify-center">
    
  <h1 className="text-xl font-semibold text-center font-serif bg-gray-400 hover:bg-gray-500 text-white rounded-md md:shadow-lg  w-full  mx-auto ">
    Contact Me    😊
  </h1>
</div>



          <Label htmlFor="fullName" text="Full Name:" />
          <Input type="text" id="fullName" placeholder="Your Full Name" required />

          <Label htmlFor="email" text="Email Address:" />
          <Input type="email" id="email" placeholder="Your Email Address" required />

          <Label htmlFor="phoneNum" text="Phone Number:" />
          <Input type="number" id="phoneNum" placeholder="Your Phone Number" required />

          <Label htmlFor="message" text="How can I help You?" />
          <textarea
            className="w-full h-[150px] border-2 border-gray-300 rounded-md 
            outline-none shadow-sm focus:border-[#364eee] focus:bg-[#eef0ff] p-2"
            id="message"
            placeholder="Write Your Message Here..."
            required
          />

          <div className="flex justify-center">
            <Button btnText="Submit" className="w-full py-2 px-8
             bg-blue-800 rounded-md text-white hover:bg-blue-700" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactMe;
