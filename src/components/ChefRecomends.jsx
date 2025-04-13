import React, { useEffect, useState } from 'react';
import RecomendItem from './RecomendItem';
import SectionTitle from '../useComponents/SectionTitle';

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
        <div className='mt-10 md:mt-[130px] '>
            <div className='flex flex-col items-center gap-5 lg:mt-20 md:mb-[48px]'>
                <SectionTitle title={'CHEF RECOMMENDS'} subTitle={'---Should Try---'}></SectionTitle>
            </div>
        <div className='gap-3 flex flex-col md:flex-row md:gap-6'>
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