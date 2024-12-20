import "./App.css";
import BlueCards from "./componants/BlueCards.jsx";
import ButtonSection from "./componants/ButtonSection.jsx";

import BestSeller from "./componants/CardSection/Best-seller/BestSeller.jsx";
import FirstSection from "./componants/CardSection/FirstSection";
import FourthSection from "./componants/CardSection/FourthSection.jsx";
import SecondSection from "./componants/CardSection/SecondSection.jsx";
import ThirdSection from "./componants/CardSection/ThirdSection.jsx";
import CustomerCard from "./componants/CustomerCard.jsx";
import Footer from "./componants/Footer.jsx";
import HeroImages from "./componants/HeroImages";
import HeroSection from "./componants/HeroSection";
import MobileImg from "./componants/MobileImg.jsx";
import Reviews from "./componants/Reviews.jsx";
import SubFooter from "./componants/SubFooter.jsx";
import VideoSection from "./componants/VideoSection.jsx";
import { Box} from "@mui/material";

function App() {
  return (
    <Box className='h-screen bg-gray-100'>
      <HeroSection />
      <HeroImages />
     <FirstSection />
      <VideoSection/>
      <BestSeller/>
      <SecondSection/>
      <MobileImg/>
      <ThirdSection/>
      <ButtonSection/>
      <Reviews/>
      <CustomerCard/>
      <BlueCards/>
      <FourthSection/>
      <SubFooter/>
      <Footer/>
    </Box>
  );
}

export default App;
