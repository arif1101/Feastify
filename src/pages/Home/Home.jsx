import React from 'react';
import Banner from '../../components/Banner';
import CategoryFood from '../../components/CategoryFood';
import FeatureSection from '../../components/FeatureSection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CategoryFood></CategoryFood>
          <FeatureSection></FeatureSection>
        </div>
    );
};

export default Home;Home