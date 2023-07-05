/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { skillsCards } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useEffect } from "react";

const SkillCard = ({ index, title, icon, skills }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`
        w-[350px] items-center sm:block sm:w-[550px]`}
    >
      <Tilt className="xs:w-[450px] w-full ml-1 sm:ml-16 flex">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full bg-gradient-to-b from-[#327f99] to-white p-[2px] rounded-[20px] shadow-card min-w-[300px] items-center flex"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-[#001a2d] rounded-[20px] py-5 px-12 h-[480px] w-[445px] justify-center items-start"
          >
            <h3 className="text-secondary text-[38px] font-bold text-center mb-7 mt-2">
              {title}
            </h3>
            <img
              src={icon}
              alt={title}
              className="w-20 h-20 object-contain m-auto"
            />
            <ul className="mt-11 list-disc ml-2 sm:ml-8  grid grid-cols-2 gap-4">
              {skills.map(
                (skill, index) => {
                  return (
                    <li
                      key={skill.skill}
                      className="text-white text-[17px] pl-1 tracking-wider ml-4"
                    >
                      {skill.skill}
                    </li>
                  );
                }
                // console.log({ ...skill })
              )}
            </ul>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

const Tech = () => {
  return (
    // <div className="flex flex-row flex-wrap justify-center gap-10">
    //   {technologies.map((technology) => (
    //     <div className="w-28 h-28 " key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>
    <div className="flex flex-wrap gap-10">
      {skillsCards.map(
        (skill, index) => (
          <SkillCard key={skill.title} index={index} {...skill} />
        )
        // console.log({ ...skill })
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
