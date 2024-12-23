import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Button, Typography } from "@mui/material";
import logo from "../../assets/header-logo.svg";
import RoomIcon from "@mui/icons-material/Room";
import GradingIcon from "@mui/icons-material/Grading";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WatchIcon from "@mui/icons-material/Watch";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import AodIcon from "@mui/icons-material/Aod";
import BluetoothAudioIcon from "@mui/icons-material/BluetoothAudio";
import EvStationIcon from "@mui/icons-material/EvStation";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import KitchenIcon from "@mui/icons-material/Kitchen";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

const accordionData = [
  {
    image: <SmartphoneIcon />,
    question: "Mobiles",
    answer: [
      "Apple",
      "iPhone",
      "MacBook",
      "iPad",
      "Nokia",
      "Itel",
      "Oppo",
      "Realme",
      "Samsung",
      "Xiaxomi",
    ],
  },
  {
    image: <WatchIcon />,
    question: "Smart Watches",
    answer: [
      "Asstored",
      "Deny",
      "Faster",
      "Samsung",
      "Seveston",
      "Yolo",
      "Zero",
    ],
  },
  {
    image: <CastForEducationIcon />,
    question: "Wireless EarBuds",
    answer: [
      "Airox",
      "Asstored",
      "Anker",
      "Audioninc",
      "Lenovo",
      "Ronin",
      "SoundPeats",
      "Xioxomi",
      "Zero",
    ],
  },
  {
    image: <CatchingPokemonIcon />,
    question: "Air Purifiers",
    answer: ["Burrior", "Xiaxomi", "Trimmer Shaver"],
  },
  {
    image: <AirlineSeatLegroomExtraIcon />,
    question: "Personal Cares",
    answer: [
      "Charging Cables",
      "Wireless Chargers",
      "Wall Chargers",
      "Car Chargers",
    ],
  },
  {
    image: <AodIcon />,
    question: "Mobiles Accessories",
    answer: ["Audionic", "Faster", "Xiaxomi", "Sound Crash"],
  },
  {
    image: <BluetoothAudioIcon />,
    question: "Bluetooth Speaker",
    answer: ["Bases", "Faster", "Joyroom", "Xiaxomi"],
  },
  {
    image: <EvStationIcon />,
    question: "Power Banks",
    answer: ["Apple", "G-tide", "Samsung", "Xiaxomi"],
  },
  {
    image: <TabletAndroidIcon />,
    question: "Tablets",
    answer: ["Apple", "G-tide", "Samsung", "Xiaxomi"],
  },
  {
    image: <LaptopMacIcon />,
    question: "Laptop",
    answer: ["Apple", "Dell", "Hp", "Infinix"],
  },
  {
    image: <KitchenIcon />,
    question: "Tv & Home Appliances",
    answer: ["LED Tv", "Ac", "Fridge"],
  },
  {
    image: <TwoWheelerIcon />,
    question: "Motorcycles",
    answer: ["Honda", "Union star", "Unique", "Yamaha"],
  },
];

export default function OpenDrawer(props) {
  const { open, toggleDrawer } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation(); // Prevents parent onClick from triggering
  };

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 400 }} role="presentation">
          <Box className="bg-color text-white">
            <Box className="container mx-auto p-5">
              <img className="w-1/2 mx-3" src={logo} alt="Logo" />
              <Box className="flex my-3">
                <AccountCircleIcon className="mx-3" />
                <Typography variant="body1">My Account</Typography>
              </Box>
              <Box className="flex my-3 ">
                <RoomIcon className="mx-3" />
                <Typography variant="body1"> Track my Order</Typography>
              </Box>
              <Box className="flex my-3 ">
                <GradingIcon className="mx-3" />
                <Typography variant="body1">Launch a Complaint</Typography>
              </Box>
              <Box className="flex my-3 ">
                <NotificationsNoneIcon className="mx-3" />
                <Typography variant="body1">Notifications</Typography>
              </Box>
              <Box className="flex my-3 ">
                <ExitToAppIcon className="mx-3" />
                <Typography variant="body1">Logout</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="ps-5 pt-3">
            <Typography variant="h6" className="text-gray-500">
              Categories
            </Typography>
          </Box>

          {/* Accordion Section */}
          <Box className="container my-5" onClick={stopPropagation}>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}bh-content`}
                  id={`panel${index + 1}bh-header`}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {item?.image && <Box sx={{ mr: 2 }}>{item.image}</Box>}
                    <Typography sx={{ color: "text.secondary" }}>
                      {item?.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      {item.answer.map((answerItem, idx) => (
                        <li
                          key={idx}
                          className="p-2  bg-white rounded-lg hover:bg-gray-200 transition duration-200"
                        >
                          {answerItem}
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box className="container mx-auto">
            <Typography variant="h6" className="text-gray-500 mb-4">
              Popular Lists
            </Typography>
            {[
              "Best Mobiles Under 10000",
              "Best Mobiles Under 15000",
              "Best Mobiles Under 20000",
              "Best Mobiles Under 30000",
              "Best Mobiles Under 40000",
              "Best Mobiles Under 50000",
              "Best Mobiles Under 60000",
              "Best Mobiles Under 80000",
              "Best Mobiles Under 100000",
              "Best 5G Phones",
              "Best Camera Phones",
              "Best Selfie Camera Phones",
              "Best PUBG Mobiles",
              "Most Expensive Phones",
              "Top 10 Fast Charging Mobiles",
              "Best Mobiles of 2023",
            ].map((text, index) => (
              <Box key={index} className="my-2">
                <button
                  className="text-gray-500 border border-gray-500 bg-white py-2 px-7 rounded cursor-pointer 
                   hover:bg-blue-400 hover:text-white transition duration-200"
                >
                  {text}
                </button>
              </Box>
            ))}
          </Box>

          <Box className="container mx-auto mt-10">
            <Typography variant="h6" className="text-gray-500">
              MAIN NAVIGATION
            </Typography>
            <ul className="text-gray-500">
              <li>About</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Press & Blog</li>
              <li>Installments Plan</li>
              <li>Terms & Condition</li>
              <li>Warranty Center</li>
            </ul>
          </Box>

          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
