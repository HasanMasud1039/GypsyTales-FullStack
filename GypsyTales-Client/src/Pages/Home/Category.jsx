import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../Component/SectionTitle';

const Category = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    const cardData = [
        {
            icon: 'https://i.ibb.co/JrRk9Db/house.png',
            title: 'City Tours',
            number: '10 Tours'
        },
        {
            icon: 'https://i.ibb.co/vd2rZk6/boat.png',
            title: 'Boat Tours',
            number: '6 Tours'
        },
        {
            icon: 'https://i.ibb.co/TTwCjV8/beach.png',
            title: 'Beach Tours',
            number: '12 Tours'
        },
        {
            icon: 'https://i.ibb.co/8K9jy10/burger.png',
            title: 'Food',
            number: '26 Tours'
        },
        {
            icon: 'https://i.ibb.co/dGK6j3m/hiking.png',
            title: 'Hiking',
            number: '12 Tours'
        },
        {
            icon: 'https://i.ibb.co/x5WD7ZX/mountain.png',
            title: 'Mountain',
            number: '20 Tours'
        },
    ]
    return (
        <div className='md:p-8 p-4 md:pt-12 pt-56 dark:text-white'>
            <SectionTitle heading={'Pick A Tour Type'} subheading={'Browse By Category'} additionalStyle={'text-center'}></SectionTitle>
            {/* <div className='text-center space-y-4'>
                <p className='text-blue-800 md:text-[32px] text-[24px] font-serif font-semibold'>Browse By Category</p>
                <p className='text-black dark:text-white md:text-[48px] text-[32px] font-serif font-bold'>Pick A Tour Type</p>
            </div> */}
            <div className='md:flex justify-evenly grid grid-cols-3 my-6'>
                {
                    cardData.map(card =>
                        <div data-aos="fade-down" className='p-4 dark:border-2 rounded-lg border-1 shadow-lg md:w-44 h-44 text-center flex flex-col items-center justify-center  space-y-2'>
                            <img className='w-14 m-1' src={card.icon} alt="photo" />
                            <p className='text-gray-00 font-bold text-lg'>{card.title}</p>
                            <p className='text-gray-500 font-semibold'>{card.number}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;