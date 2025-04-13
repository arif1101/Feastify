import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='flex flex-col items-center gap-3 md:gap-5 mb-5'>
            <p className='md:text-[20px] text-yellow-500'>{subTitle}</p>
            <div className='border w-[300px] md:w-[424px] mx-auto'></div>
            <h1 className='text-3xl md:text-[40px]'>{title}</h1>
            <div className='border w-[300px] md:w-[424px] mx-auto'></div>
        </div>
    );
};

export default SectionTitle;