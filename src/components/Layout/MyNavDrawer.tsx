import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  Drawer,
  Box,
  Toolbar,
} from "@mui/material/";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { toggleDrawer } from "../../store/setting-slice/setting-actions";
const drawerWidth = 240;
const DrawerContent = () => {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalFireDepartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tranding" />
          </ListItemButton>
        </ListItem>
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <Toolbar>
          <DrawerContent />
        </Toolbar>
      </Box>
    </div>
  );
};

export default MyNavDrawer;
