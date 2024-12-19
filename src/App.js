import "./App.css";
import BestSeller from "./componants/CardSection/Best-seller/BestSeller.jsx";
import FirstSection from "./componants/CardSection/FirstSection";
import SecondSection from "./componants/CardSection/SecondSection.jsx";
import HeroImages from "./componants/HeroImages";
import HeroSection from "./componants/HeroSection";
import MobileImg from "./componants/MobileImg.jsx";
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
    </Box>
  );
}

export default App;
