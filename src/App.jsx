import React from 'react';

import Navbar from './Share/Navbar';
import Footer from './Share/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
// import Contacts from './Pages/Contacts/Contacts';
import Email from './Pages/Email/email';
import Skill from './Pages/Skill/Skill';
import Projects from './Pages/Projects/Projects';

// import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
  <Navbar></Navbar>
 <div className=''>
 <Home></Home>

 <About></About>
 <Skill></Skill>
 <Projects></Projects>
 <Email></Email>
 </div>
  <Footer></Footer>
   </>
  )
}

export default App
