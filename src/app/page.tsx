

import TestimonialCarousel from "./components/Slider";
import FeatureCards from "./components/Featurescard";
import RecruitmentProcess from "./components/Recuritment";
import Almari from "./components/Almari";
import Almaricarer from "./components/Almaricarer";
import Almaria from "./components/W-almaria";
import Almarias from "./components/Gallery";
import ProfessionalCards from "./components/Professionalcards";
import Footer from "./components/Footer";
import StickyApplyButton from "./components/Stickybutton";
import Jobvacency from "./components/Jobvacency";




export default function Home() {
 
  return (
    
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
      <TestimonialCarousel/>
      <Almaricarer/>
      <FeatureCards/>
      <Almari/>
      <Jobvacency/>
      <RecruitmentProcess/>
      <Almaria/>
      <Almarias/>
      <ProfessionalCards/>
      <Footer/> 
      <StickyApplyButton/>
      
    </div>
  );
}
