import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import tour1 from '../../assets/ship.jpg'
import tour2 from '../../assets/trip.jpg'
import tour3 from '../../assets/tour.jpg'
import tour4 from '../../assets/tour2.jpg'
import SectionTitle from '../../Component/SectionTitle';

const Updates = () => {
    return (
        <div className='dark:text-white py-4'>
            <SectionTitle heading={'Latest Travel Guide'} subheading={'Updates'} additionalStyle={'text-center'}></SectionTitle>
            {/* <div className='py-8 text-center'>
                <p className='text-blue-800   text-[24px] md:text-[32px] font-serif font-semibold'>Updates</p>
                <p className=' text-[32px] md:text-[48px] font-serif font-bold'>Latest Travel Guide</p>
            </div> */}
            <div className='grid grid-cols-2 gap-6 px-4'>
                <div className='md:flex space-y-4  md:p-6 '>
                    <img className='w-48 h-40 md:mx-6 rounded-lg' src={tour1} alt="" />
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-semibold'>July 25, 2023</p>
                            <span className='flex gap-2 text-lg font-semibold'><FaDotCircle className='m-1' /> Admin</span>
                        </div>
                        <div>
                            <p className='text-xl py-4 font-bold font-serif'>The Impact of Covid-19 0n Travel & Tourism Industry</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex space-y-4  md:p-6 '>
                    <img className='w-48 h-40 md:mx-6 rounded-lg' src={tour2} alt="" />
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-semibold'>July 25, 2022</p>
                            <span className='flex gap-2 text-lg font-semibold'><FaDotCircle className='m-1' /> Traveler</span>
                        </div>
                        <div>
                            <p className='text-xl py-4 font-bold font-serif'>The Impact of Russia-Ukraine War 0n Travel & Tourism Industry</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex space-y-4  md:p-6 '>
                    <img className='w-48 h-40 md:mx-6 rounded-lg' src={tour4} alt="" />
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-semibold'>May 21, 2023</p>
                            <span className='flex gap-2 text-lg font-semibold'><FaDotCircle className='m-1' /> Admin</span>
                        </div>
                        <div>
                            <p className='text-xl py-4 font-bold font-serif'>Travel & Tourism Industry of Bangladesh is Growing</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex space-y-4  md:p-6 '>
                    <img className='w-48 h-40 md:mx-6 rounded-lg' src={tour3} alt="" />
                    <div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-semibold'>March 20, 2023</p>
                            <span className='flex gap-2 text-lg font-semibold'><FaDotCircle className='m-1' /> Admin</span>
                        </div>
                        <div>
                            <p className='text-xl py-4 font-bold font-serif'>Perfect Time to Travel Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Updates;