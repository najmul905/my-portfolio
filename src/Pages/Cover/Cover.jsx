import React from 'react';

const Cover = () => {
    const handelCoverDownload=()=>{
        const link=document.createElement('a');
        link.href='../../../public/Cover letter.pdf';
        link.target='_blank';
        link.download='Cover letter.pdf';
                link.click();}

    return (
        <div>
            <button onClick={handelCoverDownload} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-1 rounded text-white font-bold'>Download Cover Letter</button>
        </div>
    );
};

export default Cover;