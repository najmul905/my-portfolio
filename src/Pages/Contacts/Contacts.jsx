import React, { useRef } from 'react';
// import React { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import Swal from 'sweetalert2';


const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rjcigfm',
            'template_rsejyky',
            form.current,
            '_PJEwhLRiFSnkoCtG')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email has been sended',
                    showConfirmButton: false,
                    timer: 1000
                })
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });

    };

    return (

        <div id='contacts' className='md:flex md:flex-row-reverse md:justify-around my-8'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
               className='my-5 md:my-0'
            >
                <img className=' rounded md:h-80 w-80 md:w-auto mx-auto' src="https://i.postimg.cc/PqZ0xKJC/8fb615c10e5708263e5eb0373c2d476e.gif" alt="" />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}

                className=''><form ref={form} onSubmit={sendEmail} className='bg-slate-300  p-6 rounded-md mx-8 md:h-80 ' >
                    <h1 className='font-bold text-center mb-2 text-amber-500'>Start Conversation With Me!!!</h1>
                    <label className='font-bold '>Name</label> <br />
                    <input placeholder='Write Your Name' className='w-full p-1 border-2 rounded bg-purple-100 border-pink-500 ' type="text" name="to_name" />
                    <br />
                    <label className='font-bold '>Email</label> <br />
                    <input placeholder='Write Your Email' className='w-full p-1 border-2 rounded bg-purple-100 border-pink-500 ' type="email" name="from_name" />
                    <br />
                    <label className='font-bold '>Message</label> <br />
                    <textarea placeholder='Write Your Message' className='w-full p-1 border-2 rounded bg-purple-100 border-pink-500 ' name="message" />
                    <input className='bg-amber-700 w-full py-2 rounded-md text-1xl font-bold text-white  hover:bg-amber-900 border-b-8 border-white' type="submit" value="Send Me Message" />
                </form></motion.div>

            
        </div>

    );
};

export default Contacts;