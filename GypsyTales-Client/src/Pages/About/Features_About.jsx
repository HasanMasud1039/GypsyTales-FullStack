import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHandHoldingHeart, FaRegHandshake, FaUserSecret, FaWallet } from 'react-icons/fa';
import { SiYourtraveldottv } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';
import SectionTitle from '../../Component/SectionTitle';

const Features_About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    return (
        <div className='py-8 bg-slate-100 dark:bg-slate-800'>
            <SectionTitle heading={'Why Choose Us'} subheading={'Features'} additionalStyle={'text-center'}></SectionTitle>
            {/* <div className='text-center space-y-2 my-8'>
                <p className='text-red-500 md:text-[32px] text-[24px] font-serif font-semibold'>Features</p><hr className='w-96 mx-auto'/>
                <p className='text-black dark:text-white md:text-[48px] text-[32px] font-serif font-bold'>Why Choose Us</p>
            </div> */}
            <div className='text-center grid md:grid-cols-3 grid-cols-2 gap-4 md:px-[10%] px-2 py-4 '>
                    <div data-aos="fade-right" className='bg-white dark:bg-black text-left space-y-4 shadow-lg md:md:w-96 w-56 w-56  p-8'>
                        <div className=' relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'><FaWallet className='text-3xl'/> </p>
                        </div>
                        <br /><span className='text-xl text-black font-bold my-4 dark:text-white'>Cheap Rates</span>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>We provide the best package in a cheaper rate.</span>
                    </div>
                    <div data-aos="fade-down" className='bg-white dark:bg-black text-left space-y-4 shadow-lg md:md:w-96 w-56 w-56  p-8'>
                        <div className=' relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'><SiYourtraveldottv/> </p>
                        </div>
                        <br /><span className='text-xl text-black font-bold my-4 dark:text-white'>Best Travel Plan</span>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>We provide the best plan according to our traveler demand.</span>
                    </div>
                    <div data-aos="fade-left" className='bg-white dark:bg-black text-left space-y-4 shadow-lg md:md:w-96 w-56 w-56  p-8'>
                        <div className=' relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'><FaRegHandshake className='text-[36px]'/> </p>
                        </div>
                        <br /><span className='text-xl text-black font-bold my-4 dark:text-white'>Hand-picked Tour</span>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>We provide hand-picked tours in a friendly manner.</span>
                    </div>
                    <div data-aos="fade-right" className='bg-white dark:bg-black text-left space-y-4 shadow-lg md:md:w-96 w-56 w-56  p-8'>
                        <div className=' relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'><FaUserSecret className='text-3xl'/> </p>
                        </div>
                        <br /><span className='text-xl text-black font-bold my-4 dark:text-white'>Private Guide</span>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>We provide private guide for travelers in a safe and secured manner.</span>
                    </div>
                    <div data-aos="fade-up" className='bg-white dark:bg-black text-left space-y-4 shadow-lg md:md:w-96 w-56 w-56  p-8'>
                        <div className=' relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'><TbBrandBooking className='text-3xl'/> </p>
                        </div>
                        <br /><span className='text-xl text-black font-bold my-4 dark:text-white'>Easy & Quick Booking</span>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>We provide private the easiest and quickest booking facilities.</span>
                    </div>
                    <div data-aos="fade-left" className='bg-white dark:bg-black text-left space-y-4 shadow-lg md:md:w-96 w-56 w-56  p-8'>
                        <div className=' relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'><FaHandHoldingHeart className='text-3xl'/> </p>
                        </div>
                        <br /><span className='text-xl text-black font-bold my-4 dark:text-white'>Customer Care 24/7</span>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>We provide customer service 24 hours and 7 days.</span>
                    </div>

                </div>

        </div>
    );
};

export default Features_About;