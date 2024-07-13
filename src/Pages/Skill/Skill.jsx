import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';

const Skill = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('skill.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data)
    const Frontend=data.filter(data=>data.category==="Frontend Site")
    const Backend=data.filter(data=>data.category==="Backend Site") 
    const Tools=data.filter(data=>data.category==="Tool")  
    console.log("frontend" ,Frontend,"Backend",Backend,'Tool',Tools)
    return (
        <div id='skills' className=''>
            <div className='text-2xl text-white font-bold text-center my-10'>
                <h1>My Skills</h1>
            </div>
            <div className='overflow-hidden grid md:grid-cols-2 md:gap-x-10 gap-y-12 mx-8 md:mx-20'>
               <motion.div
              initial={{y:100,x:50, opacity:0}}
              whileInView={{y:0,x:0, opacity:1}}
               transition={{duration:2}}
               className='bg-slate-800 rounded-md'>
                <h1 className='text-center my-3 font-bold'>Fronted Site</h1>
               <div
               
               className='grid grid-cols-3 bg-slate-800 rounded-md'>
                    
                    {
                        Frontend.map(data=><motion.div
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        key={data.id} className='mx-auto p-10 '>
                            
                           <div className='text-center'>
                           <img className='md:h-12 h-8 items-center' src={data.Image} alt="" />
                            <h1 className='text-[12px] font-bold'>{data.name}</h1>
                           </div>
                        </motion.div>)
                    }
                </div>
               </motion.div>
               <motion.div
              initial={{y:100,x:50, opacity:0}}
              whileInView={{y:0,x:0, opacity:1}}
               transition={{duration:2}}
               className='bg-slate-800 rounded-md'>
               <h1 className='text-center my-3 font-bold'>Backend Site</h1>
               <div className='grid grid-cols-3 '>
                {
                        Backend.map(data=><motion.div 
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        key={data.id} className='mx-auto p-10 '>
                           <div className='text-center'>
                           <img className='md:h-12 h-8 items-center' src={data.Image} alt="" />
                            <h1 className='text-[12px] font-semibold'>{data.name}</h1>
                           </div>
                        </motion.div>)
                    }
                </div>
               </motion.div>
                <motion.div
                initial={{y:100,x:50, opacity:0}}
                whileInView={{y:0,x:0, opacity:1}}
                transition={{duration:2}}
                className='bg-slate-800 rounded-md'>
                <h1 className='text-center my-3 font-bold'>Tools</h1>
                <div className='grid grid-cols-3 '> 
                {
                        Tools.map(data=><motion.div
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        key={data.id} className='mx-auto p-10 '>
                           <div className='text-center'>
                           <img className='md:h-12 h-8 items-center' src={data.Image} alt="" />
                            <h1 className='text-[12px] font-semibold'>{data.name}</h1>
                           </div>
                        </motion.div>)
                    }
                </div>
                </motion.div>
            </div>
        
        </div>
    );
};

export default Skill;