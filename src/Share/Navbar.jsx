import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'
import Resume from '../Pages/Resume/Resume';


const Navbar = () => {

const navItems=<>
 <li ><Link className='text-white font-bold' to='home' spy={true} smooth={true} duration={500}>Home</Link></li>
 <li ><Link className='text-white font-bold' to='aboutMe' spy={true} smooth={true} duration={500}>About Me</Link></li>
 <li ><Link className='text-white font-bold' to='skills' spy={true} smooth={true} duration={500}>Skills</Link></li>
 <li ><Link className='text-white font-bold' to='projects' spy={true} smooth={true} duration={500}>Projects</Link></li>
 <li ><Link className='text-white font-bold' to='contacts' spy={true} smooth={true} duration={1000}>Contacts</Link></li>
</>

    return (
        <div className='relative'>
           <div className="navbar fixed z-10 top-0 w-full text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className='bg-slate-900 rounded-md'><Link className='text-white font-bold' to='home' spy={true} smooth={true} duration={500}>Home</Link></li>
 <li className='bg-slate-900 rounded-md'><Link className='text-white font-bold' to='aboutMe' spy={true} smooth={true} duration={500}>About Me</Link></li>
 <li className='bg-slate-900 rounded-md'><Link className='text-white font-bold' to='skills' spy={true} smooth={true} duration={500}>Skills</Link></li>
 <li className='bg-slate-900 rounded-md'><Link className='text-white font-bold' to='projects' spy={true} smooth={true} duration={500}>Projects</Link></li>
 <li className='bg-slate-900 rounded-md'><Link className='text-white font-bold' to='contacts' spy={true} smooth={true} duration={1000}>Contacts</Link></li>
      </ul>
    </div>
    <h1 className=''><span className='text-4xl font-bold italic'>Najmul.</span><span className='text-2xl font-bold italic'>Developer</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Resume></Resume>
  </div>
</div> 
        </div>
    );
};

export default Navbar;