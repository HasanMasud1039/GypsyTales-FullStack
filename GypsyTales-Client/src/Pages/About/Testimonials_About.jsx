import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/navigation';
import img1 from '../../assets/bg/m2.webp'
import img2 from '../../assets/bg/m21.jpg'
import img3 from '../../assets/bg/m3.jpeg'
import ic from '../../assets/testimonial/ic.png'
import SectionTitle from '../../Component/SectionTitle';

const Testimonials_About = () => {
    const reviews = [
        {
            id: 1,
            name: 'Hasan Masud - Photographer',
            review: 'GypsyTales made our dream vacation a reality! From the moment we contacted them, they provided exceptional service and personalized attention. They meticulously planned our itinerary, ensuring that we got the most out of our trip. The experiences they arranged were truly unforgettable. We could not be happier with our choice of GypsyTales for our travel partner.',
        },
        {
            id: 2,
            name: 'Maliha Mehjabin - Entrepreneur',
            review: "Our honeymoon, organized by GypsyTales, was nothing short of a fairy tale. From romantic sunsets in exotic locations to intimate dinners at hidden gems, every moment was a page from a love story. Their ability to turn dreams into reality is unparalleled. GypsyTales has left us with beautiful memories that we will cherish for a lifetime.",
        },
        {
            id: 3,
            name: 'Azman Amin - Software Engineer, Google',
            review: "I can not speak highly enough about GypsyTales. Their team's dedication to creating memorable journeys is second to none. The attention to detail, seamless logistics, and excellent customer service are truly commendable. Our recent adventure with them exceeded all expectations. We're already planning our next trip with GypsyTales!",
        }
    ]
    return (
        <div className='py-8'>
            <div className='md:flex mb-4 justify-between'>
                <div className='flex p-12 ms-4 md:my-0 my-32 relative'>
                    <img className='md:h-64 md:w-80 h-48 w-64 border-4 absolute rotate-[15deg] md:rotate-[-15deg] md:top-0 top-[-20%] left-[30%] md:left-[90%]' src={img1} alt="" />
                    <img className='md:h-64 md:w-80 h-48 w-64 md:ms-0 ms-[-42px] rotate-[-12deg] border-4' src={img3} alt="" />
                    <img className='md:h-64 md:w-80 h-48 w-64 border-4 absolute rotate-[-5deg] md:left-[60%] left-[30%] md:top-[50%] top-[60%]' src={img2} alt="" />
                </div>
                <div className='md:w-[50%] px-4'>
                <SectionTitle heading={'What Travelers Say'} subheading={'Testimonials'} additionalStyle={'text-center'}/>
                    <div className='w-full'>
                        {/* <div className='text-center space-y-2'>
                            <p className='text-red-500 text-[32px] font-serif font-semibold'>Testimonials</p><hr className='w-96 mx-auto' />
                            <p className='text-black dark:text-white text-[48px] font-serif font-bold'>What Travelers Say</p>
                        </div> */}

                        <img className='w-24  pt-2 mx-auto' src={ic} alt="" />
                        <Swiper navigation={true} spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            {
                                reviews.map(review => <SwiperSlide key={review.id}>
                                    <div className="flex flex-col text-center items-center mx-24 my-4">
                                        <p style={{fontFamily: 'Edu TAS Beginner'}} className="text-xl dark:text-zinc-300 my-10 ">"{review.review}"</p>
                                        <h3 className=" text-xl text-orange-400">-{review.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
<hr />
        </div>
    );
};

export default Testimonials_About;