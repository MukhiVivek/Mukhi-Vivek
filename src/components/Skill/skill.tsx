import { Bubbles } from "../Project/Project";
import { motion } from "framer-motion";
import SkillSlider from "./SkillSlider";

function Skill() {
    return (
        <section className="relative bg-gradient-to-b  from-sky-600 to-blue-700 text-white py-20 px-6 md:px-16 overflow-hidden h-max">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-bold">Skill</h2>
            </div>

            <SkillSlider />

            {/* Bubbles */}
            <Bubbles />

            {/* Scuba Diver Image */}

            <div className="relative max-w-6xl mx-auto z-10">
                {/* Vertical line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30" />

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
                    className="absolute bottom-0.5 right-3 w-32 md:w-32 opacity-80 z-10"
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
        </section>
    );
}

export default Skill;