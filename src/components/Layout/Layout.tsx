import * as React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import MyNavBar from "./MyNavBar";
import MyNavDrawer from "./MyNavDrawer";

type LayoutType = {
  children: React.ReactElement;
};
export default function ClippedDrawer({ children }: LayoutType) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyNavBar />
      <MyNavDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
