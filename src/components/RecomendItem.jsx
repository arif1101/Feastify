import React from 'react';

const RecomendItem = ({item}) => {
    return (
    <div className='border max-w-[424px] pb-[52px] flex flex-col gap-8'>
        <div className='w-full h-[300px] overflow-hidden'>
        <img className='w-full h-full object-cover' src={item.image} alt="" />
        </div>
        <div className='px-[40px] flex flex-col items-center gap-6'>
            <h1 className='text-[24px]'>{item.name}</h1>
            <p className='text-[16px]'>{item.recipe}</p>
            <button className='w-[196px] h-[64px] btn border border-b-[5px] border-yellow-600 rounded-xl'>ADD TO CART</button>
        </div>
    </div>
    );
};

export default RecomendItem;