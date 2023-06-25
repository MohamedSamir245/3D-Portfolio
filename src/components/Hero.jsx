/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3b9ebf]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary to-black" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#3b9ebf]">Mohamed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I have experience with web development ( Frontend & Backend ), I use
            React.js and Node.js. I also build Machine Learning models ( using
            TensorFlow and Scikit-Learn ) and web scraping tools ( using
            Selenium and Beautifulsoup ).
          </p>
        </div>
      </div>
      {/* <br />
      <br />
      <br />
      <br /> */}

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-forth flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full
            bg-forth mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
