import React from 'react';
import Menu from '../useComponents/Menu';
import SectionTitle from '../useComponents/SectionTitle';
import useMenu from '../useComponents/useMenu';
import MenuItem from '../shared/MenuItem/MenuItem';

const DayOffer = () => {
    const [menu] = useMenu()
    const dayMenu = menu.filter((item) => item.category === 'offered')
    return (
        <div>
            <SectionTitle title={"TODAY'S OFFER"} subTitle={"---Don't miss---"}></SectionTitle>
            <Menu menu={dayMenu} btnText={'FAVOURITE FOOD'}></Menu>
        </div>
    );
};

export default DayOffer;