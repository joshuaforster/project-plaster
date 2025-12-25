import Hero from "./Pages/HomePages/Hero";
import Steps from "./Pages/HomePages/steps";
import Assurance from "./Pages/HomePages/Assurance";
import Location from "./Pages/HomePages/Location";
import HomeGallery from "./Pages/HomePages/homegallery";

export default function Home() {
  return (
   <div>
        <Hero/>
        <Steps/>
        <HomeGallery />
        <Assurance />
        <Location />
   </div>
  );
}