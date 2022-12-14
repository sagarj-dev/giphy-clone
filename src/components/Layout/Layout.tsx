import * as React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import MyNavBar from "./MyNavBar";
import MyNavDrawer from "./MyNavDrawer";
import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { loadData, SearchLoadData } from "../../store/data-slice/data-actions";
import { useLocation } from "react-router-dom";

type LayoutType = {
  children: React.ReactElement;
};
export default function ClippedDrawer({ children }: LayoutType) {
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.data.filters);
  const location = useLocation();

  const handlePageChange = (e: React.ChangeEvent<unknown>, v: number) => {
    if (location.pathname === "/") {
      dispatch(loadData({ ...filters, offset: (v - 1) * 12 }));
    } else {
      dispatch(SearchLoadData({ ...filters, offset: (v - 1) * 12 }));
    }
  };

  React.useEffect(() => {
    setPageNumber(filters.offset / 12 + 1);
  }, [filters.offset]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyNavBar />
      <MyNavDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box>
          {children}
          <Box
            sx={{
              marginTop: "1.5rem",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Pagination
              count={10}
              siblingCount={0}
              boundaryCount={1}
              page={pageNumber}
              color="primary"
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
