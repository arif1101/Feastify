import React from 'react';
import SectionTitle from '../useComponents/SectionTitle';

const Feature = () => {
    return (
        <div className='bg-[url("../../public/home/featured.jpg")] bg-cover bg-center bg-no-repeat py-11 md:py-[130px] gap-10 md:gap-12 flex flex-col mt-10 md:mt-[130px]'>
            <SectionTitle className="!text-white" color={'white'} title={'FROM OUR MENU'} subTitle={'---Check it out---'}></SectionTitle>
            {/* <div className='flex flex-col items-center gap-5 mb-5'>
                <p className='text-[20px] text-yellow-500'></p>
                <div className='border border-white w-[424px] mx-auto'></div>
                <h1 className='text-[40px] text-white'>FROM OUR MENU</h1>
                <div className='border w-[424px] mx-auto border-white'></div>
            </div> */}

            <div className='flex flex-col md:flex-row gap-10 md:gap-[68px] justify-center items-center'>
                <img src="/home/featured.jpg" className='w-[500px] h-[300px]' alt="" />
                <div className='bg-black bg-opacity-30'>
                    <div className='text-[20px] max-w-[500px] text-white b'>
                        <h3>March 20, 2023</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae atque, velit dolorem voluptate ipsa officia laudantium a ratione cum!</p>
                    </div>
                    <button className='text-white text-[22px]'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;