import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        I'm a skilled software developer with experience in TypeScript and Javascript, and 
        expertise in frameworks like React, Node.js and Three.js. I'm a quick learner and
        have a passion for creating dynamic user interfaces and web applications. I'm also
        skilled in using tools like Figma, Adobe XD and Blender to create and design
        user interfaces and 3D models. I'm a team player and have experience working in
        a team environment. I'm also a good communicator and have experience working with
        clients and stakeholders. I'm also a good problem solver and have experience
        debugging and troubleshooting code. I'm also skilled in using version control
        systems like Git and have experience working with CI/CD pipelines. Let's work
        together and create something amazing!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}  />
        ))}
      </div>
    </>
  )
}

export default About