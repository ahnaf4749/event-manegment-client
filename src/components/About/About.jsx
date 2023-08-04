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

  <Tilt>
    <motion.div className=''>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="h-[340px] w-[270px] about-bg border rounded-xl">
        <div className="teams">
          <div className="avatar relative inline-block">
            <Link
              to="https://www.linkedin.com/in/sumonkaysar/"
              className="social-media absolute bg-white bottom-0 right-0 z-10 "
            >
              <BsFacebook className="inline-block text-xl h-8 w-6" />
            </Link>
            <div className="team rounded-full relative p-5">
              <img className=" h-[300px] w-[240px] rounded-[20px]" src='https://i.ibb.co/5LP78bT/Picsart-23-04-30-12-19-53-717.jpg' alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    <h3 className='text-white text-[20px] font-bold text-center'>
      (CEO) Farazz
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

      <div className="flex flex-wrap justify-center items-center gap-x-8 mt-4">
        <Tilt>
          <motion.div className=''>
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="h-[340px] w-[290px] about-bg  rounded-xl">
              <div className="teams">
                <div className="avatar relative inline-block">
                  <Link
                    to="https://www.linkedin.com/in/sumonkaysar/"
                    className="social-media absolute bg-white bottom-0 right-0 z-10 "
                  >
                    <BsFacebook className="inline-block text-xl h-8 w-6" />
                  </Link>
                  <div className="team rounded-full relative p-5">
                    <img className=" h-[300px] w-[250px] rounded-[20px]" src='https://i.ibb.co/5LP78bT/Picsart-23-04-30-12-19-53-717.jpg' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <h3 className='text-white text-[20px] font-bold text-center'>
            (CEO) Farazz
          </h3>
        </Tilt>
        <Tilt>
          <motion.div className=''>
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="h-[340px] w-[290px] about-bg  rounded-xl">
              <div className="teams">
                <div className="avatar relative inline-block">
                  <Link
                    to="https://www.linkedin.com/in/sumonkaysar/"
                    className="social-media absolute bg-white bottom-0 right-0 z-10 "
                  >
                    <BsFacebook className="inline-block text-xl h-8 w-6" />
                  </Link>
                  <div className="team rounded-full relative p-5">
                    <img className=" h-[300px] w-[250px] rounded-[20px]" src='https://i.ibb.co/5LP78bT/Picsart-23-04-30-12-19-53-717.jpg' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <h3 className='text-white text-[20px] font-bold text-center'>
            (CEO) Farazz
          </h3>
        </Tilt>
      </div>

      <div className='mt-6 gap-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[270px] mx-auto lg:w-full'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
