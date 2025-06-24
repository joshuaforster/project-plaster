import React from 'react';
import AboutHead from '../Pages/AboutPages/AboutHead';
import WhyJLR from '../Pages/AboutPages/whyJLR';
import MeetTeam from '../Pages/AboutPages/MeetTeam';
import HeaderSection from '../customComponents/headerSection';
import SingleReview from '../customComponents/ReviewComponents/SingleReview';
import { reviews } from '../Data/reviewData';

const About = () => {
  return (
    <div>
        <HeaderSection
          image='/images/projectVI/bumblebee-cottage-main-street-burton-overy-7-66a36f4a25cce.webp'
          title="About"
      />
      <AboutHead />
      <SingleReview 
        name={reviews[0].name} 
        text={reviews[0].text}
      />
      <WhyJLR />
      <MeetTeam/>
    </div>
  );
};

export default About;
