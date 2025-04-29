import React, { useState } from 'react';
import HeroMenu from '../../useComponents/HeroMenu';
import orderFoodImg from '/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import useMenu from '../../useComponents/useMenu';
import FoodCard from '../../shared/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu()

  const saladMenu = menu.filter((item) => item.category==='salad')
  const pizzaMenu = menu.filter((item) => item.category==='pizza')
  const soupMenu = menu.filter((item) => item.category==='soup')
  const dessertMenu = menu.filter((item) => item.category==='dessert')
  const drinkMenu = menu.filter((item) => item.category==='drinks')
    
    return (
        <div className='flex px-3 flex-col gap-[130px]'>
            <HeroMenu heroImg={orderFoodImg} size={'800'}></HeroMenu>
            {/* category food */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="">
            <TabList className="flex justify-between px-2 md:justify-center md:gap-[58px] text-[24px] mb-[48px]">
                {categories.map((item, index) => (
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

            <TabPanel>
              <div className='grid md:grid-cols-[auto_auto_auto] justify-between gap-3'>
              {
                  saladMenu.map((item,index) => <FoodCard key={index} item={item}></FoodCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-[auto_auto_auto] justify-between gap-3'>
              {
                  pizzaMenu.map((item,index) => <FoodCard key={index} item={item}></FoodCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-[auto_auto_auto] justify-between gap-3'>
              {
                  soupMenu.map((item,index) => <FoodCard key={index} item={item}></FoodCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-[auto_auto_auto] justify-between gap-3'>
              {
                  dessertMenu.map((item,index) => <FoodCard key={index} item={item}></FoodCard>)
              }
              </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-[auto_auto_auto] justify-between gap-3'>
              {
                  drinkMenu.map((item,index) => <FoodCard key={index} item={item}></FoodCard>)
              }
              </div>
            </TabPanel>
          </Tabs>
        </div>
    );
};

export default Order;