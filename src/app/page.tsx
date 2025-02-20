

import TestimonialCarousel from "./components/Slider";
import FeatureCards from "./components/Featurescard";
import Almari from "./components/Almari";
import Almaricarer from "./components/Almaricarer";
import Almarias from "./components/Gallery";
import ProfessionalCards from "./components/Professionalcards";
import Footer from "./components/Footer";
import StickyApplyButton from "./components/Stickybutton"
import Almaria from "./walmarai/page";




export default function Home() {
 
  return (
    
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
      <TestimonialCarousel/>
      <Almaricarer/>
      <FeatureCards/>
      <Almari/>
    
      <Almaria/>
      <Almarias/>
      <ProfessionalCards/>
      <Footer/> 
      <StickyApplyButton/>
      
    </div>
  );
}
