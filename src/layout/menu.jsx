import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';

const Menu = () => {
  return (
    <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="Câmera" icon={<CameraAltIcon />} />
        <BottomNavigationAction label="Calibrar" icon={<SettingsSuggestIcon />} />
        <BottomNavigationAction label="Sim/Não" icon={<DoorSlidingIcon />} />
    </BottomNavigation>
  )
}

export default Menu