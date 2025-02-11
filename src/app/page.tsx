

import TestimonialCarousel from "./components/Slider";
import FeatureCards from "./components/Featurescard";
import RecruitmentProcess from "./components/Recuritment";
import Almari from "./components/Almari";
import Almaricarer from "./components/Almaricarer";
import Almaria from "./components/W-almaria";
import Almarias from "./components/Gallery";
import ProfessionalCards from "./components/Professionalcards";
import Footer from "./components/Footer";

import Almaraipic from "./components/Almaraipic";

export default function Home() {
 
  return (
    
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Almaraipic/>
      <TestimonialCarousel/>
      <Almaricarer/>
      <FeatureCards/>
      <Almari/>
      <RecruitmentProcess/>
      <Almaria/>
      <Almarias/>
      <ProfessionalCards/>
      <Footer/> 
      
    </div>
  );
}
