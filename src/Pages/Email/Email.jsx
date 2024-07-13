import React from 'react';
import Contacts from '../Contacts/Contacts';
import { FaPhoneAlt ,FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Social from '../Social/Social';

const Email = () => {
    return (
        <div className='' id='contacts '>
            <div>
<h1 className='text-center my-12 text-3xl font-semibold italic'>Contact with me!!!!!</h1>
<div >
  <Social></Social>
</div>
            </div>
            <div className='ml-4 md:ml-32'>
                <div className='flex items-center '>
                 <FaMapMarkerAlt></FaMapMarkerAlt> <p className='font-semibold'>Gaibandha,Dhaka,Bangladesh</p>
                </div>
          <div className='flex items-center'>
          <FaPhoneAlt></FaPhoneAlt> <p className='font-semibold'>+8801723165412</p>
          </div>
          <div className='flex items-center'>
           <AiOutlineMail></AiOutlineMail> <p className='font-semibold'>muhammadnajmulislam19@gmail.com</p>
          </div>
            </div>
            <Contacts></Contacts>

        </div>
    );
};

export default Email;