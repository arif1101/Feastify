import React from 'react';
import HeroMenu from '../useComponents/HeroMenu';
import saladHeroImg from '/public/menu/salad-bg.jpg'
import useMenu from '../useComponents/useMenu';
import Menu from '../useComponents/Menu';

const SaladMenu = () => {

    const [menu] = useMenu()
    const saladMenu = menu.filter((item) => item.category === 'salad')
    
    return (
        <div>
            <HeroMenu heroImg={saladHeroImg} size={'500'}></HeroMenu>
            <Menu menu={saladMenu} btnText={"ORDER YOUR FAVOURITE SALAD"}></Menu>
            
        </div>
    );
};

export default SaladMenu;