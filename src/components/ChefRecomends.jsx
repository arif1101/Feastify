import React, { useEffect, useState } from 'react';
import RecomendItem from './RecomendItem';

const ChefRecomends = () => {
    const [chefRecomend,setChefRecomend] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => 
            setChefRecomend(data.filter((item) => item.category === 'salad').slice(0,3))
        )
    }, [])

    return (
        <div className='mt-[130px] '>
            <div className='flex flex-col items-center gap-5 lg:mt-20 mb-[48px]'>
                <p className='text-[20px] text-yellow-500'>---Should Try---</p>
                <div className='border w-[424px] mx-auto'></div>
                <h1 className='text-[40px]'>CHEF RECOMMENDS</h1>
                <div className='border w-[424px] mx-auto'></div>
            </div>
        <div className='md:flex gap-6'>
            {
                chefRecomend.map((item,index) => (
                    <RecomendItem key={index} item={item}></RecomendItem>
                ))
            }
        </div>
        </div>

    );
};

export default ChefRecomends;