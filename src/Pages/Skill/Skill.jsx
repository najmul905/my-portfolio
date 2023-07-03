import React from 'react';
import { AiOutlineHtml5 } from "react-icons/ai";
import {DiJavascript1 } from "react-icons/di";
import { SiExpress,SiFramer } from "react-icons/si";
import { BiLogoCss3,BiLogoTailwindCss,BiLogoBootstrap,BiLogoReact,BiLogoMongodb,BiLogoNodejs } from "react-icons/bi";
import { motion, useViewportScroll, useTransform } from "framer-motion";


const Skill = () => {
    const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div id='skills' className=''>
            <div className='text-4xl font-bold text-center my-10'>
                <h1>My Skills</h1>
            </div>
            <div className='flex place-content-center'>
            <motion.div
             
             style={{
               scale
             }}
            className=' container basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold'>
 <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />

                <AiOutlineHtml5></AiOutlineHtml5>
                <h1>HTML</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <BiLogoCss3></BiLogoCss3></span>
                <h1>CSS</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <BiLogoTailwindCss></BiLogoTailwindCss></span>
                <h1>Tailwind</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <BiLogoBootstrap></BiLogoBootstrap></span>
                <h1>Bootstrap</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <DiJavascript1></DiJavascript1></span>
                <h1>JavaScript</h1>
            </motion.div>
            </div>
            
            <div className='flex place-content-center my-10'>
            <motion.div
             
             style={{
               scale
             }}
            className=' container  basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold'>
 <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress}} />
                <span><BiLogoReact></BiLogoReact></span>
                <h1>React</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <BiLogoMongodb></BiLogoMongodb></span>
                <h1>MongoDB</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <BiLogoNodejs></BiLogoNodejs></span>
                <h1>Node JS</h1>
            </motion.div>
            <motion.div className=' basis-1/12 p-4 text-center rounded-md mx-8 bg-white text-indigo-600 font-bold' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span className='text-center'> <SiExpress></SiExpress></span>
                <h1>Express.JS</h1>
            </motion.div>
            <motion.div className='bg-white text-indigo-600 font-bold basis-1/12 p-4 text-center rounded-md mx-8' 
             style={{ scale}} > 
              <motion.div
          className="item"
          style={{scaleY: scrollYProgress }}/>
        <span > <SiFramer></SiFramer></span>
                <h1>Framer</h1>
            </motion.div>
            </div>
            
        </div>
    );
};

export default Skill;