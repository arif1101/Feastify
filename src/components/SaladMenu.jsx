import React from 'react';
import HeroMenu from '../useComponents/HeroMenu';
import saladHeroImg from '/public/menu/salad-bg.jpg'
import useMenu from '../useComponents/useMenu';
import Menu from '../useComponents/Menu';

const SaladMenu = () => {

    const [menu] = useMenu()
    const saladMenu = menu.filter((item) => item.category === 'salad')
    
    return (
        <div className='lg:flex flex-col lg:gap-[106px]'>
            <HeroMenu title={'salad'} heroImg={saladHeroImg} size={'500'}></HeroMenu>
            <Menu menu={saladMenu} title={'salad'} btnText={"ORDER YOUR FAVOURITE SALAD"}></Menu>
            
        </div>
    );
};

export default SaladMenu;