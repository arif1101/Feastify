import React from 'react';
import MenuItem from '../shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const Menu = ({menu, title, btnText}) => {
    return (
        <div className='flex flex-col gap-6'>

            <div className='grid grid-cols-2 gap-[24px]'>
                {
                    menu.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>

            <Link to={`/order/${title}`}>
            <h1 className='w-[236px] h-[64px] flex text-[20px] items-center justify-center border rounded-xl border-b-[5px] border-yellow-600 mx-auto mt-[24px] btn bg-white'>{btnText}</h1></Link>
            
        </div>
    );
};

export default Menu;