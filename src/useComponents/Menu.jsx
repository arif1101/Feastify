import React from 'react';
import MenuItem from '../shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const Menu = ({menu, title, btnText}) => {
    return (
        <div className='flex flex-col gap-6 '>

            <div className='grid md:grid-cols-2 gap-3 md:gap-[24px]'>
                {
                    menu.map((item, index) => <MenuItem key={index} item={item}></MenuItem>)
                }
            </div>

            <Link to={title==='menu'?'/menu' : `/order/${title}`}>
            <h1 className='max-w-[236px] md:h-[64px] flex md:text-[20px] items-center justify-center border rounded-xl border-b-[5px] border-yellow-600 mx-auto md:mt-[24px] btn bg-white'>{btnText}</h1></Link>
            
        </div>
    );
};

export default Menu;