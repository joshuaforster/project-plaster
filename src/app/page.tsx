import Hero from "./Pages/HomePages/Hero";
import Logo from "./Pages/HomePages/logo";
import Steps from "./Pages/HomePages/steps";
import SingleReview from "./customComponents/ReviewComponents/SingleReview";
import HomeGallery from "./Pages/HomePages/homegallery";
import Assurance from "./Pages/HomePages/Assurance";
import DoubleReview from "./customComponents/ReviewComponents/DoubleReview";
import Location from "./Pages/HomePages/Location";
import { reviews } from "./Data/reviewData";

export default function Home() {
  return (
   <div>
        <Hero/>
        <Logo/>
        <Steps />
        <SingleReview 
          name={reviews[7].name} 
          text={reviews[7].text}
        />
        <HomeGallery />
        <Assurance />
        <Location />
        <DoubleReview 
          textOne={reviews[5].text} 
          nameOne={reviews[5].name} 
          textTwo={reviews[4].text} 
          nameTwo={reviews[4].name} 
        />
   </div>
  );
}

