import React from 'react';
import Menu from '../useComponents/Menu';
import SectionTitle from '../useComponents/SectionTitle';
import useMenu from '../useComponents/useMenu';
import MenuItem from '../shared/MenuItem/MenuItem';

const DayOffer = () => {
    const [menu] = useMenu()
    const dayMenu = menu.filter((item) => item.category === 'offered')
    return (
        <div>
            <SectionTitle title={"TODAY'S OFFER"} subTitle={"---Don't miss---"}></SectionTitle>
            <div className='grid grid-cols-2 gap-[24px]'>
                {
                    dayMenu.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>
            <div className='w-[366px] h-[64px] flex text-[20px] items-center justify-center border rounded-xl border-b-[5px] border-yellow-600 mx-auto mt-[24px] btn bg-white'>
                <h1>ORDER YOUR FAVOURITE FOOD</h1>
            </div>
        </div>
    );
};

export default DayOffer;