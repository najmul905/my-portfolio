import React from 'react';
import { MdComputer } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import {motion} from 'framer-motion'

const Projects = () => {
    return (
        <div className='md:mx-20 mx-8' id='projects'>
          <h1 className='text-2xl font-bold text-center my-5'>My All Projects</h1>
            <div className=''>
            <div className='overflow-hidden bg-slate-800 rounded-md shadow-lg md:flex md:gap-20  items-center my-4'>
             <motion.div
             initial={{y:-100, opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{duration:2,}}
             className=''> 
             <div className='my-4 ml-2 rounded-md h-[120px] md:h-[200px] md:w-52 w-32 overflow-hidden'>
             <img className=' ' src="https://i.ibb.co/wsrJ02C/Screenshot-2024-06-15-173114.png" alt="" />
             </div>
           </motion.div>
              <motion.div
              initial={{x:200,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:2,}}
              className='px-[20px] md:pb-0 pb-4 '>
                <h1 className='text-[15px] md:text-[18px] font-bold '>Shoes Container</h1>
                <p className='text-[12px] md:text-[15px] text-justify'>The shoes container website is an e-commerce website. There anyone can be singUp and user can add any shoes in the card. A user can add many shoes and how many shoes add to card user can see this add shoes in the card section.User can be delete the shoes from card section and Payment the money from payment section.You can see the admin feature Use this Email and password. admin Email: sumon@gmail.com and Password:123456.
                </p>
                <div className='flex items-center my-4 gap-4'>
                  <a  className='border-2 border-blue-800 rounded-2xl text-[10px] md:text-[14px] font-semibold px-4 py-1 flex items-center gap-2' href="https://shoes-container.web.app/">Live Site <MdComputer /></a>
                  <a className='border-2 border-blue-800 rounded-2xl text-[10px] md:text-[14px] font-semibold px-4 py-1 flex items-center gap-2' href="https://github.com/najmul905/Shoes-Container-Client-Site">Client Site <FaGithub /></a>
                <a className='border-2 border-blue-800 rounded-2xl text-[10px] md:text-[14px] font-semibold px-4 py-1 flex items-center gap-2' href="https://github.com/najmul905/shoes_Container_server">Server Site <FaGithub /></a>
                  <button ></button>
                </div>
              </motion.div>
            </div>
            <div className='overflow-hidden bg-slate-800 rounded-md shadow-lg md:flex md:gap-20 items-center'>
             <motion.div
             initial={{y:-100, opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{duration:2,}}
             className=''> 
             <div className='my-4 ml-2 rounded-md h-[120px] md:h-[200px] md:w-52 w-32 overflow-hidden'>
             <img className='' src="https://i.ibb.co/SVGC3QY/screencapture-summer-school-sport-camp-web-app-2024-06-06-22-23-09.png" alt="" />
             </div>
            </motion.div>
              <motion.div
              initial={{x:200,opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:2,}}
              className='px-[20px] md:pb-0 pb-4 '>
                <h1 className='text-[15px] md:text-[18px] font-bold '>The Summer School Camp</h1>
                <p className='text-[12px] md:text-[15px] text-justify'>The summer school camp website is for the primary and secondary school students.This school for the summer time when school off in the summer time</p>
                <div className='flex items-center my-4 gap-4'>
                 
                  <a className='border-2 border-blue-800 rounded-2xl text-[10px] md:text-[14px] font-semibold px-4 py-1 flex items-center gap-2' href="https://summer-school-sport-camp.web.app/">Live Site <MdComputer /></a>
                  <a className='border-2 border-blue-800 rounded-2xl text-[10px] md:text-[14px] font-semibold px-4 py-1 flex items-center gap-2' href="https://github.com/najmul905/summer-school-camp-client">Client Site <FaGithub /></a>
                  <a className='border-2 border-blue-800 rounded-2xl text-[10px] md:text-[14px] font-semibold px-4 py-1 flex items-center gap-2' href="https://github.com/najmul905/summer-school-camp-server">Server Site <FaGithub /></a>
                  
                </div>
              </motion.div>
            </div>
            </div>
        </div>
    );
};

export default Projects;