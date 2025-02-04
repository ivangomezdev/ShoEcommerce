import SocialBar from "@/components/socialBar/SocialBar";
import Header from "../components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";


import { carouselData, carouselUniqueData } from "@/utils/carouselData";
import  { CarouselCrossfadeExample } from "@/components/Carousel";
import GridCards from "@/components/GridCards";
import { cardData } from "@/utils/gridCardData";
import ShoesPreview from "@/components/ShoesPreview";
import Footer from "@/components/layouts/Footer";
import BoxLogin from "@/components/BoxLogin";


export default function Home() {
  return (
    <>
      <SocialBar />
      <Header />
      <CarouselCrossfadeExample data={carouselData}/>
      <GridCards data={cardData}/>
      <ShoesPreview />
      <CarouselCrossfadeExample data={carouselUniqueData}/>
      <BoxLogin/>   
     <Footer />  
    </>
  );
}
