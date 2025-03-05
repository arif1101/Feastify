import React, { useState } from 'react';
import HeroMenu from '../../useComponents/HeroMenu';
import orderFoodImg from '/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='flex flex-col gap-[130px]'>
            <HeroMenu heroImg={orderFoodImg} size={'800'}></HeroMenu>
            {/* category food */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="">
            <TabList className="flex justify-center gap-[58px] text-[24px]">
                {["SALAD", "PIZZA", "SOUPS", "DESSERTS", "DRINKS"].map((item, index) => (
                <Tab
                    key={index}
                    className={`cursor-pointer ${
                    tabIndex === index ? "!text-yellow-500 font-bold border-b-[4px] !border-yellow-500" : ""
                    }`}
                >
                    {item}
                </Tab>
                ))}
            </TabList>

      <TabPanel>salad</TabPanel>
      <TabPanel>pizza</TabPanel>
      <TabPanel>soups</TabPanel>
      <TabPanel>desserts</TabPanel>
      <TabPanel>drinks</TabPanel>
    </Tabs>
        </div>
    );
};

export default OrderFood;