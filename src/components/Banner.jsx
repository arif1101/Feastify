import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import banner image
import banner1 from '../../public/home/01.jpg'
import banner2 from '../../public/home/02.jpg'
import banner3 from '../../public/home/03.png'
import banner4 from '../../public/home/04.jpg'
import banner5 from '../../public/home/05.png'
import banner6 from '../../public/home/06.png'
// banner image put in array 
const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

const Banner = () => {
    return (
        <div className=''>
            <Carousel>
                {
                    banners.map((banner,index) => (
                    <div key={index} className=''>
                        <img src={banner} />
                    </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Banner;