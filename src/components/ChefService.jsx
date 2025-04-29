import React from 'react';
// import chefService from '../../public/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className="mt-11 mb-11 md:mt-[74px] md:mb-[74px] bg-[url('../home/chef-service.jpg')] bg-cover bg-center px-10 py-10 lg:px-[112px] md:py-[120px]">
            <div className='bg-yellow-100 text-center rounded-2xl px-4 py-4 md:py-[97px] flex flex-col gap-4'>
                <h1 className='text-3xl md:text-[45px]'>The Daily Dish</h1>
                <p className='max-w-[762px] text-[14px] md:text-[16px] mx-auto'>This section displays a high-quality background image of food preparation with a white content box overlay in the center. Inside the box, there is a heading and a short description, likely a placeholder text, used to introduce the brand or a key feature of the restaurant.</p>
            </div>
        </div>
    );
};

export default ChefService;