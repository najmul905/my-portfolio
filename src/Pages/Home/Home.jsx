import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import {motion} from 'framer-motion'
import Resume from '../Resume/Resume';


const Home = () => {

// const {text}=Typewriter({
//     words:['Mern','Stark','Developer']
// })

    return (
        <motion.div id='home' className='flex items-center px-20  '
        
        
        >        
            < motion.div className='mt-12'
            
            initial={{ opacity: 0,x:-100 }}
        animate={{ opacity: 1 ,x:0 }}
        exit={{ opacity: 0,x:100 }}
        transition={{ duration: 1 }}
            >
<h1 className='text-5xl font-bold text-orange-400'>Hi !!, <br />I am Najmul Islam!!!!!!!
    
</h1>
<h2><span className='text-5xl font-bold text-orange-400'>I am a </span> <span className='text-3xl font-bold italic text-amber-500'>
        
        <Typewriter
          words={['Mern Stark Developer']}
          loop={false}
         
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
         
        />
      </span></h2>
<br />
      <p className='font-semibold'>Welcome to my portfolio.I am a passionate Mern stack web developer with expertise in <span className='font-bold'>HTML,CSS,JavaScript,React,Express.js and MongoDB</span>.I have a strong foundation in front-end development
      <br />
      <Resume></Resume>
      </p>
            </motion.div>

                <motion.div className='mt-12'
                 initial={{ opacity: 0,x:100 }}
                 animate={{ opacity: 1 ,x:0 }}
                 exit={{ opacity: 0,x:-100 }}
                 transition={{ duration: 1 }}

               
                

                >
<img className='rounded-tl-full rounded-br-full rounded-tr-full' src="../../../public/portfolio photo2.png" alt="" />
            </motion.div>
        </motion.div>
    );
};

export default Home;