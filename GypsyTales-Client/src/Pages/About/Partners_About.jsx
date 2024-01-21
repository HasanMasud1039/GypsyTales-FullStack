import React from 'react';
import img1 from '../../assets/partners/l1.png'
import img2 from '../../assets/partners/l2.png'
import img3 from '../../assets/partners/l3.png'
import img4 from '../../assets/partners/l4.png'
import img5 from '../../assets/partners/l5.png'
import img6 from '../../assets/partners/l6.png'

const Partners_About = () => {
    return (
        <div className='py-8'>
            <div data-aos="fade-down" className='grid grid-cols-3 md:flex contrast-0 justify-between px-8'>
                <img className='w-36 p-2' src={img1} alt="" />
                <img className='w-36 p-2' src={img2} alt="" />
                <img className='w-36 p-2' src={img3} alt="" />
                <img className='w-36 p-2' src={img4} alt="" />
                <img className='w-36 p-2' src={img5} alt="" />
                <img className='w-36 p-2' src={img6} alt="" />
            </div>
        </div>
    );
};

export default Partners_About;