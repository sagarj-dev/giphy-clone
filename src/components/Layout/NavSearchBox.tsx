import React from "react";
import { IconButton, InputBase, styled, Stack, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  //   width: "20%",
  display: "flex",
  alignItems: "center",
}));

const NavSearchBox = () => {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{ maxWidth: { xs: "200px", sm: "40%" } }}
    >
      <Search>
        <InputBase placeholder="Search....." />
      </Search>
      <Tooltip title="Logout">
        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default NavSearchBox;
