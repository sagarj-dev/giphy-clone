import React from "react";
import GifCard from "../Common/GifCard";

import Layout from "../Layout/Layout";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { loadData } from "../../store/data-slice/data-actions";
export default function Home() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);

  React.useEffect(() => {
    dispatch(loadData({ category: "trending", offset: 0 }));
  }, [dispatch]);

  return (
    <Layout>
      {/* <h1>Home</h1> */}
      <Box
        display="grid"
        gap={2}
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          },
        }}
      >
        {data.length > 0 && data.map((d) => <GifCard data={d} key={d.id} />)}
      </Box>
    </Layout>
  );
}
