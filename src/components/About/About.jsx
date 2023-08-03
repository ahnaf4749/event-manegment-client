import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";
import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import './About.css'
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='about-bg rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-full h-full object-contain rounded-[20px]'
        />
      </div>
      
    </motion.div>
    <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Our Team Members</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p> */}

      <div className="flex justify-center items-center">
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient  rounded-[20px] shadow-card'
          >
                <div className="my-6 teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/sumonkaysar/"
              className="social-media absolute bg-white bottom-0 right-0 z-10 "
            >
              <BsFacebook className="inline-block text-xl h-8 w-6" />
            </Link>
            <div className="team rounded-full relative">
              <img className="w-full h-full object-contain rounded-[20px]" src='https://i.ibb.co/5LP78bT/Picsart-23-04-30-12-19-53-717.jpg' alt="" />
            </div>
          </div>
        </div>
 
          </motion.div>
          <h3 className='text-white text-[20px] font-bold text-center'>
                (CEO) Farazz
              </h3>
        </Tilt>
      </div>

      <div className='mt-14 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
