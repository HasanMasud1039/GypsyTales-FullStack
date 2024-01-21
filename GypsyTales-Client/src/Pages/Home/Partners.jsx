import React from 'react';
import img1 from '../../assets/partners/l1.png'
import img2 from '../../assets/partners/l2.png'
import img3 from '../../assets/partners/l3.png'
import img4 from '../../assets/partners/l4.png'
import img5 from '../../assets/partners/l5.png'
import img6 from '../../assets/partners/l6.png'
import SectionTitle from '../../Component/SectionTitle';
const Partners = () => {
    return (
        <div className='bg-blue-200 py-8'> 
        <SectionTitle heading={''} subheading={'Our Trusted Partners'} additionalStyle={'text-center'}></SectionTitle>
            {/* <div className=' space-y-2'>
                <p className='text-blue-800 text-center py-4 text-[32px] font-serif font-semibold'>Our Trusted Partners</p>
            </div> */}
            <div className='md:flex justify-between grid grid-cols-3 px-8'>
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

export default Partners;