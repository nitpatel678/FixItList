import { FaReact, FaNodeJs, FaEnvelope } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiOpenai } from 'react-icons/si';
import { BiTimeFive } from 'react-icons/bi';

const stack = [
  { name: 'MongoDB', icon: <SiMongodb size={30} className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress size={30} className="text-black" /> },
  { name: 'React', icon: <FaReact size={30} className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} className="text-green-700" /> },
  { name: 'OpenAI (GPT)', icon: <SiOpenai size={30} className="text-purple-600" /> },
//   { name: 'Cron Jobs', icon: <BiTimeFive size={30} className="text-gray-700" /> },
//   { name: 'Nodemailer', icon: <FaEnvelope size={30} className="text-red-500" /> },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        Tech Stack Used
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {tech.icon}
            <span className="text-gray-700 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
