import React from 'react';
import HeroMenu from '../useComponents/HeroMenu';
import soupHeroImg from '/public/menu/soup-bg.jpg'
import useMenu from '../useComponents/useMenu';
import Menu from '../useComponents/Menu';
const SoupMenu = () => {
    const [menu] = useMenu()
    const soupMenu = menu.filter((item) => item.category === 'soup')
    return (
        <div className='flex flex-col gap-10 lg:gap-[106px]f'>
            <HeroMenu title={'soup'} heroImg={soupHeroImg} size={'500'}></HeroMenu>
            <Menu menu={soupMenu} title={'soup'} btnText={"FAVOURITE SOUP"}></Menu>
        </div>
    );
};

export default SoupMenu;