import React from 'react';
import HeroMenu from '../useComponents/HeroMenu';
import pizzaHeroImg from '/public/menu/pizza-bg.jpg'
import useMenu from '../useComponents/useMenu';
import Menu from '../useComponents/Menu';

const PizzaMenu = () => {

    const [menu] = useMenu()
    const pizzaMenu = menu.filter((item) => item.category === 'pizza')
    
    return (
        <div className='flex flex-col gap-10 lg:gap-[106px]'>
            <HeroMenu title={'pizza'} heroImg={pizzaHeroImg} size={'500'}></HeroMenu>
            <Menu menu={pizzaMenu} title={'pizza'} btnText={"FAVOURITE PIZZA"}></Menu>
        </div>
    );
};

export default PizzaMenu;