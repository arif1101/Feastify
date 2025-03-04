import React from 'react';
import menuBannerImg from '/public/Menu/banner3.jpg'
import HeroMenu from '../../useComponents/HeroMenu';
import DayOffer from '../../components/DayOffer';
import Dessert from '../../components/Dessert';

const MyMenu = () => {
    return (
        <div className=''>
            {/* hero section  */}
            <HeroMenu heroImg={menuBannerImg} size="800"></HeroMenu>
            {/* daily offer  */}
            <DayOffer></DayOffer>
             
            {/* desert section  */}
            <Dessert></Dessert>
        </div>
    );
};

export default MyMenu;