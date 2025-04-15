import BookmarkManagerImage from "../assets/Bookmark Manager.png";
import Login from "../assets/Login.png"; 
import Calculator from "../assets/Calculator.png";
import Tracker from "../assets/Tracker.png";


function Projects() {
  return (
    <main id="projects" className="min-h-screen flex flex-col items-center justify-center pt-[6rem] gap-6 py-8">
      <h1 className="text-4xl font-semibold font-serif text-gray-800">Projects</h1>
      <div className="w-full flex flex-wrap items-center gap-8 justify-center">

        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[300px] shadow-2xl">
          <img src={Login} alt="image" className="object-cover w-full h-[85%]" />
          <a href="https://note-app-frontend-ruddy.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="text-center text-2xl hover:text-gray-200 p-2 text-white bg-blue-800 hover:bg-blue-700 font-serif">
            Not App
          </a>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[300px] shadow-2xl">
          <img src={BookmarkManagerImage} alt="image" className="object-cover w-full h-[85%]" />
          <a href="https://bookmark-s.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="text-center text-2xl hover:text-gray-200 p-2 text-white bg-blue-800 hover:bg-blue-700 font-serif">
            Bookmark Manager
          </a>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[300px] shadow-2xl">
          <img src={Calculator} alt="image" className="object-cover w-full h-[85%]" />
          <a href="https://tayseeradam.github.io/claculator/" target="_blank" rel="noopener noreferrer"
             className="text-center text-2xl hover:text-gray-200 p-2 text-white bg-blue-800 hover:bg-blue-700 font-serif">
            Calculator
          </a>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[300px] shadow-2xl">
          <img src={Tracker} alt="image" className="object-cover w-full h-[85%]" />
          <a href="https://ishage-suliman.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="text-center text-2xl hover:text-gray-200 p-2 text-white bg-blue-800 hover:bg-blue-700 font-serif">
            Task-Tracker
          </a>
        </div>

      </div>
    </main>
  );
}

export default Projects;