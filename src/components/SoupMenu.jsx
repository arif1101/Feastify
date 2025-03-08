import React from 'react';
import HeroMenu from '../useComponents/HeroMenu';
import soupHeroImg from '/public/menu/soup-bg.jpg'
import useMenu from '../useComponents/useMenu';
import Menu from '../useComponents/Menu';
const SoupMenu = () => {
    const [menu] = useMenu()
    const soupMenu = menu.filter((item) => item.category === 'soup')
    return (
        <div className='lg:flex flex-col lg:gap-[106px]'>
            <HeroMenu title={'soup'} heroImg={soupHeroImg} size={'500'}></HeroMenu>
            <Menu menu={soupMenu} title={'soup'} btnText={"ORDER YOUR FAVOURITE SOUP"}></Menu>
        </div>
    );
};

export default SoupMenu;