import { motion } from "framer-motion";
import Watericon from "../../Icon/Watericon";
import RightArrow from "../../Icon/RightArrow";

export const Bubbles = () => {

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}px`,
          }}
          animate={{
            y: -800,
            opacity: [0.2, 0.1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const Project = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-700 to-blue-800 text-white py-16 px-4 md:px-12 overflow-hidden">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
      </div>

      <div className="md:w-full grid md:grid-cols-1 gap-8 relative z-10">
        <motion.div
          className="w-xs md:w-full bg-white/10w-full  backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:flex md:items-center md:justify-center md:grid-cols-2 gap-8">
            <img
              src="/Web-img/quentum.png"
              alt="Scuba Diver"
              className="  h-sm  md:w-xl md:h-xl rounded-xl flex-shrink-0 inline-block items-center justify-center cursor-pointer bg-white/10"
              onClick={() => window.open("https://currency-transaction-management.vercel.app")}
            />
            <div className="inline-block items-center mt-4">
              <h3 className="text-3xl font-semibold  mb-3 ml-2 text-yellow-400">Quentum <div className="text-xl inline-block">(Multi Currency Management System)</div> :</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- Purpose: This project is to help my brother efficiently manage our currency exchange work.</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- Developed a comprehensive currency portfolio management platform that enables users to manage and track multi-currency transactions (INR, USD, RUB) with real-time updates. The system includes customer management, transaction tracking, currency conversion, balance calculations, and data visualizations through charts. Integrated features include secure authentication, transaction filtering, PDF export, and responsive UI with dark/light mode support.</h3>
              <a
                className="text-2xl  ml-2 mt-4 cursor-pointer text-yellow-400 underline"
                href="https://currency-transaction-management.vercel.app"
                target="_blank"
              >Visit Project</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-xs md:w-full bg-white/10w-full mb:h-60 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className=" md:flex md:items-center md:justify-center md:grid-cols-2 gap-8">
            <div className=" md:w-full h-xl inline-block items-center mt-4">
              <h3 className="text-3xl font-semibold  mb-3 ml-2 text-yellow-400">Magnet<div className="text-xl inline-block">(Business management Software)</div> :</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- Purpose: Built to help grow my father’s business by simplifying inventory, billing, and daily operations through a digital system.</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- Developed a complete inventory and sales management system tailored for small businesses. The system includes modules for item management, billing, stock tracking, and sales reports. Built with a user-friendly interface to streamline operations and reduce manual effort. Technologies used: React-JS, Typescript , and  MongoDB</h3>
              <a
                className="text-2xl  ml-2 mt-4 cursor-pointer text-yellow-400 underline"
                href="https://magnet-business.vercel.app/"
                target="_blank"
              >
                Visit Project (Web-2)
              </a>
            </div>
            <img
                src="/Web-img/magnet.png"
                alt="Scuba Diver"
                className="w-xl h-xl rounded-xl flex-shrink-0 inline-block items-center justify-center cursor-pointer bg-white/10"
                onClick={() => window.open("https://magnet-business.vercel.app")}
              />
          </div>
        </motion.div>

        <motion.div
          className="w-xs md:w-full bg-white/10w-full  backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:flex md:items-center md:justify-center md:grid-cols-2 gap-8">
            <img
              src="/Web-img/token-maker.png"
              alt=""
              className="  h-sm  md:w-xl md:h-xl rounded-xl flex-shrink-0 inline-block items-center justify-center cursor-pointer bg-white/10"
              onClick={() => window.open("https://make-token.vercel.app/")}
            />
            <div className="inline-block items-center mt-4">
              <h3 className="text-3xl font-semibold  mb-3 ml-2 text-yellow-400">Token-Maker <div className="text-xl inline-block">(Make your own Token)</div> :</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- Purpose: This project is to help my brother efficiently manage our currency exchange work.</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- Developed a comprehensive currency portfolio management platform that enables users to manage and track multi-currency transactions (INR, USD, RUB) with real-time updates. The system includes customer management, transaction tracking, currency conversion, balance calculations, and data visualizations through charts. Integrated features include secure authentication, transaction filtering, PDF export, and responsive UI with dark/light mode support.</h3>
              <a
                className="text-2xl  ml-2 mt-4 cursor-pointer text-yellow-400 underline"
                href="https://make-token.vercel.app/"
                target="_blank"
              >Visit Project</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-xs md:w-full bg-white/10w-full mb:h-60 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className=" md:flex md:items-center md:justify-center md:grid-cols-2 gap-8">
            <div className=" md:w-full h-xl inline-block items-center mt-4">
              <h3 className="text-3xl font-semibold  mb-3 ml-2 text-yellow-400">Mini Cursor AI :</h3>
              <h3 className="text-1xl font-semibold  mb-3 ml-2 text-gray-300">- I built a Mini Command Running Assistant using Python and the Gemini API. It works just like an intelligent coding partner — you give a query, and it follows a plan → action → observe → output process to execute system commands on your machine.</h3> 
              <a
                className="text-2xl  ml-2 mt-4 cursor-pointer text-yellow-400 underline"
                href="https://github.com/MukhiVivek/Mini-Cursor"
                target="_blank"
              >
                Visit Project (Web-2)
              </a>
            </div>
            <img
                src="/Web-img/mini-cursor.png"
                alt="Scuba Diver"
                className="w-xl h-xl rounded-xl flex-shrink-0 inline-block items-center justify-center cursor-pointer bg-white/10"
                onClick={() => window.open("https://github.com/MukhiVivek/Mini-Cursor")}
              />
          </div>
        </motion.div>
      </div>

      {/* Scuba Diver Image */}
      <motion.img
        src="/images/freediver2.png"
        alt="Scuba Diver"
        className="absolute bottom-0 right-0 md:right-4 w-52 md:w-88 opacity-80 z-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.img
        src="/images/starfish.png"
        alt="Scuba Diver"
        className="absolute bottom-0 left-4 w-32 md:w-48 opacity-60 z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <Bubbles />

    </section>
  );
};

export default Project;
