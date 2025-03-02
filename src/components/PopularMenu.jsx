import React, { useEffect, useState } from 'react';
import MenuItem from '../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])


    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>
            setMenu(data.filter((item) => item.category === 'popular'))
            )
    }, [])
    
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center gap-5 mb-5 lg:mt-20'>
                <p className='text-[20px] text-yellow-500'>---Check it out---</p>
                <div className='border w-[424px] mx-auto'></div>
                <h1 className='text-[40px]'>FROM OUR MENU</h1>
                <div className='border w-[424px] mx-auto'></div>
            </div>

            <div className='grid grid-cols-2 gap-[24px]'>
                {
                    menu.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>

            <div className='w-[236px] h-[64px] flex text-[20px] items-center justify-center border rounded-xl border-b-[5px] border-yellow-600 mx-auto mt-[24px] btn bg-white'>
                <h1>VIEW FULL MENU</h1>
            </div>
            
        </div>
    );
};

export default PopularMenu;