import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Approach = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const phases = [
    {
      title: "Planning & Strategy",
      content:
        "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      button: "Phase 1",
    },
    {
      title: "Development & Progress Update",
      content:
        "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      button: "Phase 2",
    },
    {
      title: "Development & Launch",
      content:
        "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      button: "Phase 3",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My Approach</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7 justify-start">
        {phases.map((phase, index) => (
          // mx-auto
          <div
            key={index}
            className="relative transition-all duration-500 sm:w-[360px] w-full group min-h-[400px]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`h-full rounded-lg transition-all duration-500 ${
                hoveredIndex === index
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-800"
              }`}
            >
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="relative text-center px-3 z-10 h-full flex flex-col justify-center items-center text-white transition-all duration-500">
                {hoveredIndex === index ? (
                  <>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                    <p className="mt-2 text-center">{phase.content}</p>
                  </>
                ) : (
                  <p className="text-white font-semibold text-2xl">
                    {phase.button}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Approach, "");
