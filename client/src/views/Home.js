import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Slider from '../components/organisms/Slider/Slider';
import IconSection from '../components/molecules/IconSection/IconSection';
import BestsellersSlider from '../components/organisms/BestsellersSlider/BestsellersSlider';

const HomeView = () => (
  <>
    <MainTemplate>
      <Slider />
      <IconSection />
      <BestsellersSlider />
    </MainTemplate>
  </>
);

export default HomeView;
