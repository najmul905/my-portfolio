import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'
// import Resume from '../Pages/Resume/Resume';


const Navbar = () => {
  const [open, setOpen] = useState(false)
const link=<>
 <ul className='md:flex md:items-center gap-4 '>
 <li ><Link className='text-white font-bold cursor-pointer' to='home' spy={true} smooth={true} duration={500}>Home</Link></li>
 <li ><Link className='text-white font-bold cursor-pointer' to='aboutMe' spy={true} smooth={true} duration={500}>About Me</Link></li>
 <li ><Link className='text-white font-bold cursor-pointer' to='skills' spy={true} smooth={true} duration={500}>Skills</Link></li>
 <li ><Link className='text-white font-bold cursor-pointer' to='projects' spy={true} smooth={true} duration={500}>Projects</Link></li>
 <li ><Link className='text-white font-bold cursor-pointer' to='contacts' spy={true} smooth={true} duration={1000}>Contacts</Link></li>
 </ul>
</>



    return (
      <div className=''>
      <div className='mt-0 flex items-center z-10 bg-opacity-50 bg-black fixed top-0 w-full md:px-10 px-2 py-4'>
          <div className='flex items-center'>
             <div><img className='h-[55px]' src="https://i.postimg.cc/bwm8qWbg/Logo-design-of-N-in-for-construction-home-real-estate-building-property-2.png" alt="" /></div>
              <div onClick={() => setOpen(!open)} className='text-2xl text-white right-12 px-2   absolute md:static md:hidden'>
                  {open ? <AiOutlineClose></AiOutlineClose> : <BiMenu></BiMenu>
                  }
              </div>
          </div>
          <div className={`md:mt-0 transition-all z-10 text-white    right-12 px-2  absolute md:static ${open ? 'top-[72px]' : 'top-[-200px]'} mx-auto`}>
              {link}
          </div>
          
      </div>
  </div>
    );
};

export default Navbar;