import "./App.css";
import FirstSection from "./componants/CardSection/FirstSection";
import HeroImages from "./componants/HeroImages";
import HeroSection from "./componants/HeroSection";
import VideoSection from "./componants/VideoSection.jsx";
import { Box} from "@mui/material";

function App() {
  return (
    <Box className='h-screen bg-gray-100'>
      <HeroSection />
      <HeroImages />
     <Box>
     <FirstSection />
     </Box>
      <VideoSection className='relative'/>
    </Box>
  );
}

export default App;
