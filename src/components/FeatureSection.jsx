import React from 'react';
// import chefService from '../../public/home/chef-service.jpg'

const FeatureSection = () => {
    return (
        <div class="mt-[74px] mb-[74px] bg-[url('../../public/home/chef-service.jpg')] bg-cover bg-center lg:px-[112px] py-[120px]">
            <div className='bg-yellow-100 text-center py-[97px]'>
                <h1 className='text-[45px]'>The Daily Dish</h1>
                <p className='max-w-[762px] text-[16px] mx-auto'>This section displays a high-quality background image of food preparation with a white content box overlay in the center. Inside the box, there is a heading and a short description, likely a placeholder text, used to introduce the brand or a key feature of the restaurant.</p>
            </div>
        </div>
    );
};

export default FeatureSection;