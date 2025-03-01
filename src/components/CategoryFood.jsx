import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../public/home/slide1.jpg'
import slider2 from '../../public/home/slide2.jpg'
import slider3 from '../../public/home/slide3.jpg'
import slider4 from '../../public/home/slide4.jpg'
import slider5 from '../../public/home/slide5.jpg'

const sliders = [
    { image: slider1, name: "Salad" },
    { image: slider2, name: "Pizza" },
    { image: slider3, name: "Soup" },
    { image: slider4, name: "Cake" },
    { image: slider5, name: "Burger" }
];

const CategoryFood = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center gap-5 mb-5 lg:mt-20'>
                <p className='text-[20px] text-yellow-500'>---From 11:00am to 10:00pm--</p>
                <div className='border w-[424px] mx-auto'></div>
                <h1 className='text-[40px]'>ORDER ONLINE</h1>
                <div className='border w-[424px] mx-auto'></div>
            </div>
            
            <div className='p-5 shadow rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-400'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    sliders.map((slide, index) =>(
                        <SwiperSlide key={index}>
                            <img className='' src={slide.image} alt="" />
                            <h3 className='text-[32px] flex justify-center -mt-16 text-white'>{slide.name}</h3>
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>
            </div>
            
        </div>
    );
};

export default CategoryFood;