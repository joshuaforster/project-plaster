import Hero from "./pages/homepages/hero";
import Steps from "./pages/homepages/steps";
import Assurance from "./pages/homepages/assurance";
import Location from "./pages/homepages/location";
import HomeGallery from "./pages/homepages/homegallery";

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

