/* eslint-disable react/no-unescaped-entities */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-b from-[#327f99] to-white p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#001a2d] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-secondary text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[18px] max-w-6xl leading-[30px]"
      >
        Hello and welcome to my website! I'm a full stack developer with
        expertise in a wide range of technologies and tools. On the front end,
        I'm skilled in HTML, CSS, JavaScript, Tailwind, React, and Bootstrap,
        and on the back end, I have experience with Node, MongoDB, MySQL, and
        Python. I'm also well-versed in machine learning, using tools like
        TensorFlow, Scikit-learn, Pandas, Matplotlib, and NumPy to implement
        algorithms such as regression, classification, clustering, and neural
        networks to analyze data and make predictions. Currently, I am studing a
        wide range of topics in Machine Learing and Deep Learning from "Hands On
        Machine Learning with Scikit-Learn Keras and TensorFlow" book by
        Aurélien Géron, and finally, I have experience with web scraping using Beautiful
        Soup and Selenium. I can extract data from e-commerce websites, news
        sites, or social media platforms Additionally, I'm proficient in C++ and
        Java. I have a strong understanding of data structures and algorithms.
        With my diverse skill set, I'm equipped to tackle a wide range of
        projects and challenges. Take a look at my portfolio to see some of my
        work, and feel free to get in touch to discuss potential collaborations.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
