import React from 'react';

const MenuItem = ({item}) => {

    const {name,recipe,image,price} = item;
    
    return (
        <div className='max-w-[648px] flex gap-[32px] shadow border rounded-bl-[60px] p-2'>
            <img className='w-[108px] h-[104px] rounded-tr-full rounded-br-full rounded-bl-full shadow shadow-yellow-500' src={image} alt="" />
            <div className='flex flex-col gap-2'>
                <div className='flex text-xl justify-between'>
                    <h1>{name}</h1>
                    <h3 className='text-yellow-600'>{price}</h3>
                </div>
                <p className='text-[16px] text-zinc-400 max-w-[443px]'>{recipe}</p>
            </div>
 
        </div>
    );
};

export default MenuItem;