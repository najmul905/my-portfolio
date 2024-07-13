import React from 'react';
// import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
// import Resume from '../Resume/Resume';
import Cover from '../Cover/Cover';
import Resume from '../Resume/Resume';


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
            <h1 className='text-2xl my-5 font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>A<Typewriter
          words={['bout Me....!!! ']}
          loop={false}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></h1>
          </div>
       
        <div className='md:flex  justify-center items-center gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mx-10'> 
        <div className=''>
            <img className='mix-blend-multiply' src="https://i.postimg.cc/3xCrPx14/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f35373639.gif" alt="Coding" />
          </div>
          <div className='md:w-1/2 md:p-8 p-4'>
            <p className='font-serif text-[12px] md:text-[16px] text-justify'>
              Hi,
              <br />
              I am Muhammad Najmul Islam.I am a Mern stack developer. I started my learning programming in 1st january 2023 .I love to learn programming and love creating visually appealing and user-friendly websites that leave a lasting impression. With expertise in HTML, CSS, JavaScript, and React.js, I craft seamless interfaces for an optimal user experience. Lets collaborate and bring your ideas to life!
            </p>
            <div className='flex items-center gap-x-4 my-5'>
            <Cover></Cover>
            <Resume></Resume>
            </div>
            
          </div>
          </div>
        
          </div>
        // </motion.div>
    );
};

export default About;