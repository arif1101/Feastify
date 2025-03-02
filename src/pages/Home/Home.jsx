import React from 'react';
import Banner from '../../components/Banner';
import CategoryFood from '../../components/CategoryFood';
import FeatureSection from '../../components/FeatureSection';
import PopularMenu from '../../components/PopularMenu';
import ContactNumber from '../../components/ContactNumber';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CategoryFood></CategoryFood>
          <FeatureSection></FeatureSection>
          <PopularMenu></PopularMenu>
          <ContactNumber></ContactNumber>
        </div>
    );
};

export default Home;Home