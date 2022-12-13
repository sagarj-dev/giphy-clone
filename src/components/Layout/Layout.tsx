import * as React from "react";
import { Box, Stack } from "@mui/material";
import MyNavBar from "./MyNavBar";
import MyNavDrawer from "./MyNavDrawer";

const drawerWidth = 240;
type LayoutType = {
  children: React.ReactElement;
};
export default function ClippedDrawer({ children }: LayoutType) {
  return (
    <Box>
      <MyNavBar />
      <Stack direction="row" component="main">
        <Box>
          <MyNavDrawer />
        </Box>
        <Box>{children}</Box>
      </Stack>
    </Box>
  );
}
