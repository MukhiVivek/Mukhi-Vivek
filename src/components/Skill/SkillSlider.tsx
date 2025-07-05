import { motion } from "framer-motion";

const SkillSlider = () => {
  const skillRows = [
    ["/logos/react.png", "/logos/python.svg", "/logos/node.svg", "/logos/solidity.svg","/logos/git.svg", "/logos/ai.svg", "/logos/mysql.svg" , "/logos/mongo.svg", "/logos/nextjs.svg","/logos/javascript.svg", "/logos/tailwind.svg", "/logos/solana.svg", "/logos/ethereum.svg"],
  ];

  return (
    <section >
      <div className="space-y-8">
        {skillRows.map((row, i) => {
          const fullRow = [...row, ...row]; // 🔁 duplicate to loop infinitely
          const direction = i % 2 === 0 ? "toLeft" : "toRight";

          return (
            <div key={i} className="overflow-hidden whitespace-nowrap">
              <motion.div
                className="flex gap-8 w-max"
                animate={{
                  x: direction === "toLeft" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {fullRow.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt="skill"
                    className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSlider;
