import React from 'react';
import menuBannerImg from '/public/Menu/banner3.jpg'
import HeroMenu from '../../useComponents/HeroMenu';
import DayOffer from '../../components/DayOffer';
import Dessert from '../../components/Dessert';
import PizzaMenu from '../../components/PizzaMenu';
import SaladMenu from '../../components/SaladMenu';
import SoupMenu from '../../components/SoupMenu';

const MyMenu = () => {
    return (
        <div className='flex flex-col lg:gap-[55px]'>
            {/* hero section  */}
            <HeroMenu heroImg={menuBannerImg} size="800"></HeroMenu>
            {/* daily offer  */}
            <DayOffer></DayOffer>
             
            {/* desert section  */}
            <Dessert></Dessert>

            {/* pizza menu  */}
            <PizzaMenu></PizzaMenu>

            {/* salad menu  */}
            <SaladMenu></SaladMenu>

            {/* soup menu  */}
            <SoupMenu></SoupMenu>
        </div>
    );
};

export default MyMenu;