import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainRoutes } from "constants/routing";
const drawerWidth = 240;

const SideBar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);

  return (
    <Box sx={{ display: "flex", zIndex: 1 }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#5F5CEC"
          },
        }}
      >
        <Toolbar  sx={{ marginTop: "30px" }} />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {mainRoutes.map(({ Icon, name, path }) => (
              <ListItem key={name || "test"} disablePadding>
                <ListItemButton onClick={() => handleNavigate(path)}>
                  <ListItemIcon sx={{ color: "#CFCEF9" }}>{Icon && <Icon />}</ListItemIcon>
                  <ListItemText primary={name || ""} sx={{ color: "#CFCEF9" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
