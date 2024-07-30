import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { HouseOutlined } from "@mui/icons-material";

const Menu = () => {
  const {isCameraActive, setIsCameraActive} = useContext(AppContext)
  const [isOnCalibrate, setIsOnCalibrate] = useState(false);
  const [isOnBinary,setIsOnBinary] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/calibrate') {
      setIsOnCalibrate(true) && setIsOnBinary(false);
    } else if (location.pathname === '/binary') {
      setIsOnBinary(true) && setIsOnCalibrate(false) ;
    } else{
      setIsOnBinary(false) && setIsOnCalibrate(false)  
    }
  }, [location]);

  const toggleCamera = () => {
    // const whitebox = document.getElementById('whitebox')    
    // if(whitebox) whitebox.style.display = isCameraActive ? 'none' : 'block';
    const videoElements = document.querySelectorAll('[id=webgazerVideoContainer]');
    videoElements.forEach(element => {
      element.style.display = isCameraActive ? 'none' : 'block';
    });
    setIsCameraActive(!isCameraActive);
  };

  const toggleMenu = () => {
    location.pathname !== '/calibrate' ? navigate('/calibrate') : navigate('/');
    setIsCameraActive(true)
    toggleCamera();
  };

  const toggleBinary = () => {
    location.pathname !== '/binary' ? navigate('/binary') : navigate('/');
    toggleCamera();
  }

  return (
    <div className="absolute w-full bottom-0 left-0 right-0 bg-bottomBar">
      <BottomNavigation
        sx={{
          "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
            color: "#00a4ac"
          }
        }}
        showLabels
      >
        <BottomNavigationAction label="Câmera" onClick={toggleCamera} icon={<CameraAltIcon />} />
        {!isOnCalibrate ? (
          <BottomNavigationAction label="Calibrar" onClick={toggleMenu} icon={<SettingsSuggestIcon />} />
        ) : (
          <BottomNavigationAction label="Home" onClick={toggleMenu} icon={<HouseOutlined/>} />
        )}
        {!isOnBinary ? (
          <BottomNavigationAction label="Sim/Não" onClick={toggleBinary} icon={
            <Link to={'/binary'}>
              <DoorSlidingIcon />
            </Link>}
          />
        ) : (
          <BottomNavigationAction label="Home" onClick={toggleBinary} icon={<HouseOutlined/>} />
        )}
      </BottomNavigation>
    </div>
  );
};

export default Menu;
