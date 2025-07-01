import { motion } from "framer-motion";
import { Bubbles } from "./Project/Project";

const lifeStoryEvents = [
  {
    year: "1995",
    title: "Born",
    description: "Born in a coastal town, surrounded by the ocean and nature.",
  },
  {
    year: "2001",
    title: "Started School",
    description: "Began primary education and developed curiosity about marine life.",
  },
  {
    year: "2005",
    title: "First Dive Experience",
    description: "Had the first scuba diving experience with family vacation.",
  },
  {
    year: "2010",
    title: "Joined Diving Club",
    description: "Became an active member of local diving and ocean conservation club.",
  },
];

const LifeStoryTimeline = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-700 to-blue-800 text-white py-20 px-6 md:px-16 overflow-hidden min-h-screen">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold">Life Story Timeline</h2>
        <p className="text-gray-300 mt-3 text-lg">Key moments that shaped her life</p>
      </div>

      {/* Bubbles */}
      <Bubbles />

      {/* Scuba Diver Image */}
      
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30" />

        <div className="flex flex-col space-y-16">
          {lifeStoryEvents.map((event, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row-reverse" : ""
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Year */}
                <div className="w-full md:w-1/2 text-center md:text-right px-4">
                  <span className="text-xl font-semibold">{event.year}</span>
                </div>

                {/* Circle & connector */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-blue-600 mx-4 shadow-md">
                  <div className="absolute w-1 h-full bg-white/40 z-[-1]" />
                </div>

                {/* Content box */}
                <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.img
        src="/images/freediver.png"
        alt="Scuba Diver"
        className="absolute left-4 w-32 md:w-48 opacity-80 z-10"
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

      <motion.img
        src="/images/smrutifreediving.png"
        alt="Scuba Diver"
        className="absolute bottom-0.5 left-3 w-32 md:w-32 opacity-80 z-10"
        animate={{
          x: [0, -50, 0],       // movement on X-axis (left/right)
          y: [0, -20, 0],      // movement on Y-axis (up/down)
          rotate: [0, 10, -10, 0], // rotation
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

        </div>
      </div>
    </section>
  );
};

export default LifeStoryTimeline;
