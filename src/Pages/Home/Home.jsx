import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion} from 'framer-motion'
import { Link } from 'react-scroll';
// import Resume from '../Resume/Resume';


const Home = () => {

    const [initialValuesPluse, setInitialValuesPluse] = useState({ x: 50, opacity: 0 });
    const [initialValuesLess, setInitialValueLess] = useState({ x: -50, opacity: 0 });


  useEffect(() => {
    const updateInitialValues = () => {
      if (window.innerWidth >= 768) { // Tailwind's `md` breakpoint is 768px
        setInitialValuesPluse({ x: 300, opacity: 0 });
        setInitialValueLess({ x: -300, opacity: 0 });
      } else {
        setInitialValuesPluse({ x: 50, opacity: 0 });
        setInitialValueLess({ x: -50, opacity: 0 });
      }
    };

    updateInitialValues(); // Check initial window size
    window.addEventListener('resize', updateInitialValues); // Update on resize

    return () => window.removeEventListener('resize', updateInitialValues);
  }, []);

    // const {text}=Typewriter({
    //     words:['Mern','Stark','Developer']
    // })

    return (
        <motion.div id='home' className='md:flex overflow-hidden md:items-center justify-center md:mx-auto pt-16 gap-20' >
             
            < motion.div className={`md:w-[40%]  md:mx-0 mx-12 mt-8 md:mt-0 `}
                initial={initialValuesLess}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{  duration:2 }}
            >
                <h1 className='text-[18px] md:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Hi !!, <br />I am Najmul Islam!!!!!!!
                </h1>
                <h2><span className='text-[15px] md:text-2xl font-bold '>I am a </span> <span className='text-[18px] md:text-3xl font-bold italic text-amber-500'>
                    <Typewriter
                        words={['Mern Stark Developer']}
                        loop={false}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span></h2>
                <br />
                <p className='font-semibold text-[12px] md:text-[15px] text-justify'>Welcome to my portfolio.I am a passionate Mern stack web developer with expertise in HTML,CSS,JavaScript,React,Express.js and MongoDB.I have a strong foundation in front-end development
                    <br />
                    <div className='my-6'>
                        <div className='my-2 flex items-center gap-x-2'>
                            <a href="https://github.com/najmul905"><img className='h-8 rounded-full bg-white' src="https://i.postimg.cc/65vs7h4p/github-PNG80.png" alt="" /></a>
                            <a href="https://www.linkedin.com/in/najmul-islam-252124282/"><img className='h-8 rounded-full bg-white' src="https://i.postimg.cc/257wzZh7/R-1.png" alt="" /></a>
                            <a href="https://web.facebook.com/profile.php?id=100082173193515"><img className='h-8 rounded-full bg-white' src="https://i.postimg.cc/PJ5d59Jr/facebook-logo-circle-transparent.png" alt="" /></a>
                        </div>
                        <Link to="contacts" spy={true} smooth={true} duration={500}><button   className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[12px] md:text-[15px] px-4 py-2 rounded'>Contact me</button></Link></div>
                </p>
            </motion.div>
            <motion.div className={`md:w-[40%]  md:mx-0 }`}
                initial={initialValuesPluse}
                whileInView={{ x: 0, opacity: 5 }}
                transition={{ duration:2 }}
                >
               <div className=''>
               <img className=' ' src="https://i.postimg.cc/N0qN31xB/9a9a4f48-0649-4a38-a21c-28e5171bbf0a.png" alt="" />
               </div>
            </motion.div>
           
        </motion.div>
    );
};

export default Home;