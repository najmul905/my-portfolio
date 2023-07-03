import React from 'react';
// import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
// import Resume from '../Resume/Resume';
import Cover from '../Cover/Cover';


const About = () => {
    return (
        // <motion.div id='aboutMe'
        // initial={{ opacity: 0,x:-100 }}
        // animate={{ opacity: 1 ,x:0 }}
        // exit={{ opacity: 0,x:100 }}
        // transition={{ duration: 1 }}
        // className='flex justify-around'
        // >
        <div  id='aboutMe'>
          <div>
            <h1 className='text-4xl font-bold text-center my-10'>About <Typewriter
          words={['Me....!!! ']}
          loop={false}
         
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
         
        /></h1>
          </div>
        <div className='flex items-center mx-20'>
           
          <div className='w-1/2 '>
            <img className='rounded-bl-full rounded-tl-full rounded-tr-full  ' src="../../../public/portfolio photo1.png" alt="" />
          </div>
          <div className='w-1/2 ml-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-md '>
            <p className='font-serif text-white'>
              Hi,
              I am Muhammad Najmul Islam.I am a Mern stack developer. I started my learning programming in 1st january 2023 .I love to learn programming and love creating visually appealing and user-friendly websites that leave a lasting impression. With expertise in HTML, CSS, JavaScript, and React.js, I craft seamless interfaces for an optimal user experience. Lets collaborate and bring your ideas to life!
             
             
            </p>
            <Cover></Cover>
          </div>
          </div>
          </div>
        // </motion.div>
    );
};

export default About;