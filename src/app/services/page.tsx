import ServicesHead from '../Pages/ServicePages/servicesHead';
import ServicesSection from '../Pages/ServicePages/servicesSection';
import HeaderSection from '../customComponents/headerSection';

export default function ServicesHome() {
  return (
    <div>
      <HeaderSection 
        image='/images/projectVI/bumblebee-cottage-main-street-burton-overy-2-66a36f244d8b4.webp' 
        title="Services" 
      />
      <ServicesHead />
      <ServicesSection />
    </div>
  );
}
