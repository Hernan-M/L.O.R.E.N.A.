import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {

  const [isCameraActive, setIsCameraActive] = useState(true)

  const toggleCamera = () => {
    const video =  document.querySelectorAll('[id = webgazerVideoContainer]')
    if (isCameraActive){
      video.forEach(element=> 
        element.style.display = "none"
      )
      setIsCameraActive(!isCameraActive)
    } else {
      video.forEach(element=> 
        element.style.display = "block"
      )
      setIsCameraActive(!isCameraActive)
    }
  }

  useEffect(() => {
   

  })
  return (
    <div className="absolute w-100 bottom-0 left-0 right-0">
      <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction label="Câmera" onClick={toggleCamera} icon={<CameraAltIcon />} />
          <BottomNavigationAction label="Calibrar" icon={<Link to={'/calibrate'}> <SettingsSuggestIcon /> </Link>} />
          <BottomNavigationAction label="Sim/Não" icon={ <Link to={'/binary'}> <DoorSlidingIcon /> </Link>} />
      </BottomNavigation>
    </div>
  )
}

export default Menu