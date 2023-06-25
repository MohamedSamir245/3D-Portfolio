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
        className="bg-[#020506] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

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
        Hello, I am a web scraping expert and intermediate machine learning
        developer. I specialize in building custom web scraping solutions that
        can extract data from any website, regardless of its complexity or
        structure. Additionally, I have experience working with machine learning
        algorithms to analyze and preprocess extracted data. I am proficient in
        web scraping frameworks such as Beautiful Soup and Selenium, and I am
        also experienced in programming languages such as Python, JS and C++. I
        have a strong understanding of data structures and algorithms, which
        enables me to create efficient and reliable web scraping solutions. In
        addition to web scraping, I have experience in using machine learning
        algorithms such as regression, classification, clustering, and neural
        networks to analyze data and make predictions. I have worked with
        machine learning libraries such as TensorFlow and Scikit-Learn and have
        experience in data preprocessing, feature engineering, and model
        development. Whether you need to extract data from e-commerce websites,
        news sites, or social media platforms, I can build a custom solution
        that meets your specific needs. I am also available to consult on data
        cleaning, data preprocessing, and machine learning model development. If
        you're looking for a reliable and experienced web scraping expert and
        machine learning developer, please don't hesitate to contact me. I am
        dedicated to delivering high-quality work that meets your needs and
        exceeds your expectations.
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
