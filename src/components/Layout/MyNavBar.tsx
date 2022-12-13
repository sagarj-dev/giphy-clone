import { Menu } from "@mui/icons-material";
import { AppBar, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import NavSearchBox from "./NavSearchBox";
import { toggleDrawer } from "../../store/setting-slice/setting-actions";

const MyNavBar = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <AppBar position="sticky">
        <Box
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack gap={2} direction="row" alignItems="center">
            <IconButton
              color="inherit"
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={() => dispatch(toggleDrawer())}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              color="white"
              sx={{ textDecoration: "none" }}
              component={Link}
              to="/"
            >
              Giphy
            </Typography>
          </Stack>
          <NavSearchBox />
          {/* <span>3</span> */}
        </Box>
      </AppBar>
    </div>
  );
};

export default MyNavBar;
