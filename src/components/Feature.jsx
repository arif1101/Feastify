import React from 'react';

const Feature = () => {
    return (
        <div className='bg-[url("../../public/home/featured.jpg")] bg-cover bg-center bg-no-repeat py-[130px] gap-12 flex flex-col mt-[130px]'>
            <div className='flex flex-col items-center gap-5 mb-5'>
                <p className='text-[20px] text-yellow-500'>---Check it out---</p>
                <div className='border border-white w-[424px] mx-auto'></div>
                <h1 className='text-[40px] text-white'>FROM OUR MENU</h1>
                <div className='border w-[424px] mx-auto border-white'></div>
            </div>

            <div className='flex gap-[68px] justify-center items-center'>
                <img src="/home/featured.jpg" className='w-[500px] h-[300px]' alt="" />
                <div className='bg-black bg-opacity-30'>
                    <div className='text-[20px] w-[500px] text-white b'>
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