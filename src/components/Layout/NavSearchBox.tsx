import React from "react";
import { IconButton, InputBase, styled, Stack, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { logout } from "../../store/auth-slice/auth-actions";
import { SearchLoadData } from "../../store/data-slice/data-actions";
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
}));

const NavSearchBox = () => {
  const dispatch = useAppDispatch();

  const [searchString, setSearchString] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(SearchLoadData({ q: searchString, offset: 0 }));
      setSearchString("");
    }
  };
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{ maxWidth: { xs: "200px", sm: "40%" } }}
    >
      <Search>
        <InputBase
          placeholder="Search....."
          onChange={handleChange}
          onKeyUp={handleSearch}
          value={searchString}
        />
      </Search>
      <Tooltip
        title="Logout"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default NavSearchBox;
