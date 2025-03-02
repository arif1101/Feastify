import React from 'react';
import Banner from '../../components/Banner';
import CategoryFood from '../../components/CategoryFood';
import PopularMenu from '../../components/PopularMenu';
import ContactNumber from '../../components/ContactNumber';
import ChefService from '../../components/ChefService';
import ChefRecomends from '../../components/ChefRecomends';
import Feature from '../../components/Feature';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CategoryFood></CategoryFood>
          <ChefService></ChefService>
          <PopularMenu></PopularMenu>
          <ContactNumber></ContactNumber>
          <ChefRecomends></ChefRecomends>
          <Feature></Feature>
        </div>
    );
};

export default Home;