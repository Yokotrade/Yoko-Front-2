import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import Header from "components/Header";
import SideBar from "components/SideBar";

const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header position="fixed" />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar sx={{ marginTop: "10px" }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
