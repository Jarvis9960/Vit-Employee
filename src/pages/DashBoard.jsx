import React from "react";
import Sidebar from "./Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DashBoard = () => {
  return (
    <Box sx={{ display: "flex" }}>
    <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>Dashboard Comming soon.....</Typography>
      </Box>
    </Box>
  );
};

export default DashBoard;
