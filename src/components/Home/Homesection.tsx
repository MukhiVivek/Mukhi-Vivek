import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Details from "./Details";

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-300 to-sky-600 text-white">

      <Navbar />


      {/* Home Content */}
      <div className="">

        <motion.img
          src="/images/fishs.png"
          alt="Scuba Diver"
          className="absolute bottom-60 md:bottom-0   opacity-60 z-10"
          animate={{
            x: [0, -10, 0],       // movement on X-axis (left/right)
            y: [0, -10, 0],      // movement on Y-axis (up/down)
            rotate: [0, 0, 0, 0], // rotation
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <Details />

        {/* Scuba Diver Image */}
        <motion.img
          src="/images/scuba-diver.png"
          alt="Scuba Diver"
          className="absolute bottom-120  md:bottom-0  right-5 md:right-4 w-32 md:w-48 opacity-80 z-10"
          animate={{
            x: [0, 10, 0],       // movement on X-axis (left/right)
            y: [0, -10, 0],      // movement on Y-axis (up/down)
            rotate: [0, 5, -5, 0], // rotation
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.img
          src="/images/fishshadow.png"
          alt="Scuba Diver"
          className="absolute top-2 left-2 md:top-30 md:left-90 w-12 md:w-12 opacity-50 z-10"
          animate={{
            x: [0, 50, 0],       // movement on X-axis (left/right)
            y: [0, -20, 0],      // movement on Y-axis (up/down)
            rotate: [0, 10, -10, 0], // rotation
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.img
          src="/images/fishshadow.png"
          alt="Scuba Diver"
          className="absolute top-2 left-15 md:top-30 md:left-110 w-12 md:w-12 opacity-50 z-10"
          animate={{
            x: [0, 50, 0],       // movement on X-axis (left/right)
            y: [0, -20, 0],      // movement on Y-axis (up/down)
            rotate: [0, 10, -10, 0], // rotation
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.img
          src="/images/fishshadow.png"
          alt="Scuba Diver"
          className="absolute top-10 left:12 md:top-39 md:left-100 w-12 md:w-12 opacity-50 z-10"
          animate={{
            x: [0, 50, 0],       // movement on X-axis (left/right)
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

      {/* Bubble animations */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden z-0">
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

    </section>
  );
};

export default Home;
