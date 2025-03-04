import React from 'react';
import HeroMenu from '../useComponents/HeroMenu';
import desertImage from '/public/Home/chef-service.jpg'
import useMenu from '../useComponents/useMenu';
import Menu from '../useComponents/Menu';

const Dessert = () => {

    const [menu] = useMenu();
    const desertMenu = menu.filter((item) => item.category === 'dessert')
    
    return (
        <div>
            <HeroMenu heroImg={desertImage} size={'500'}></HeroMenu>
            <Menu menu={desertMenu} btnText={'ORDER YOUR FAVOURITE FOOD'}></Menu>
        </div>
    );
};

export default Dessert;