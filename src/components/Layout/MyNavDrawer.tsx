import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  Box,
} from "@mui/material/";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { toggleDrawer } from "../../store/setting-slice/setting-actions";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const DrawerContent = () => {
  const allLinks: string[] = [
    "Tranding",
    "Artists",
    "Reactions",
    "Entertainment",
    "Sport",
    "Stickers",
    "Animal",
    "Anime",
    "Meme",
    "Gaming",
    "Bollywood",
  ];
  return (
    <>
      <List sx={{ marginTop: 10 }}>
        {allLinks.map((path) => (
          <ListItem key={path}>
            <ListItemButton
              component={Link}
              to={`/category/${path.toLowerCase()}`}
            >
              <ListItemIcon>
                <LocalFireDepartmentIcon />
              </ListItemIcon>
              <ListItemText primary={path} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const MyNavDrawer = () => {
  const drawerState = useAppSelector((state) => state.settings.drawer);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Drawer
        // container={container}
        variant="temporary"
        open={drawerState}
        // onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        onClose={() => dispatch(toggleDrawer())}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,

            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      </Box>
    </div>
  );
};

export default MyNavDrawer;
