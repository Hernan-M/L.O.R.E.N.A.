import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import { WidthFull } from "@mui/icons-material";

const Menu = () => {
  return (
    <div className="absolute w-100 bottom-0 left-0 right-0">
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
    </div>
  )
}

export default Menu