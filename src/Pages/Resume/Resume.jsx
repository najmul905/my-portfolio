import React from 'react';

const Resume = () => {
const handelResumeDownload=()=>{
    const link=document.createElement('a');
    link.href='/Resume.pdf';
    link.target='_blank';
    link.download='Resume.pdf';
    link.click();
}


    return (
        <div>
            <button onClick={handelResumeDownload} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-1 rounded text-white font-bold'>Download Resume</button>
        </div>
    );
};

export default Resume;