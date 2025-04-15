import Card from '../components/Card';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import { SiExpress } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { VscLayoutMenubar } from 'react-icons/vsc';
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { SiPostman } from "react-icons/si";


const Skills = () => {
  const skills = [
    {  
      skillName: "Html",
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <FaHtml5 />,
      skillIconStyle: "text-orange-700 group-hover:text-orange-600"
    },
    {  
      skillName: "Css",
      skillLevel: "Intermediate",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-yellow-800",
      skillIcon: <FaCss3Alt />,
      skillIconStyle: " size-[24] text-[#1d3bb2] group-hover:text-[#264de4]"
    },
    {  
      skillName: "JavaScript",
      skillLevel: "Intermediate",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-yellow-700",
      skillIcon: <DiJavascript1 />,
      skillIconStyle: "text-[#e1c300] group-hover:text-[#f7df1e]"
    },
    {  
      skillName: "React",
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <FaReact />,
      skillIconStyle: "text-[#56c3e1] group-hover:text-[#61dafb]"
    },
    {  
      skillName: "Git",
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <FaGit />,
      skillIconStyle: "text-[#56c3e1] group-hover:text-[#61dafb]"
    },
    {  
      skillName: "Github",
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <FaGithub />,
      skillIconStyle: "text-[#56c3e1] group-hover:text-[#61dafb]"
    },
    {  
      skillName: "Tailwind Css", 
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-gray-800",
      skillIcon: <SiTailwindcss />,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "Responsiveness", 
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <VscLayoutMenubar/>,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "Node.js", 
      skillLevel: "Intermediate",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-yellow-800",
      skillIcon: <SiNodedotjs />,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "Express", 
      skillLevel: "Beginner",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-red-800",
      skillIcon: <SiExpress />,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "Database", 
      skillLevel: "Beginner",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-red-800",
      skillIcon: <FaDatabase />,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "Postman", 
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <SiPostman/>,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "MongDB", 
      skillLevel: "Advance",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-green-800",
      skillIcon: <SiMongodb/>,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
    {  
      skillName: "Mongoose", 
      skillLevel: "Beginner",
      skillBgColor: "bg-gray-500 hover:bg-gray-200",
      skillBorderColor: "border-gray-800",
      skillLevelColor: "text-red-800",
      skillIcon: <SiMongoose/>,
      skillIconStyle: "text-[#2c97c6] group-hover:text-[#38bdf8]"
    },
  
  ];

  return (
    <main id="skills" className="md:h-auto md:flex pt-[6rem]
    justify-center md:items-center flex-col md:flex-col space-y-8 py-12 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-700 md:text-center py-1 font-serif">Skills</h1>
      <div className="justify-center items-center grid  sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-6 md:max-w-6xl mx-auto px-1 py-1 ">

      
        {
          skills.map((skill) => (
            <Card 
              key={skill.skillName}
              skillName={skill.skillName}
              skillLevel={skill.skillLevel}
              skillBgColor={skill.skillBgColor}
              skillBorderColor={skill.skillBorderColor}
              skillLevelColor={skill.skillLevelColor}
              skillIcon={skill.skillIcon}
              skillIconStyle={skill.skillIconStyle}
            />
          ))
        }
      </div>
    </main>
  );
}

export default Skills;
