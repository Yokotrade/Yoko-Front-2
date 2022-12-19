import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleIcon from "@mui/icons-material/People";
import PercentIcon from "@mui/icons-material/Percent";
import {
  GENERAL_PATH,
  STATISTICS_PATH,
  REFERRAL_PATH,
  COMMISSION_PATH,
} from "constants/path";
import * as Styled from "./SideBar.styled";

const SideBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);

  return (
    <Styled.SideBarWrapper>
      <Styled.UserBlock>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate(GENERAL_PATH)}>
              <ListItemIcon sx={{ color: "#CFCEF9" }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Главная" sx={{ color: "#CFCEF9" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate(STATISTICS_PATH)}>
              <ListItemIcon sx={{ color: "#CFCEF9" }}>
                <SignalCellularAltIcon />
              </ListItemIcon>
              <ListItemText primary="Статистика" sx={{ color: "#CFCEF9" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate(REFERRAL_PATH)}>
              <ListItemIcon sx={{ color: "#CFCEF9" }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Реферальная программа"
                sx={{ color: "#CFCEF9" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate(COMMISSION_PATH)}>
              <ListItemIcon sx={{ color: "#CFCEF9" }}>
                <PercentIcon />
              </ListItemIcon>
              <ListItemText primary="Комиссия" sx={{ color: "#CFCEF9" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Styled.UserBlock>
    </Styled.SideBarWrapper>
  );
};

export default SideBar;
